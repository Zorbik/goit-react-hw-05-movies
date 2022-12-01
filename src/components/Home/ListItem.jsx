import { baseImageUrl } from '../../services/fetchAPI';
import {
  StyledItem,
  StyledLink,
  StyledImg,
  TitleMovie,
} from './ListItem.styled';

export const ListItem = ({ items }) => {
  const { id, backdrop_path, title, name } = items;
  return (
    <StyledItem data-id={id}>
      <StyledLink>
        <StyledImg
          src={baseImageUrl + backdrop_path}
          alt={title ?? name}
          width="500"
        />
        <TitleMovie>{title ?? name}</TitleMovie>
      </StyledLink>
    </StyledItem>
  );
};
