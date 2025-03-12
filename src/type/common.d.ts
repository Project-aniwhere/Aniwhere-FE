export type SizeProps = 'small' | 'medium';
export type StateProps = 'default' | 'active' | 'disabled';

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
  type?: string;
  onError?: (hasError: boolean) => void;
}

export type ErrorResult = {
  code: number;
  message: string;
};

export interface SignupInputProps {
  onValidation: (isValid: boolean) => void;
}
export type APIResult<T> = T | ErrorResult;
