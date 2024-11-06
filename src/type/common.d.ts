export interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export interface IconButtonProps extends CommonButtonProps {
  Icon: React.ComponentType<{ height?: string; width?: string }>;
  height?: string;
  width?: string;
}

export interface CommonDatepickerProps {
  onChange: (date: Value) => void;
  value: Value;
  placeholder?: string;
  className?: string;
}
