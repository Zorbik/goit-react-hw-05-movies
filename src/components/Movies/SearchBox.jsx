import { Box } from '../Box';
import { FormStyled, InputButton, InputStyled } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  return (
    <Box>
      <FormStyled onSubmit={onSubmit}>
        <InputStyled
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Введіть щось для пошуку..."
        />
        <InputButton type="submit">Шукати</InputButton>
      </FormStyled>
    </Box>
  );
};
