import type { CuidPageProps } from './index.server';

import { Scaffold } from '@/components/layout';
import { Prose } from '@/components/ui';

const CuidPage = (props: CuidPageProps) => {
  const { uidg, version } = props;

  return (
    <Scaffold title="cuid" uidg={uidg} version={version}>
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="xlarge">What is a CUID2</Prose.Heading>
          <Prose.Text>
            <strong>CUID2</strong> (Collision-resistant Unique Identifier, version 2) generates
            secure, collision-resistant ids optimized for horizontal scaling and performance.
            The output is a string of lowercase letters and digits (<strong>base36</strong>), 24
            characters by default, always starting with a letter so it is safe to use in HTML
            ids, CSS selectors, and URLs.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Why it replaced CUID</h2>
          </Prose.Heading>
          <Prose.Text>
            The original CUID was <strong>sortable and monotonic</strong>, and exposed its
            structure (timestamp, counter) in plaintext. That leaked information and made ids
            partially predictable. CUID2 was redesigned after a security review to remove these
            weaknesses by <strong>hashing all of its inputs</strong>.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>How it is generated</h2>
          </Prose.Heading>
          <Prose.Text>
            It combines several entropy sources — a random initial letter, the current{' '}
            <strong>timestamp</strong>, a session counter, a host <strong>fingerprint</strong>,
            and cryptographically secure random data — then{' '}
            <strong>hashes them together</strong> and encodes the result in base36. Mixing
            independent sources keeps collision odds negligible across many machines without
            coordination.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Secure by design</h2>
          </Prose.Heading>
          <Prose.Text>
            Because every input passes through a <strong>one-way hash</strong>, a CUID2 reveals
            nothing about when or where it was created and cannot be reverse-engineered. It is
            not meant to be a secret token, but it avoids the{' '}
            <strong>information leakage</strong> of sequential ids.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Configurable length</h2>
          </Prose.Heading>
          <Prose.Text>
            The default length is <strong>24 characters</strong>. You can request longer ids to
            push collision probability even lower for very large datasets, or shorter ones when
            space matters and a slightly higher collision risk is acceptable.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Not sortable — the trade-off</h2>
          </Prose.Heading>
          <Prose.Text>
            Unlike UUID v7 or the old CUID, CUID2 is deliberately <strong>not sortable</strong>{' '}
            by creation time. This protects privacy, but it means you cannot rely on the id for
            chronological ordering — add a separate <strong>timestamp column</strong> if you
            need that.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>When to use it</h2>
          </Prose.Heading>
          <Prose.Text>
            A good default for application-level ids (users, sessions, records) when you want
            short, <strong>URL-safe</strong>, unguessable identifiers and do not need
            database-native time ordering. If <strong>sortable keys</strong> matter most, UUID
            v7 may fit better.
          </Prose.Text>
        </div>
      </article>
    </Scaffold>
  );
};

export default CuidPage;
