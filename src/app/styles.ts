import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Top = styled.View`
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 176px;
  background-color: ${({ theme }) => theme.colors['gray-700']};
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;

export const Content = styled.View`
  flex: 1;
  gap: 32px;
  padding: 0 24px 24px;
`;

export const NewTask = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: -32px;
`;

export const Button = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  align-items: center;
  justify-content: center;
  border: none;
  padding: 18px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors['blue-dark']};
`;

export const Tasks = styled.View`
  flex: 1;
  gap: 20px;
`;

export const Info = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CreatedContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const CreatedText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.blue};
    font-size: ${theme.font.size.sm}px;
    font-family: ${theme.font.family.bold};
  `}
`;

export const DoneContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const DoneText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.purple};
    font-size: ${theme.font.size.sm}px;
    font-family: ${theme.font.family.bold};
  `}
`;

export const CounterContainer = styled.View`
  padding: 2px 8px;
  background-color: ${({ theme }) => theme.colors['gray-400']};
  border-radius: 999px;
`;

export const Counter = styled.Text`
  color: ${({ theme }) => theme.colors['gray-100']};
  font-size: ${({ theme }) => theme.font.size.xs}px;
  font-weight: bold;
`;

export const List = styled(FlatList)`
  flex: 1;
` as typeof FlatList;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors['gray-400']};
`;

export const Empty = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyContent = styled.View`
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 48px 20px;
`;

export const EmptyText1 = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-300']};
    font-size: ${theme.font.size.sm}px;
    font-family: ${theme.font.family.bold};
  `}
  text-align: center;
`;

export const EmptyText2 = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors['gray-300']};
    font-size: ${theme.font.size.sm}px;
    font-family: ${theme.font.family.regular};
  `}
  text-align: center;
`;
