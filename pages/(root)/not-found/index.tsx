import { Prose } from '@/components/ui';

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-y-2.5 sm:gap-y-4">
      <Prose.Heading
        align="center"
        size="4xlarge"
        className="bg-surface-primary px-1.5 font-mono text-foreground-primary"
      >
        404
      </Prose.Heading>
      <Prose.Text
        align="center"
        size="large"
        weight="medium"
        className="font-mono text-foreground uppercase"
      >
        This page could not be found.
      </Prose.Text>
    </div>
  );
};

export default NotFoundPage;
