import { baseImageUrl } from '../../../services/fetchAPI';
import { StyledImg, StyledItem, StyledP } from './Cast.styled';

export const CastItem = ({ item }) => {
  if (!item) return;

  const { profile_path, character, name } = item;
  return (
    <StyledItem>
      <StyledImg
        src={
          profile_path
            ? baseImageUrl + profile_path
            : 'http://dummyimage.com/500x750/c0c0c0.jpg&text=Це замість фото! :)'
        }
        alt={name ?? name}
        width="500"
      />
      {character && (
        <StyledP>
          <b>Роль: </b>
          {character}
        </StyledP>
      )}
      {name && (
        <StyledP>
          <b>Ім'я: </b>
          {name}
        </StyledP>
      )}
    </StyledItem>
  );
};
