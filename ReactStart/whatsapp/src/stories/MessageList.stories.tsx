import type { Meta, StoryObj } from "@storybook/react";

import MessageList from "../components/message-list";

const meta = {
  title: "MessageList",
  component: MessageList,
} satisfies Meta<typeof MessageList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    messages: [...Array(10).keys()].map((index) => ({
      text: "Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?Hello. How are you?",
      fromCurrentUser: index % 2 === 0,
      time: new Date(),
    })),
  },
  render: (args) => <div className="flex" style={{height: '80vh'}}><MessageList {...args} /></div>
};
