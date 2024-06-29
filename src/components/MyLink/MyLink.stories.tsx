import type { Meta, StoryFn } from '@storybook/react';
import MyLink from './MyLink';
import { MyLinkProps } from './MyLink.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: "Daniel-Library/MyLink",
  component: MyLink,
  argTypes: {
    color: { control: 'color' },
    hoverColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof MyLink>;

const Template: StoryFn<MyLinkProps> = (args) => <MyLink {...args} />;

export const PrimaryLink = Template.bind({});
PrimaryLink.args = {
  children: 'Primary Link',
  color: '#007BFF',
};

PrimaryLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = await canvas.getByTestId('MyLink');
  await userEvent.click(link);
};

export const HoverLink = Template.bind({});
HoverLink.args = {
  children: 'Hover Link',
  color: '#007BFF',
  hoverColor: '#0056b3',
};

HoverLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = await canvas.getByTestId('MyLink');
  await userEvent.hover(link);
};
export const DisabledLink = Template.bind({});
DisabledLink.args = {
  children: 'Disabled Link',
  disabled: true,
  color: '#007BFF',
};

DisabledLink.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const link = await canvas.getByTestId('MyLink');
  await userEvent.hover(link);
};