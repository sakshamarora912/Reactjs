import type { Meta, StoryObj } from '@storybook/react';

import Message from '../components/message';

const meta = {
  title: 'Message',
  component: Message,
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        text: 'Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?',
        fromCurrentUser: false,
        time: new Date()
    }
};
