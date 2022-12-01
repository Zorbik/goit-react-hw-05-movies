import { ListItem } from '../Home/ListItem';
import { Box } from '../Box';

export const GalleryItems = ({ movies }) => {
  return (
    <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center" p={0}>
      {movies?.map(movie => (
        <ListItem key={movie.id} items={movie} />
      ))}
    </Box>
  );
};
