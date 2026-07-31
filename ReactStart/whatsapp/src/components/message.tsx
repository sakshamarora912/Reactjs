import type { CSSProperties, FC } from "react";
import cx from "classnames";

interface MessageProps {
  text: string;
  time?: Date;
  fromCurrentUser?: boolean;
  style?: CSSProperties;
}

const Message: FC<MessageProps> = ({ text, time, fromCurrentUser, style }) => {
  return (
    <div
      className={cx("flex items-end", {
        "flex-row": !fromCurrentUser,
        "flex-row-reverse": fromCurrentUser,
      })}
      style={style}
    >
      <span
        className={cx("border-8 border-solid border-transparent w-0 h-0 mb-3", {
          "border-l-green-600": fromCurrentUser,
          "border-r-gray-500": !fromCurrentUser,
        })}
      />
      <div
        className={cx(
          "rounded-md text-white w-auto inline-block px-3 py-2 max-w-xs",
          {
            "bg-green-600": fromCurrentUser,
            "bg-gray-500": !fromCurrentUser,
          }
        )}
      >
        <span>{text}</span>
        {time && (
          <span
            className={cx("text-xs block font-medium mt-1", {
              "text-green-300": fromCurrentUser,
              "text-gray-300": !fromCurrentUser,
            })}
          >
            {time.toLocaleTimeString()}
          </span>
        )}
      </div>
    </div>
  );
};

export default Message;
export type { MessageProps };
