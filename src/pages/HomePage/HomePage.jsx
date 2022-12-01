import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/fetchAPI';
import { Box } from '../../components/Box';
import { TitlePage } from '../../components/Home/ListItem.styled';
import { GalleryItems } from '../../components/Movies/GalleryItems';

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
      <GalleryItems movies={movies} />
    </Box>
  );
};
