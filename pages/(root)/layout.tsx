import type React from 'react';

import { Link, useRouter } from '@void/react';

import { ThemeSwitcher } from '@/components/layout';
import { Button, Kbd, Prose } from '@/components/ui';
import { navigation } from '@/utils/constants';

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();

  return (
    <div className="relative flex w-full flex-1 flex-col">
      <header
        id="__APP_HEADER"
        className="sticky inset-x-0 top-0 z-1 border-stroke-sidebar border-b bg-surface/80 text-foreground backdrop-blur-sm"
      >
        <nav
          className="container relative z-1 flex min-h-14 items-center justify-between gap-2"
          aria-label="Navigation"
        >
          <Link
            href="/"
            className="relative me-4 inline-flex shrink-0 items-center gap-1 py-2 font-medium font-mono text-fg lowercase transition-colors duration-200"
            aria-label="uidg home"
            prefetch="mount"
            translate="no"
          >
            uidg
          </Link>
          <ul className="flex shrink-0 items-center gap-x-0.5">
            {navigation.map((item) => (
              <li key={`navigation:${item.label}:item`} className="contents">
                <Button.Root className="font-mono hover:text-surface-info/80" ghost asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    aria-current={item.href === router.url.pathname}
                  >
                    <Button.Label className="max-sm:text-xs">{item.label}</Button.Label>
                    <Kbd.Root className="max-sm:hidden">{item.shortcut}</Kbd.Root>
                  </Link>
                </Button.Root>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="__APP_MAIN" className="flex flex-1 flex-col">
        {children}
      </main>
      <footer
        id="__APP_FOOTER"
        className="relative mt-8 border-stroke-sidebar border-t bg-surface/80 text-foreground backdrop-blur-sm"
      >
        <div className="container relative flex min-h-14 items-center justify-between">
          <Prose.Text size="small">
            © {new Date().getFullYear()} Unique ID Generator by{' '}
            <Link
              href="https://meluiz.com"
              target="_blank"
              translate="no"
              rel="noopener noreferrer author"
              aria-label="Visit author's website (opens in a new tab)"
            >
              meluiz
            </Link>
          </Prose.Text>
          <div className="flex shrink-0 items-center justify-end gap-x-3">
            <ThemeSwitcher />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
