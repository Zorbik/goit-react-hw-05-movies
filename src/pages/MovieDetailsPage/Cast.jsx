import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import { CastList } from '../../components/Movies/Cast/CastList';
import { getMovieCastById } from '../../services/fetchAPI';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async movieId => {
      try {
        const a = await getMovieCastById(movieId);
        setCast(a);
      } catch (error) {}
    };
    getCast(movieId);
  }, [movieId]);

  return (
    <Box>
      <CastList cast={cast} />
    </Box>
  );
};
