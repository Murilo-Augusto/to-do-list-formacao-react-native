import { TextInput, TextInputProps } from 'react-native';
import { StyledInput } from './styles';
import { forwardRef } from 'react';

export interface InputProps extends TextInputProps {}

export const Input = forwardRef<TextInput, InputProps>(({ ...props }, ref) => {
  return <StyledInput {...props} ref={ref} />;
});
