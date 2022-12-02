import { baseImageUrl } from '../../services/fetchAPI';
import { Box } from '../../components';

export const MovieItem = ({ movie }) => {
  if (!movie) return;
  const {
    poster_path,
    title,
    genres,
    vote_average,
    tagline,
    overview,
    release_date,
  } = movie;
  return (
    <Box display="flex" p={4}>
      <img
        src={
          poster_path
            ? baseImageUrl + poster_path
            : 'http://dummyimage.com/500x750/c0c0c0.jpg&text=Це замість фото! :)'
        }
        alt={title}
        width="500"
      />
      <Box m={4}>
        <h1>{title}</h1>
        <p>
          <b>Жанр: </b>
          {genres.map(({ name }) => name).join(', ')}
        </p>
        {vote_average && (
          <p>
            <b>Рейтинг: </b>
            {vote_average}
          </p>
        )}
        {tagline && (
          <p>
            <b>Слоган фільму: </b>
            {tagline}
          </p>
        )}
        {release_date && (
          <p>
            <b>Дата релізу: </b>
            {new Date(release_date).toLocaleDateString()}
          </p>
        )}
        {overview && (
          <p>
            <b>Опис: </b>
            {overview}
          </p>
        )}
      </Box>
    </Box>
  );
};
