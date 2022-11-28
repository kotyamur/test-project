import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  max-width: 450px;
  padding-left: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;
