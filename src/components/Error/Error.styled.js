import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  padding-left: ${p => p.theme.space[3]}px;
  color: ${p => p.theme.colors.red};
`;
