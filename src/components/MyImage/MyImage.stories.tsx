import type { Meta, StoryFn } from '@storybook/react';
import MyImage from './MyImage';
import { MyImageProps } from './MyImage.types';

export default {
  title: 'Daniel-Library/MyImage',
  component: MyImage,
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: {
      control: {
        type: 'select',
        options: ['primary', 'large'],
      },
    },
    round: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof MyImage>;

const Template: StoryFn<MyImageProps> = (args) => <MyImage {...args} />;

export const PrimaryImage = Template.bind({});
PrimaryImage.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Primary Image',
  size: 'primary',
  round: false,
  disabled: false,
};

export const RoundImage = Template.bind({});
RoundImage.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Round Image',
  size: 'primary',
  round: true,
  disabled: false,
};

export const LargeImage = Template.bind({});
LargeImage.args = {
  src: 'https://via.placeholder.com/200',
  alt: 'Large Image',
  size: 'large',
  round: false,
  disabled: false,
};

export const DisabledImage = Template.bind({});
DisabledImage.args = {
  src: 'https://via.placeholder.com/100',
  alt: 'Disabled Image',
  size: 'primary',
  round: false,
  disabled: true,
};
