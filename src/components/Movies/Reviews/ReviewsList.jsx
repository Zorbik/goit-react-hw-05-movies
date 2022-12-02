import { Box, ReviewsItem } from '../../../components';

export const ReviewsList = ({ reviews }) => {
  if (reviews.length === 0) return <p>Вибачте, оглядів ще немає :(</p>;
  return (
    <Box as="ul" p={0}>
      {reviews?.map(review => (
        <ReviewsItem key={review.id} review={review} />
      ))}
    </Box>
  );
};
