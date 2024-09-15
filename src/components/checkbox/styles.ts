import { Check } from 'lucide-react-native';
import styled, { css } from 'styled-components/native';

interface ContainerProps {
  size: number;
  fill: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})<ContainerProps>`
  ${({ theme, size, fill }) => css`
    border-color: ${theme.colors.blue};
    width: ${size}px;
    height: ${size}px;
    ${fill && `background-color: ${theme.colors['purple-dark']}`};
    ${fill && ` border-color: ${theme.colors['purple-dark']};`};
  `};

  border-radius: 999px;
  border-width: 3px;
  align-items: center;
  justify-content: center;
`;

interface CheckIconProps {
  iconSize: number;
}

export const CheckIcon = styled(Check).attrs<CheckIconProps>(
  ({ theme, iconSize }) => ({
    size: iconSize,
    color: theme.colors['gray-100'],
  })
)``;
