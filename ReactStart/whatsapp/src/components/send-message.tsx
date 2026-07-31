import { useState, type FC } from "react";
import IconButton from "./icon-button";
import Textbox from "./textbox";

interface SendMessageProps {
  placeholder?: string;
  text?: string;
  onSubmit?: (val: string) => void;
}

const SendMessage: FC<SendMessageProps> = ({
  text: defaultText = "",
  placeholder,
  onSubmit,
}) => {
  const [text, setText] = useState(defaultText);
  return (
    <div className="flex">
      <Textbox
        text={text}
        onChange={setText}
        placeholder={placeholder}
        onEnterPress={() => onSubmit?.(text)}
        className="mr-2"
      />
      <IconButton onClick={() => onSubmit?.(text)} icon="PaperAirplaneIcon" />
    </div>
  );
};

export default SendMessage;