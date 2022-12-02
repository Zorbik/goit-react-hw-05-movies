import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/fetchAPI';
import { Box, GalleryItems } from '../../components';
import { TitlePage } from '../../components/Home/ListItem.styled';

const Home = () => {
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

export default Home;
