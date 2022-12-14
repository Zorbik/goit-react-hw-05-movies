import { useLocation } from 'react-router-dom';
import { Box, ListItem } from '../../components';

export const GalleryItems = ({ movies }) => {
  const location = useLocation();
  return (
    <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center" p={0}>
      {movies?.map(movie => (
        <ListItem key={movie.id} items={movie} state={{ from: location }} />
      ))}
    </Box>
  );
};
