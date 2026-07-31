import type { FC } from "react";

interface TextBoxProps {
  onChange: (val: string) => void;
  text?: string;
  placeholder?: string;
  disabled?: boolean;
  onEnterPress?: () => void;
  className?: string;
}

const Textbox: FC<TextBoxProps> = ({
  placeholder,
  text,
  onChange,
  disabled = false,
  onEnterPress,
  className = '',
}) => (
  <input
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
    onKeyDown={(e) => e.key === "Enter" && onEnterPress?.()}
    type="text"
    value={text}
    className={`px-4 h-8 rounded-3xl w-full border border-solid border-gray-400 bg-white disabled:bg-gray-100 disabled:border-gray-100 ${className}`}
    disabled={disabled}
  />
);

export default Textbox;
export type { TextBoxProps };
