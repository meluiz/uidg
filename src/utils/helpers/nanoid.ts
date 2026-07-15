import { nanoid as $nanoid, urlAlphabet } from 'nanoid';

const DEFAULT_LENGTH = 21;
const MIN_LENGTH = 2;
const MAX_LENGTH = 32;

const PATTERN = new RegExp(`^[${urlAlphabet.replace('-', '\\-')}]+$`);

const cache = new Map<number, () => string>();

const generator = (length: number): (() => string) => {
  let handler = cache.get(length);

  if (!handler) {
    handler = length === DEFAULT_LENGTH ? $nanoid : () => $nanoid(length);
    cache.set(length, handler);
  }

  return handler;
};

const clamp = (length?: number): number => {
  if (typeof length !== 'number' || Number.isNaN(length)) {
    return DEFAULT_LENGTH;
  }

  return Math.min(MAX_LENGTH, Math.max(MIN_LENGTH, Math.trunc(length)));
};

export type NanoidOptions = {
  length?: number;
};

export interface NanoidFunction {
  (options: NanoidOptions): string;
  is: (value: string) => boolean;
}

const is = (value: string): boolean => PATTERN.test(value);

const create = (options: NanoidOptions = {}): string => {
  return generator(clamp(options.length))();
};

export const nanoid: NanoidFunction = Object.assign(create, { is });
