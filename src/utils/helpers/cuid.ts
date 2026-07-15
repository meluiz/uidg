import { createId, init, isCuid } from '@paralleldrive/cuid2';

const DEFAULT_LENGTH = 24;
const MIN_LENGTH = 2;
const MAX_LENGTH = 32;

const cache = new Map<number, () => string>();

const generator = (length: number): (() => string) => {
  let handler = cache.get(length);

  if (!handler) {
    handler = length === DEFAULT_LENGTH ? createId : init({ length });
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

export type CUIDOptions = {
  length?: number;
};

interface VersionFunction {
  (value: string): '2' | null;
  normalize: (raw?: string | null) => 'v2';
}

export interface CUIDFunction {
  (options?: CUIDOptions): string;
  version: VersionFunction;
  is: (value: string) => boolean;
}

const version: VersionFunction = Object.assign(
  (value: string): '2' | null => (isCuid(value) ? '2' : null),
  { normalize: (): 'v2' => 'v2' },
);

const create = (options: CUIDOptions = {}): string => {
  return generator(clamp(options.length))();
};

export const cuid: CUIDFunction = Object.assign(create, {
  version,
  is: isCuid,
});
