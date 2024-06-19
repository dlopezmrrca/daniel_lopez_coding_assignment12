import type { Meta, StoryFn } from '@storybook/react';
import ToggleButton from './ToggleButton';
import { ToggleButtonProps } from './ToggleButton.types';

export default {
  title: 'Daniel-Library/ToggleButton',
  component: ToggleButton,
  argTypes: {
    isActive: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof ToggleButton>;

const Template: StoryFn<ToggleButtonProps> = (args) => <ToggleButton {...args} />;

export const PrimaryToggleButton = Template.bind({});
PrimaryToggleButton.args = {
  isActive: false,
  disabled: false,
};
