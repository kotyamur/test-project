import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 350px;
  padding: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;
