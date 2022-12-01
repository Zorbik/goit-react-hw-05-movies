import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  margin: ${p => p.theme.space[4]}px;
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 300px;
  height: 40px;
  padding: 4px;
  border-radius: 4px;
`;

export const InputButton = styled.button`
  width: 100px;
  height: 40px;
  padding: 4px;
  border-radius: 4px;
  border: none;
  color: ${p => p.theme.colors.blue};
  background-color: ${p => p.theme.colors.lightBlue};
`;
