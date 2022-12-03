import { Box, ListItem } from '../../components';
import { useLocation } from 'react-router-dom';
import { StyledItem, StyledLink } from '../Home/ListItem.styled';

export const GalleryItems = ({ movies }) => {
  const location = useLocation();
  return (
    <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center" p={0}>
      {movies?.map(movie => (
        <StyledItem key={movie.id}>
          <StyledLink to={`/movies/${movie.id}`} state={{ from: location }}>
            <ListItem items={movie} />
          </StyledLink>
        </StyledItem>
      ))}
    </Box>
  );
};
