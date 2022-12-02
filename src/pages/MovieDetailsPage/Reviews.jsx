import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import { ReviewsList } from '../../components/Movies/Reviews/ReviewsList';
import { getMovieReviewById } from '../../services/fetchAPI';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async movieId => {
      try {
        const { results } = await getMovieReviewById(movieId);
        setReviews(results);
      } catch (error) {}
    };
    getReviews(movieId);
  }, [movieId]);

  return (
    <Box>
      <ReviewsList reviews={reviews} />
    </Box>
  );
};
