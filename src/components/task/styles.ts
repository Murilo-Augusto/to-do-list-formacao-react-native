import { Trash2 } from 'lucide-react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors['gray-400']};
  border-radius: 8px;
`;

export const TaskText = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors['gray-100']};
    font-size: ${theme.font.size.sm}px;
  `}
  line-height: 19.6px;
`;

export const DeleteButton = styled.TouchableOpacity`
  padding: 8px;
`;

export const TrashIcon = styled(Trash2).attrs(({ theme }) => ({
  color: theme.colors['gray-300'],
}))`
  flex-shrink: 0;
`;
