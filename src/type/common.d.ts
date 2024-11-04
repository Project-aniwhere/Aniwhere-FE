export type SizeProps = 'small' | 'medium';
export type StateProps = 'default' | 'active' | 'disabled';

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
