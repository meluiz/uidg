import type React from 'react';

import './globals.css';

const Layout = ({ children }: React.PropsWithChildren) => {
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
