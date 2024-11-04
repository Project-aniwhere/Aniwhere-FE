export interface CommonButtonProps {
  text?: string;
  type?: 'submit' | 'reset' | 'button';
  className?: string;
  onClick?: () => void;
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
