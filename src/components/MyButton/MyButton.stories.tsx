import type { Meta, StoryFn } from '@storybook/react';
import MyButton from './MyButton';
import { MyButtonProps } from './MyButton.types';

export default {
  title: "Daniel-Library/MyButton",
  component: MyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    hoverColor: { control: 'color' },
    activeColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof MyButton>;

const Template: StoryFn<MyButtonProps> = (args) => <MyButton {...args} />;

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: "Primary Button",
  backgroundColor: "#007BFF",
  color: "#fff",
  hoverColor: "#0056b3",
  activeColor: "#004494",
};

export const HoverButton = Template.bind({});
HoverButton.args = {
  label: "Hover Button",
  backgroundColor: "#007BFF",
  color: "#fff",
  hoverColor: "#0056b3",
  activeColor: "#004494",
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: "Disabled Button",
  disabled: true,
  backgroundColor: "#007BFF",
  color: "#fff",
};
