import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/fetchAPI';
import { Box } from '../../components/Box';
import { ListItem } from '../../components/Home/ListItem';
import { TitlePage } from '../../components/Home/ListItem.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fff = async () => {
      try {
        const { results } = await getTrendingMovies();
        setMovies(results);
      } catch (error) {}
    };
    fff();
  }, []);

  return (
    <Box as="main" backgroundColor="darkGrey" color="lightBlue" p={4}>
      <TitlePage>У тренді цього тижня:</TitlePage>
      <Box as="ul" display="flex" flexWrap="wrap" justifyContent="center" p={0}>
        {movies?.map(movie => (
          <ListItem key={movie.id} items={movie} />
        ))}
      </Box>
    </Box>
  );
};
