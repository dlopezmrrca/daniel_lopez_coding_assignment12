import type { Meta, StoryFn } from '@storybook/react';
import MyIcon from './MyIcon';
import { MyIconProps } from './MyIcon.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: "Daniel-Library/MyIcon",
  component: MyIcon,
  argTypes: {
    color: { control: 'color' },
    hoverColor: { control: 'color' },
    size: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof MyIcon>;

const Template: StoryFn<MyIconProps> = (args) => <MyIcon {...args} />;

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = {
  color: '#000',
  hoverColor: '#007BFF',
  size: '2em',
};
PrimaryIcon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const icon = await canvas.getByTestId('icon');
  await userEvent.hover(icon);
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  color: '#6c757d',
  hoverColor: '#5a6268',
  size: '2em',
};
SecondaryIcon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const icon = await canvas.getByTestId('icon');
  await userEvent.hover(icon);
};

export const DisabledIcon = Template.bind({});
DisabledIcon.args = {
  color: '#6c757d',
  disabled: true,
  size: '2em',
};
DisabledIcon.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const icon = await canvas.getByTestId('icon');
  await userEvent.hover(icon);
};
