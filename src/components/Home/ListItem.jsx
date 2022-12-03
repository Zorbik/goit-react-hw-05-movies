import { baseImageUrl } from '../../services/fetchAPI';
import { StyledImg, TitleMovie } from './ListItem.styled';

export const ListItem = ({ items, state }) => {
  const { backdrop_path, title, name } = items;
  return (
    <>
      <StyledImg
        src={
          backdrop_path
            ? baseImageUrl + backdrop_path
            : 'http://dummyimage.com/500x280/c0c0c0.jpg&text=Картинку вкрали кацапи :('
        }
        alt={title ?? name}
        width="500"
      />
      <TitleMovie>{title ?? name}</TitleMovie>
    </>
  );
};
