import type { Meta, StoryObj } from '@storybook/react';

import Textbox from '../components/textbox';
import type { TextBoxProps } from '../components/textbox';
import { useEffect, useState } from 'react';

const meta = {
  title: 'Textbox',
  component: Textbox,
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultTextbox = (args: TextBoxProps) =>{
    const [text, setText] = useState(args.text);

    useEffect(()=>{
        setText(args.text)
    }, [args.text])

    return <Textbox {...args} onChange={setText} text={text} />
}

export const Default: Story = {
    args: {
        text: '',
        placeholder: 'Enter your text',
        disabled: false
    },
  render: (args) => <DefaultTextbox {...args} />
};
