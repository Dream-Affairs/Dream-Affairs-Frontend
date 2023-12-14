import { SelectSingleEventHandler } from 'react-day-picker';

export interface DatePickerProps {
  error?: boolean;
  disabled?: boolean;
  date: Date | undefined;
  setDate: SelectSingleEventHandler | undefined;
}

export type LoginForm = {
  email: string;
  password: string;
};

export type LoginFormError = {
  email: { status: boolean; message: string };
  password: { status: boolean; message: string };
};

export interface FormTwoProps extends DatePickerProps {
  formOne: {
    email: string;
    password: string;
    confirmPassword: string;
    valid: boolean;
  };
  setFormOne: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
      valid: boolean;
    }>
  >;
  setFormOneError: React.Dispatch<
    React.SetStateAction<{
      email: boolean;
      password: boolean;
      confirmPassword: boolean;
    }>
  >;
  setErrorMessages: React.Dispatch<
    React.SetStateAction<{
      email: string;
      password: string;
      confirmPassword: string;
    }>
  >;
  formTwo: {
    yourFirstName: string;
    partnersFirstName: string;
    pickedADate: boolean;
    location: string;
  };
  setFormTwo: React.Dispatch<
    React.SetStateAction<{
      yourFirstName: string;
      partnersFirstName: string;
      pickedADate: boolean;
      location: string;
    }>
  >;
  setFormThree: React.Dispatch<React.SetStateAction<boolean>>;
}
