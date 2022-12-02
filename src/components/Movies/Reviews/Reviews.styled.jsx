import styled from 'styled-components';

export const StyledItem = styled.li`
  list-style: none;
  margin-bottom: ${p => p.theme.space[5]}px;
  padding: ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  overflow: hidden;
  max-width: 100%;
  box-shadow: 0px 10px 5px -10px rgba(0, 0, 0, 0.75);
  transition: scale 250ms linear;
  :hover {
    scale: 1.01;
  }
`;

export const StyledP = styled.p`
  margin: ${p => p.theme.space[4]}px;
  box-shadow: 0px 10px 15px -10px rgba(0, 0, 0, 0.75);
`;
