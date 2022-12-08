import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: #0041ff;
  font-size: ${p => p.theme.fontSizes.ml};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  &.active {
    text-decoration: underline;
  }
  :hover {
    text-decoration: underline;
  }
`;
