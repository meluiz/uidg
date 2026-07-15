import type { NanoidPageProps } from './index.server';

import { Scaffold } from '@/components/layout';
import { Prose } from '@/components/ui';

const NanoidPage = (props: NanoidPageProps) => {
  const { uidg } = props;

  return (
    <Scaffold title="nanoid" uidg={uidg}>
      <article className="flex flex-col gap-4">
        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="xlarge">What is Nano ID</Prose.Heading>
          <Prose.Text>
            <strong>Nano ID</strong> is a tiny, secure, URL-friendly unique string ID generator.
            It produces <strong>21 characters</strong> by default, drawn from a{' '}
            <strong>64-symbol alphabet</strong> (<code>A–Z</code>, <code>a–z</code>,{' '}
            <code>0–9</code>, <code>_</code> and <code>-</code>), packing more randomness into
            fewer characters than a UUID while staying safe to use in URLs.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>How it is generated</h2>
          </Prose.Heading>
          <Prose.Text>
            Every character comes from a <strong>cryptographically secure</strong> random source
            (the Web Crypto API in browsers, the <strong>crypto module</strong> in Node.js).
            There is no timestamp, counter, or machine fingerprint involved — the id is{' '}
            <strong>pure randomness</strong>. The algorithm also avoids the classic{' '}
            <strong>modulo bias</strong>, so every symbol in the alphabet has exactly the same
            probability of appearing.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Denser than a UUID</h2>
          </Prose.Heading>
          <Prose.Text>
            A UUID v4 uses 16 symbols (hex) and needs 36 characters to carry 122 bits of
            randomness. Nano ID uses 64 symbols, so each character carries{' '}
            <strong>6 bits</strong> of entropy — 21 characters add up to{' '}
            <strong>126 bits</strong>, slightly more than a UUID v4 in barely more than half the
            length.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Collision resistance</h2>
          </Prose.Heading>
          <Prose.Text>
            With 126 bits of randomness, collisions are a{' '}
            <strong>practical impossibility</strong>: generating a thousand ids per second, you
            would need roughly <strong>billions of years</strong> to reach a 1% probability of a
            single collision. No coordination between machines is required — every generator is
            independent.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Configurable length and alphabet</h2>
          </Prose.Heading>
          <Prose.Text>
            The size is adjustable: shorter ids save space at the cost of a higher collision
            risk, longer ids push the odds even lower. Beyond length, the{' '}
            <strong>customAlphabet</strong> API lets you restrict the symbol set — for example,
            lowercase-only ids for case-insensitive systems, or digits-only codes — with the
            same unbiased, secure generation.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>Not sortable — by design</h2>
          </Prose.Heading>
          <Prose.Text>
            Since a Nano ID encodes <strong>no timestamp</strong>, it reveals nothing about when
            or where it was created — but it also cannot be sorted by creation time. If you need
            chronological ordering, add a separate <strong>timestamp column</strong> or reach
            for a time-ordered format like UUID v7.
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>One caveat: HTML ids</h2>
          </Prose.Heading>
          <Prose.Text>
            Unlike CUID2, a Nano ID can start with a <strong>digit</strong>, a{' '}
            <strong>hyphen</strong>, or an underscore, which makes it invalid as a bare HTML id
            or CSS selector. If you use it in the DOM, add a letter <strong>prefix</strong> (for
            example <code>id-V1StGXR8_Z5jdHi6B-myT</code>).
          </Prose.Text>
        </div>

        <div className="flex flex-col gap-y-1.5">
          <Prose.Heading size="large" asChild>
            <h2>When to use it</h2>
          </Prose.Heading>
          <Prose.Text>
            A great default when you want <strong>short, URL-safe, unguessable</strong> ids with
            minimal footprint — share links, public tokens, file names, client-generated keys.
            If you need ids that double as sortable database keys, prefer UUID v7; if you need
            HTML-safe ids out of the box, CUID2 fits better.
          </Prose.Text>
        </div>
      </article>
    </Scaffold>
  );
};

export default NanoidPage;
