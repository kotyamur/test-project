import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${p => p.theme.space[5]}px;
  margin: 0 auto;
  max-width: 500px;
`;

export const Title = styled.h1`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  padding-left: ${p => p.theme.space[5]}px;
`;

export const SecondTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.l};
  padding-left: ${p => p.theme.space[5]}px;
`;
