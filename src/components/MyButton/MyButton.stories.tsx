import type { Meta, StoryFn } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
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
PrimaryButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await userEvent.click(button);
};

export const HoverButton = Template.bind({});
HoverButton.args = {
  label: "Hover Button",
  backgroundColor: "#007BFF",
  color: "#fff",
  hoverColor: "#0056b3",
  activeColor: "#004494",
};
HoverButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await userEvent.hover(button);
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  label: "Disabled Button",
  disabled: true,
  backgroundColor: "#007BFF",
  color: "#fff",
};
DisabledButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = canvas.getByRole('button');
  await userEvent.click(button);
};
