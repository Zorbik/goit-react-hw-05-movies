import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: flex;
  max-width: 280px;

  padding: ${p => p.theme.space[2]}px;
  margin-left: ${p => p.theme.space[3]}px;
  margin-bottom: -${p => p.theme.space[3]}px;
  border-radius: 10px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  :hover {
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;
export const LinkDeteils = styled(NavLink)`
  display: flex;
  max-width: 150px;

  padding: ${p => p.theme.space[3]}px;
  margin: ${p => p.theme.space[2]}px;

  border-radius: 10px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  &.active,
  :hover {
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;
