import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 150px;
  margin: 0 20px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[4]}px;
  height: 70px;

  :hover {
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.lightBlue};
  }
  &.active {
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;
