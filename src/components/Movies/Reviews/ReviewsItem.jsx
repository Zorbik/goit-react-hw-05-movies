import { StyledItem, StyledP } from './Reviews.styled';

export const ReviewsItem = ({ review }) => {
  if (!review) return;

  const { author, created_at, updated_at, content } = review;
  return (
    <StyledItem>
      {created_at && (
        <StyledP>
          <b>Дата створення: </b>
          {new Date(created_at).toLocaleDateString()}
        </StyledP>
      )}
      {updated_at && (
        <StyledP>
          <b>Дата останнього оновлення: </b>
          {new Date(updated_at).toLocaleDateString()}
        </StyledP>
      )}
      {author && (
        <StyledP>
          <b>Автор: </b>
          {author}
        </StyledP>
      )}
      {content && (
        <StyledP>
          <b>Огляд: </b>
          {content}
        </StyledP>
      )}
    </StyledItem>
  );
};
