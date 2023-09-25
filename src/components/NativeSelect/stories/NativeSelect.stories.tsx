import type { ComponentStory, ComponentMeta } from '@storybook/react';
import NativeSelect from '../NativeSelect';

export default {
  title: 'Component API/NativeSelect',
  component: NativeSelect,
} as ComponentMeta<typeof NativeSelect>;

export function Default(props: ComponentStory<typeof NativeSelect>) {
  return (
    <NativeSelect
      defaultValue={30}
      inputProps={{
        name: 'age',
        id: 'uncontrolled-native',
      }}
      {...props}
    >
      <option value={10}>Ten</option>
      <option value={20}>Twenty</option>
      <option value={30}>Thirty</option>
    </NativeSelect>
  );
}
