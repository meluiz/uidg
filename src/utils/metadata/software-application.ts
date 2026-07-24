import type { CloudContext, HeadDescriptor } from 'void';
import type { SoftwareApplicationOptions, WebApplication } from './types';

import { env } from 'void/env';

import { toArray } from './utils';

const DEFAULT_CATEGORY = 'DeveloperApplication';
const DEFAULT_OPERATING_SYSTEM = 'Any';
const DEFAULT_BROWSER_REQUIREMENTS = 'Requires JavaScript';

const TITLE_SEPARATOR = /\s[—–|]\s/;

const escapeJson = (value: string) => {
  return value
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
};

const findMeta = (descriptor: HeadDescriptor, name: string) => {
  return descriptor.meta?.find((entry) => 'name' in entry && entry.name === name)?.content;
};

const findLink = (descriptor: HeadDescriptor, rel: string) => {
  return descriptor.link?.find((entry) => entry.rel === rel)?.href;
};

const resolveUrl = (context: CloudContext, descriptor: HeadDescriptor, url?: string) => {
  const candidate = url ?? findLink(descriptor, 'canonical');

  if (candidate != null) {
    return candidate;
  }

  const { origin, pathname } = new URL(context.req.url, env.APP_URL);

  return `${origin}${pathname}`;
};

const resolveName = (descriptor: HeadDescriptor, name?: string) => {
  if (name != null) {
    return name;
  }

  return descriptor.title?.split(TITLE_SEPARATOR)[0]?.trim();
};

export const resolveWebApplication = (data: WebApplication) => {
  let origin: string;

  try {
    origin = new URL(data.url).origin;
  } catch {
    throw new TypeError(
      `WebApplication url must be absolute, received "${data.url}". Add a canonical link to the head descriptor or pass url explicitly.`,
    );
  }

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${data.url}#app`,
    name: data.name,
    url: data.url,
    applicationCategory: data.applicationCategory ?? DEFAULT_CATEGORY,
    operatingSystem: data.operatingSystem ?? DEFAULT_OPERATING_SYSTEM,
    browserRequirements: data.browserRequirements ?? DEFAULT_BROWSER_REQUIREMENTS,
    isAccessibleForFree: true,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  };

  if (data.description != null) {
    schema.description = data.description;
  }

  const features = toArray(data.featureList);

  if (features.length > 0) {
    schema.featureList = features;
  }

  if (data.author != null) {
    schema.author = {
      '@type': 'Person',
      name: data.author.name,
      ...(data.author.url != null && { url: data.author.url }),
    };
  }

  schema.publisher = { '@id': `${origin}#author` };

  return escapeJson(JSON.stringify(schema));
};

export const createSoftwareApplication = (
  context: CloudContext,
  descriptor: HeadDescriptor,
  options: SoftwareApplicationOptions = {},
): HeadDescriptor => {
  const name = resolveName(descriptor, options.name);

  if (name == null) {
    throw new TypeError(
      'WebApplication name could not be resolved. Provide a title in the head descriptor or pass name explicitly.',
    );
  }

  const content = resolveWebApplication({
    ...options,
    name,
    url: resolveUrl(context, descriptor, options.url),
    description: options.description ?? findMeta(descriptor, 'description'),
    author: options.author ?? { name: 'meluiz', url: 'https://meluiz.com' },
  });

  return {
    ...descriptor,
    script: [...(descriptor.script ?? []), { type: 'application/ld+json', innerHTML: content }],
  };
};
