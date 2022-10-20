import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 350px;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.normal};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  label {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
  }
`;

export const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 12px 20px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.sm};

  :hover {
    background-color: ${p => p.theme.colors.green};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    scale: 1.1;
  }
`;
