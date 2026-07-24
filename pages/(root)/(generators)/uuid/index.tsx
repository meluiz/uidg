import type { UuidPageProps } from './index.server';

import { Link } from '@void/react';

import { Scaffold } from '@/components/layout';
import { Prose } from '@/components/ui';
import { VersionControl } from '@/modules/uuid';

const UuidPage = (props: UuidPageProps) => {
  const { uidg, version } = props;

  return (
    <Scaffold title="uuid" uidg={uidg} version={version} controls={<VersionControl />}>
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="xlarge">What is a UUID</Prose.Heading>
          <Prose.Text>
            A <strong>UUID</strong> (Universally Unique Identifier) is a 128-bit identifier,
            usually written as 32 hexadecimal digits grouped into five blocks (8-4-4-4-12). Its
            goal is to generate unique identifiers without central coordination: two systems can
            create UUIDs independently with a negligible chance of collision. A few bits are
            reserved to mark the <strong>variant</strong> (the bit layout) and the{' '}
            <strong>version</strong>, which says how the value was generated.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Time-based ids</h2>
          </Prose.Heading>
          <Prose.Text>
            The earliest versions derive the id from <strong>when</strong> and{' '}
            <strong>where</strong> it was created. Version 1 mixes a timestamp with a node
            identifier — usually the machine's MAC address — while version 2 is a rare DCE
            Security variant that swaps part of the timestamp for a POSIX UID/GID. They
            guarantee strong uniqueness, but can{' '}
            <strong>leak the MAC address and creation time</strong>.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Name-based ids</h2>
          </Prose.Heading>
          <Prose.Text>
            Versions 3 and 5 are <strong>deterministic</strong>: they hash a namespace together
            with a name, so the same input always produces the same UUID. Version 3 uses{' '}
            <strong>MD5</strong> and version 5 uses <strong>SHA-1</strong> — prefer v5, since it
            relies on a stronger hash. These are ideal when you need a stable id derived from
            existing data rather than a fresh random one.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Random ids</h2>
          </Prose.Heading>
          <Prose.Text>
            Version 4 is the most common one today: 122 bits are filled with{' '}
            <strong>random</strong> data. It is simple, reveals nothing about the machine or
            time, and its collision probability is practically zero. The trade-off is that it is{' '}
            <strong>not sortable</strong>, which can hurt database index locality.
          </Prose.Text>
          <Prose.Text>
            Version 4 is the most common one today: 122 bits are filled with{' '}
            <strong>random</strong> data. It is simple, reveals nothing about the machine or
            time, and its collision probability is practically zero. The trade-off is that it is{' '}
            <strong>not sortable</strong>, which can hurt database index locality. If you want
            the same randomness in a shorter string, <Link href="/nanoid">Nano ID</Link> and{' '}
            <Link href="/cuid">CUID2</Link> pack more entropy into fewer characters.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Sortable, modern ids</h2>
          </Prose.Heading>
          <Prose.Text>
            The newer versions bring back time ordering without the privacy issues of v1.
            Version 6 reorders the v1 fields so the most significant timestamp bits come first,
            and version 7 — the recommended choice for new systems — uses a{' '}
            <strong>Unix timestamp in milliseconds</strong> followed by randomness. Both are{' '}
            <strong>sortable</strong>, making them great as database keys.
          </Prose.Text>
          <Prose.Text>
            The newer versions bring back time ordering without the privacy issues of v1.
            Version 6 reorders the v1 fields so the most significant timestamp bits come first,
            and version 7 — the recommended choice for new systems — uses a{' '}
            <strong>Unix timestamp in milliseconds</strong> followed by randomness. Both are{' '}
            <strong>sortable</strong>, making them great as database keys.{' '}
            <Link href="/ulid">ULID</Link> applies the same idea outside the UUID spec, encoding
            it in 26 characters instead of 36.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Custom ids</h2>
          </Prose.Heading>
          <Prose.Text>
            Version 8 is a <strong>free/experimental</strong> format: the spec only fixes the
            version and variant bits and leaves the rest to the application. It lets you build
            your own layout while still producing something recognized as a valid UUID.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Which version to use</h2>
          </Prose.Heading>
          <Prose.Text>
            For most cases, reach for <strong>v4</strong> when you just need a random id and
            ordering does not matter, or <strong>v7</strong> when you want sortable database
            keys. Use <strong>v5</strong> for deterministic, name-derived ids. The time-based
            v1/v2 are mostly legacy, and v8 is reserved for specialized, custom needs. Versions
            6, 7, and 8 were standardized by <strong>RFC 9562</strong>, which replaced RFC 4122.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>UUID or something else?</h2>
          </Prose.Heading>
          <Prose.Text>
            UUID is the safe, standardized choice, but its 36 characters are verbose for ids
            that travel in URLs. If you need something <strong>shorter</strong> with the same
            collision safety, <Link href="/nanoid">Nano ID</Link> carries slightly more
            randomness in 21 characters. For <strong>sortable</strong> keys in a compact,
            case-insensitive encoding, <Link href="/ulid">ULID</Link> is the closest alternative
            to v7. And if the id must be safe as an <strong>HTML id or CSS selector</strong> out
            of the box, <Link href="/cuid">CUID2</Link> always starts with a letter.
          </Prose.Text>
        </div>
      </article>
    </Scaffold>
  );
};

export default UuidPage;
