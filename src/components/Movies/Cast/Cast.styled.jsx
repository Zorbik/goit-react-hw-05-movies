import styled from 'styled-components';

export const StyledItem = styled.li`
  list-style: none;
  margin: ${p => p.theme.space[3]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  max-width: 300px;
  box-shadow: 0px 10px 15px -10px rgba(0, 0, 0, 0.75);
  transition: scale 250ms linear;
  :hover {
    scale: 1.01;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
`;
export const StyledP = styled.p`
  margin: ${p => p.theme.space[2]}px;
`;
