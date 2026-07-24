import type { UlidPageProps } from './index.server';

import { Link } from '@void/react';

import { Scaffold } from '@/components/layout';
import { Prose } from '@/components/ui';

const UlidPage = (props: UlidPageProps) => {
  const { uidg } = props;

  return (
    <Scaffold title="ulid" uidg={uidg}>
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="xlarge">What is a ULID</Prose.Heading>
          <Prose.Text>
            <strong>ULID</strong> (Universally Unique Lexicographically Sortable Identifier) is
            a 128-bit id encoded as <strong>26 characters</strong> of Crockford's Base32. It
            carries the same amount of information as a{' '}
            <Link href="/uuid" aria-label="uuid">
              UUID
            </Link>
            , but in a shorter, case-insensitive string that{' '}
            <strong>sorts by creation time</strong>.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Anatomy of a ULID</h2>
          </Prose.Heading>
          <Prose.Text>
            The 128 bits split in two: the first <strong>48 bits</strong> encode the creation{' '}
            <strong>timestamp</strong> in milliseconds (enough to last until the year 10889),
            and the remaining <strong>80 bits</strong> are cryptographically secure randomness.
            The timestamp comes first, so ids created later are always{' '}
            <strong>greater as strings</strong>.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Lexicographically sortable</h2>
          </Prose.Heading>
          <Prose.Text>
            Sorting ULIDs alphabetically <strong>is</strong> sorting them chronologically. That
            makes them excellent <strong>database keys</strong>: new rows land at the end of the
            index instead of at random positions, avoiding the index fragmentation that purely
            random ids (
            <Link href="/uuid" aria-label="uuid">
              UUID v4
            </Link>
            ,{' '}
            <Link href="/nanoid" aria-label="nano id">
              Nano ID
            </Link>
            ,{' '}
            <Link href="/cuid" aria-label="cuid">
              CUID2
            </Link>
            ) cause on write-heavy tables.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Crockford's Base32</h2>
          </Prose.Heading>
          <Prose.Text>
            The alphabet uses digits and uppercase letters but excludes{' '}
            <strong>I, L, O, and U</strong> to avoid confusion with 1 and 0 and accidental
            words. The result is <strong>case-insensitive</strong>, URL-safe, and easy to read
            aloud or transcribe — handy for ids that humans occasionally handle.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Monotonic within a millisecond</h2>
          </Prose.Heading>
          <Prose.Text>
            When multiple ids are created in the <strong>same millisecond</strong>, the spec
            defines a monotonic mode: the random part is <strong>incremented</strong> instead of
            regenerated, preserving strict ordering even under bursts. It is an opt-in factory
            in most implementations — plain generation just draws fresh randomness.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>The trade-off: it tells time</h2>
          </Prose.Heading>
          <Prose.Text>
            The sortability comes from exposing the <strong>creation timestamp</strong> in
            plaintext — anyone holding a ULID can decode when it was made. That is exactly the{' '}
            <strong>information leakage</strong> CUID2 was designed to eliminate. If ids are
            public and creation time is sensitive, prefer a fully random format.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Collision resistance</h2>
          </Prose.Heading>
          <Prose.Text>
            Collisions are only possible <strong>within the same millisecond</strong>, where 80
            bits of randomness allow over 10²⁴ distinct ids. In practice, two machines producing
            the same ULID is a <strong>non-event</strong> — no coordination required.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>When to use it</h2>
          </Prose.Heading>
          <Prose.Text>
            The pick when you want <strong>time-ordered</strong> database keys with a compact,
            human-friendly encoding.{' '}
            <Link href="/uuid" data={{ v: 7 }} aria-label="uuid v7">
              UUID v7
            </Link>{' '}
            offers the same idea as an official <strong>RFC standard</strong> with wider native
            database support; ULID answers with a shorter, case-insensitive string. If ordering
            does not matter and privacy does, CUID2 or Nano ID fit better.
          </Prose.Text>
        </div>
      </article>
    </Scaffold>
  );
};

export default UlidPage;
