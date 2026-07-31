import type { Meta, StoryObj } from "@storybook/react";

import SendMessage from "../components/send-message";

const meta = {
  title: "SendMessage",
  component: SendMessage,
} satisfies Meta<typeof SendMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your message",
    onSubmit: (val) => alert(`Message is: ${val || "Empty"}`),
  },
};
