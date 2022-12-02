import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/fetchAPI';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import { MovieItem } from '../../components/Movies/MovieItem';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: block;
  max-width: 300px;
  text-align: center;
  padding: ${p => p.theme.space[2]}px;
  margin-top: ${p => p.theme.space[2]}px;
  margin-bottom: -${p => p.theme.space[3]}px;
  border-radius: 10px;
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  :hover {
    color: ${p => p.theme.colors.blue};
    background-color: ${p => p.theme.colors.lightBlue};
  }
`;

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
    <Box as="main">
      <StyledLink to={location.state.from}>
        Повернутися на попередню сторінку
      </StyledLink>
      <Box as="section">
        <MovieItem movie={movie} />
      </Box>
      <Box as="section">
        <Outlet />
      </Box>
    </Box>
  );
};
