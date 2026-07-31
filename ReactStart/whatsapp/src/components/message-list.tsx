import { type FC, type CSSProperties, useCallback } from "react";
import type { MessageProps } from "./message";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Message from "./message";

interface MessageListProps {
  messages: MessageProps[];
}

interface GetMessageItemFnArgs {
  style: CSSProperties;
  index: number;
}

const MessageList: FC<MessageListProps> = ({ messages = [] }) => {
  const getMessageItem = useCallback(
    ({ style, index }: GetMessageItemFnArgs) => (
      <Message style={style} {...messages[index]} />
    ),
    [messages]
  );

  const getMessageItemSize = (index: number) =>
    (messages[index].text.length / 35) * 24 +
    (messages[index].time ? 20 : 0) +
    16;

  return (
    <div className="flex-auto">
      <AutoSizer>
        {({ height, width }) => (
          <List
            width={width}
            height={height}
            itemCount={messages.length}
            itemSize={getMessageItemSize}
          >
            {getMessageItem}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default MessageList;
export type { MessageListProps };
