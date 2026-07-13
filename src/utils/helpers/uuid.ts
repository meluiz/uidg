import { version as detectVersion, v1, v3, v4, v5, v6, v7, validate } from 'uuid';

export type UUIDVersion = '1' | '3' | '4' | '5' | '6' | '7';

const DEFAULT_VERSION: UUIDVersion = '4';
const DEFAULT_NAMESPACE = v5.URL;

const GENERATORS: Record<UUIDVersion, (name: string, namespace: string) => string> = {
  '1': () => v1(),
  '3': (name, namespace) => v3(name, namespace),
  '4': () => v4(),
  '5': (name, namespace) => v5(name, namespace),
  '6': () => v6(),
  '7': () => v7(),
};

const normalize = (raw?: string | null): UUIDVersion => {
  const digits = (raw ?? '').toLowerCase().replace(/\D/g, '');
  return (digits in GENERATORS ? digits : DEFAULT_VERSION) as UUIDVersion;
};

export type UUIDOptions = {
  name?: string;
  namespace?: string;
  version?: string | null;
};

interface VersionFunction {
  (value: string): number | null;
  normalize: (raw?: string | null) => string;
}

interface UUIDFunction {
  (options?: UUIDOptions): string;
  version: VersionFunction;
}

const version: VersionFunction = Object.assign(
  (value: string): number | null => (validate(value) ? detectVersion(value) : null),
  {
    normalize: (raw?: string | null) => `v${normalize(raw)}`,
  },
);

const create = (options: UUIDOptions = {}): string => {
  const { version: requested, name = '', namespace } = options;

  const resolved = normalize(requested);
  const safeNamespace = namespace && validate(namespace) ? namespace : DEFAULT_NAMESPACE;

  return GENERATORS[resolved](name, safeNamespace);
};

export const uuid: UUIDFunction = Object.assign(create, { version });
