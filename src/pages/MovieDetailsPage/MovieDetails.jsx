import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/fetchAPI';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import { MovieItem } from '../../components/Movies/MovieItem';
import { StyledLink, LinkDeteils } from './MovieDetails.styled';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const a = await getMovieById(movieId);
        setMovie(a);
      } catch (error) {}
    };
    getMovie(movieId);
  }, [movieId]);
  return (
    <Box as="main" backgroundColor="grey">
      <StyledLink to={location.state.from}>
        Повернутися на попередню сторінку
      </StyledLink>
      <Box as="section">
        <MovieItem movie={movie} />
      </Box>
      <Box as="section" display="flex" justifyContent="center">
        <LinkDeteils to="cast" state={{ from: location.state.from }}>
          Акторський склад
        </LinkDeteils>
        <LinkDeteils to="reviews" state={{ from: location.state.from }}>
          Огляди
        </LinkDeteils>
      </Box>
      <Box as="section" p={4}>
        <Outlet />
      </Box>
    </Box>
  );
};
