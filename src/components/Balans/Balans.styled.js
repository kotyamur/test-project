import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 772px) {
    flex-direction: row;
  }
  @media (min-width: 1280px) {
  }
`;

export const BalansInput = styled.input`
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
`;
   
