import type { Meta, StoryFn } from '@storybook/react';
import MyText from './MyText';
import { MyTextProps } from './MyText.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: "Daniel-Library/MyText",
  component: MyText,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    bold: { control: 'boolean' },
    underline: { control: 'boolean' },
    disabled: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    visible: { control: 'boolean' },
  },
} as Meta<typeof MyText>;

const Template: StoryFn<MyTextProps> = (args) => <MyText {...args} />;

export const SmallText = Template.bind({});
SmallText.args = {
  size: 'small',
  children: 'Small Text',
};

SmallText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const text = await canvas.getByTestId('MyText');
  await userEvent.hover(text);
};

export const MediumText = Template.bind({});
MediumText.args = {
  size: 'medium',
  children: 'Medium Text',
};

MediumText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const text = await canvas.getByTestId('MyText');
  await userEvent.hover(text);
};

export const LargeText = Template.bind({});
LargeText.args = {
  size: 'large',
  children: 'Large Text',
};

LargeText.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const text = await canvas.getByTestId('MyText');
  await userEvent.hover(text);
};

export const BoldText = Template.bind({});
BoldText.args = {
  bold: true,
  children: 'Bold Text',
};


export const UnderlinedText = Template.bind({});
UnderlinedText.args = {
  underline: true,
  children: 'Underlined Text',
};

export const DisabledText = Template.bind({});
DisabledText.args = {
  disabled: true,
  children: 'Disabled Text',
  backgroundColor: '#f0f0f0',
};
