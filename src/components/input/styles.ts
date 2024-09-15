import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const StyledInput = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors['gray-300'],
  cursorColor: theme.colors['gray-100'],
  selectionColor: Platform.OS === 'ios' ? theme.colors['gray-100'] : undefined,
}))`
  flex: 1;
  padding: 16px;
  border-radius: 6px;

  color: ${({ theme }) => theme.colors['gray-100']};
  background-color: ${({ theme }) => theme.colors['gray-500']};
  border: 1px solid ${({ theme }) => theme.colors['gray-700']};
`;
