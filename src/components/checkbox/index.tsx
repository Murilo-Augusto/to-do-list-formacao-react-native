import { CheckIcon, Container } from './styles';

interface CheckboxProps {
  value?: boolean;
  disabled?: boolean;
  size?: number;
  iconSize?: number;
  onValueChange?: (value: boolean) => void;
}

export function Checkbox({
  value = false,
  disabled,
  size = 24,
  iconSize = 16,
  onValueChange,
}: CheckboxProps) {
  return (
    <Container
      size={size}
      fill={value}
      onPress={() => onValueChange?.(!value)}
      disabled={disabled}
    >
      {value && <CheckIcon iconSize={iconSize} />}
    </Container>
  );
}
