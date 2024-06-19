import type { Meta, StoryFn } from '@storybook/react';
import MyLink from './MyLink';
import { MyLinkProps } from './MyLink.types';

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

export const HoverLink = Template.bind({});
HoverLink.args = {
  children: 'Hover Link',
  color: '#007BFF',
  hoverColor: '#0056b3',
};

export const DisabledLink = Template.bind({});
DisabledLink.args = {
  children: 'Disabled Link',
  disabled: true,
  color: '#007BFF',
};
