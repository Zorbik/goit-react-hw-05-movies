import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledItem = styled.li`
  list-style: none;
  margin: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  width: 400px;
  box-shadow: 0px 10px 15px -10px rgba(0, 0, 0, 0.75);
  transition: scale 250ms linear;
  :hover {
    scale: 1.05;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  /* max-width: ; */
  align-items: center;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes[3]}px;
`;

export const TitlePage = styled.h1`
  display: block;
  margin: 0;
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const TitleMovie = styled.p`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[4]}px;
  text-align: center;
`;
