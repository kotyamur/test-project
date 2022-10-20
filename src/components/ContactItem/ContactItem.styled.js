import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: ${p => p.theme.space[1]}px;
  font-size: ${p => p.theme.fontSizes.m};
`;

export const DeleteButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 6px 20px;

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
