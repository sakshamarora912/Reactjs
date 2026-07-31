import * as heroIcons from "@heroicons/react/24/solid";
import type { FC } from "react";
import type { Property } from "csstype";

interface IconButtonProps {
  onClick?: () => void;
  icon: keyof typeof heroIcons;
  buttonColor?: Property.Color;
  iconColor?: Property.Color;
  disabled?: boolean;
  className?: string;
}

const IconButton: FC<IconButtonProps> = ({ icon, buttonColor, iconColor, disabled, onClick, className = '' }) => {
  const IconComponent = heroIcons[icon];
  return (
    <button
      style={{ background: buttonColor || 'green' }}
      className={`h-8 w-8 rounded-full flex justify-center items-center disabled:opacity-50 ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      <IconComponent style={{ color: iconColor || '#fff' }} className="w-4" />
    </button>
  );
};

export default IconButton;
export type { IconButtonProps };
