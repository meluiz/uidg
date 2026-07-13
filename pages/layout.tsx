import type React from 'react';

import './globals.css';
import type { VoidRouter } from 'void/pages-client';

import { useHotkey } from '@tanstack/react-hotkeys';
import { useRouter } from '@void/react';

const navigate = (pathname: string, router: VoidRouter) => {
  if (pathname === router.url.pathname) {
    return router.refresh({ preserveScroll: true });
  }

  return router.visit(pathname);
};

const Layout = ({ children }: React.PropsWithChildren) => {
  const router = useRouter();

  useHotkey('U', () => navigate('/uuid', router));
  useHotkey('C', () => navigate('/cuid', router));

  return (
    <div
      id="__APP_ROOT"
      className="relative isolate flex min-h-dvh w-full flex-col bg-surface-sidebar text-foreground"
    >
      {children}
    </div>
  );
};

export default Layout;
