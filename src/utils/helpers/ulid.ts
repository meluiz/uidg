import { ulid as $ulid, decodeTime, encodeTime, isValid, TIME_MAX } from 'ulid';

const seed = (time?: number): number | undefined => {
  if (typeof time !== 'number' || !Number.isFinite(time) || time < 0) {
    return undefined;
  }

  return Math.min(TIME_MAX, Math.trunc(time));
};

interface TimeFunction {
  decode: (value: string) => number;
  encode: (now: number, len?: number | undefined) => string;
}

export type UlidOptions = {
  time?: number;
};

export interface UlidFunction {
  (options?: UlidOptions): string;
  is: (value: string) => boolean;
  time: TimeFunction;
}

const create = (options: UlidOptions = {}): string => {
  const time = seed(options.time);
  return time === undefined ? $ulid() : $ulid(time);
};

export const ulid: UlidFunction = Object.assign(create, {
  is: isValid,
  time: {
    decode: decodeTime,
    encode: encodeTime,
  },
});
