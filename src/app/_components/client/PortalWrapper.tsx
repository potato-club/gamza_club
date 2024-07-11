'use client';

import * as React from 'react';
import { createPortal } from 'react-dom';

export default function PortalWrapper({ children }: React.PropsWithChildren) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted
    ? createPortal(
        <div className="fixed top-0 left-0 w-full h-full modal-background flex justify-center items-center">
          {children}
        </div>,
        document.body
      )
    : null;
}
