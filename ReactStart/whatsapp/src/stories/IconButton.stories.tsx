import type { Meta, StoryObj } from '@storybook/react';

import IconButton from '../components/icon-button';

const meta = {
  title: 'IconButton',
  component: IconButton,
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        icon: 'PaperAirplaneIcon',
        buttonColor: 'rgb(132 204 22)',
        disabled: false
    }
};
