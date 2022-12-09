import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  gap: 20px;
  padding-left: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};

  input {
    border: ${p => p.theme.borders.normal};
    border-radius: 4px;
    border-color: #98ff8c;
    width: 240px;
    padding: 1px 6px;
    outline: none;
    :focus-visible,
    :focus {
      border-color: #0041ff;
    }
  }
`;
