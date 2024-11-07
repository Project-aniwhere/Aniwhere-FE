export interface CommonButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export interface IconButtonProps extends CommonButtonProps {
  children: React.ReactNode;
}

export interface CommonDatepickerProps {
  onChange: (date: Value) => void;
  value: Value;
  placeholder?: string;
  className?: string;
}
