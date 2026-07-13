import { Link } from '@void/react';

import { Kbd } from '@/components/ui';

const navigation = [
  {
    id: 'uuid',
    href: '/uuid',
    name: 'Universally Unique Identifier',
    encoding: '128-bit',
    specification: 'RFC 9562',
    shortcut: 'u',
  },
  {
    id: 'cuid',
    href: '/cuid',
    name: 'Collision-resistant Unique Identifier',
    encoding: 'base36',
    specification: 'CUID2',
    shortcut: 'c',
  },
];

const HomePage = () => {
  return (
    <main id="__APP_MAIN" className="relative flex w-full flex-1 flex-col">
      <h1 className="sr-only">Unique ID Generator </h1>
      <div className="relative flex flex-1 flex-col max-lg:divide-y lg:flex-row lg:divide-x">
        {navigation.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="flex flex-1 flex-col items-center justify-center gap-y-6 bg-surface-sidebar hover:bg-surface-secondary/72"
            prefetch="mount"
            aria-label={`Generate ${item.name} (${item.encoding})`}
          >
            <h2 className="font-bold font-mono text-6xl text-foreground/24 md:text-8xl">
              {item.id}
            </h2>
            <div className="flex flex-col items-center gap-y-4">
              <div className="flex flex-col items-center gap-y-1 text-center">
                <p className="font-sans text-foreground text-sm md:text-base">{item.name}</p>
                <p className="font-sans text-foreground text-sm md:text-base">
                  {item.encoding} · {item.specification}
                </p>
              </div>
              <Kbd.Root className="max-md:hidden">{item.shortcut}</Kbd.Root>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
