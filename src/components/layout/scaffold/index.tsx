import type React from 'react';

import { Clipboard, Swap, useClipboard } from '@ark-ui/react';
import { useHotkey } from '@tanstack/react-hotkeys';
import { useRouter } from '@void/react';
import {
  IconCheckOutline24,
  IconCopy2Outline24,
  IconRefresh3Outline24,
} from 'nucleo-core-outline-24';

import { Button, Prose } from '@/components/ui';

export type ScaffoldProps = React.PropsWithChildren<{
  title: string;
  uidg: string;
  version?: string;
  controls?: React.ReactNode;
}>;

export const Scaffold = (props: ScaffoldProps) => {
  const { title, uidg, version, controls = null, children } = props;

  const router = useRouter();
  const clipboard = useClipboard({
    value: uidg,
    timeout: 1200,
  });

  useHotkey('Mod+C', () => clipboard.copy());
  useHotkey('R', () => router.refresh({ preserveScroll: true }));

  return (
    <div className="relative flex w-full flex-col gap-8">
      <div className="relative border-b">
        <div className="container relative flex flex-col gap-y-3 py-4">
          <div className="flex items-center justify-between">
            <Prose.Heading size="2xlarge">
              {title}
              {version && (
                <Prose.Text className="ml-1" size="xsmall" asChild>
                  <span>
                    <span className="sr-only">version</span>
                    {version}
                  </span>
                </Prose.Text>
              )}
            </Prose.Heading>
            <div className="flex items-center gap-x-1.5">
              {controls}
              <Button.Root
                outline
                compact
                size="xsmall"
                onClick={() => router.refresh({ preserveScroll: true })}
                aria-label="Regenerate ID"
              >
                <IconRefresh3Outline24 aria-hidden="true" focusable="false" />
              </Button.Root>
            </div>
          </div>

          <div className="relative">
            <Clipboard.RootProvider
              value={clipboard}
              className="relative w-full min-w-0 overflow-hidden rounded-md border bg-surface/80 backdrop-blur-md focus:outline-none"
            >
              <Clipboard.Control className="group relative flex w-full items-center">
                <Clipboard.Label className="contents w-full">
                  <Clipboard.Input
                    readOnly
                    aria-label="Generated ID"
                    className="w-full px-4 py-3 text-center font-medium font-mono text-lg focus:outline-0 focus-visible:outline-0"
                  />
                </Clipboard.Label>
                <Clipboard.Trigger asChild>
                  <Button.Root
                    className="invisible absolute right-4 focus-visible:visible group-focus-within:visible group-hover:visible"
                    size="xsmall"
                    ghost
                    compact
                  >
                    <Clipboard.Label className="sr-only">Copy ID</Clipboard.Label>
                    <Clipboard.Context>
                      {({ copied }) => (
                        <>
                          <Swap.Root swap={copied}>
                            <Swap.Indicator
                              type="on"
                              aria-hidden="true"
                              className="open:fade-in-50 open:zoom-in-50 closed:fade-out-40 closed:zoom-out-50 closed:animate-out closed:blur-sm duration-200 open:animate-blur-in open:animate-in open:blur-none motion-reduce:animate-none motion-reduce:transition-none"
                            >
                              <IconCheckOutline24 aria-hidden="true" focusable="false" />
                            </Swap.Indicator>
                            <Swap.Indicator
                              type="off"
                              aria-hidden="true"
                              className="open:fade-in-50 open:zoom-in-50 closed:fade-out-40 closed:zoom-out-50 closed:animate-out closed:blur-sm duration-200 open:animate-in open:blur-none motion-reduce:animate-none motion-reduce:transition-none"
                            >
                              <IconCopy2Outline24 aria-hidden="true" focusable="false" />
                            </Swap.Indicator>
                          </Swap.Root>
                          <span aria-live="polite" className="sr-only">
                            {copied ? 'ID copied to clipboard' : ''}
                          </span>
                        </>
                      )}
                    </Clipboard.Context>
                  </Button.Root>
                </Clipboard.Trigger>
              </Clipboard.Control>
            </Clipboard.RootProvider>
          </div>
        </div>
      </div>
      <div className="container relative flex flex-col gap-y-3 py-4">{children}</div>
    </div>
  );
};
