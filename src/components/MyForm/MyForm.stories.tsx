import type { Meta, StoryFn } from '@storybook/react';
import MyForm from './MyForm';
import { MyFormProps } from './MyForm.types';
import { within, userEvent } from '@storybook/testing-library';

export default {
  title: 'Daniel-Library/MyForm',
  component: MyForm,
  argTypes: {
    disabled: { control: 'boolean' },
    focused: { control: 'boolean' },
  },
} as Meta<typeof MyForm>;

const Template: StoryFn<MyFormProps> = (args) => <MyForm {...args} />;

export const PrimaryForm = Template.bind({});
PrimaryForm.args = {
  disabled: false,
  focused: false,
};

PrimaryForm.play = async ({ canvasElement }) => { 
  const canvas = within(canvasElement);
  await userEvent.type(canvas.getByTestId('name'), 'Daniel');
  await userEvent.type(canvas.getByTestId('email'), 'daniel@me.com');
  await userEvent.type(canvas.getByTestId('comment'), 'This is a comment');
  await userEvent.click(canvas.getByTestId('submit'));
};

export const FocusedForm = Template.bind({});
FocusedForm.args = {
  disabled: false,
  focused: true,
};

export const DisabledForm = Template.bind({});
DisabledForm.args = {
  disabled: true,
  focused: false,
};
