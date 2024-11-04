export interface CommonButtonProps {
  text?: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => void;
}

export interface IconButtonProps extends CommonButtonProps {
  Icon: React.ComponentType<{ height?: string; width?: string }>;
  height?: string;
  width?: string;
}

export interface CommonInputProps {
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'tel'
    | 'search'
    | 'reset'
    | 'checkbox'
    | 'radio'
    | 'hidden'
    | 'datetime-local'
    | 'date'
    | 'month'
    | 'week';
  placeholder?: string;
  className?: string;
  onClick?: () => void;
}

export interface RadioInputProps extends CommonInputProps {
  name: string;
}

export interface CommonDatepickerProps {
  onChange: (date: Value) => void;
  value: Value;
  placeholder?: string;
  className?: string;
}
