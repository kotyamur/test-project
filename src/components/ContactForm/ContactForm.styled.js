import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  max-width: 450px;
  padding: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-radius: 4px;
  border-color: #98ff8c;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  label {
    display: grid;
    grid-template-columns: 0.7fr 1fr;
    width: 100%;
  }
  input {
    max-width: 250px;
    min-width: 150px;
    border-color: #98ff8c;
    border-radius: 4px;
    border-width: 1px;
    padding: 2px 6px;
    outline: none;
    :focus-visible,
    :focus {
      border-color: #0041ff;
    }
  }
`;

export const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 8px 16px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.blue};
  border-radius: ${p => p.theme.radii.sm};

  :hover {
    background-color: #0041ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    /* scale: 1.1; */
  }
`;
