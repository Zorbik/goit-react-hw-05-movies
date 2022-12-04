import { baseImageUrl } from '../../services/fetchAPI';
import {
  StyledImg,
  TitleMovie,
  StyledItem,
  StyledLink,
} from './ListItem.styled';

export const ListItem = ({ items, state }) => {
  const { id, backdrop_path, title, name } = items;
  return (
    <>
      <StyledItem>
        <StyledLink to={`/movies/${id}`} state={state}>
          <StyledImg
            src={
              backdrop_path
                ? baseImageUrl + backdrop_path
                : 'http://dummyimage.com/500x280/c0c0c0.jpg&text=Скрін вкрали кацапи :('
            }
            alt={title ?? name}
            width="500"
          />
          <TitleMovie>{title ?? name}</TitleMovie>
        </StyledLink>
      </StyledItem>
    </>
  );
};
