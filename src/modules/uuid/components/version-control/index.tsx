import { createListCollection, Portal } from '@ark-ui/react';
import { useRouter } from '@void/react';
import { IconCheck2Outline12, IconChevronExpandYOutline12 } from 'nucleo-ui-outline-12';

import { Select } from '@/components/ui';
import { uuid } from '@/utils/helpers';

const collection = createListCollection({
  items: [
    { label: 'Version 1', value: 'v1' },
    { label: 'Version 3', value: 'v3' },
    { label: 'Version 4', value: 'v4' },
    { label: 'Version 5', value: 'v5' },
    { label: 'Version 6', value: 'v6' },
    { label: 'Version 7', value: 'v7' },
  ],
});

export const VersionControl = () => {
  const router = useRouter();

  const version = uuid.version.normalize(router.query.get('v') ?? '4');

  return (
    <Select.Root
      collection={collection}
      defaultValue={[version]}
      className="w-32"
      positioning={{ sameWidth: true }}
      onValueChange={({ value }) => {
        const version = value.at(0);

        if (version) {
          router.visit(`/uuid?v=${version.replace(/^v/, '')}`);
        }
      }}
    >
      <Select.Control size="xsmall">
        <Select.Trigger>
          <Select.ValueText placeholder="Select an option" />
          <Select.Indicator>
            <IconChevronExpandYOutline12 />
          </Select.Indicator>
        </Select.Trigger>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {collection.items.map((item) => (
              <Select.Item key={item.value} item={item}>
                <Select.ItemIndicator>✓</Select.ItemIndicator>
                <Select.ItemText>{item.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
      <Select.HiddenSelect />
    </Select.Root>
  );
};
