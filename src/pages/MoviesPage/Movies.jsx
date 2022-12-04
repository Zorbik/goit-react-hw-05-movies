import { useState, useEffect } from 'react';
import { getSearchMovies } from '../../services/fetchAPI';
import { Box, SearchBox } from '../../components';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const [search, setSearch] = useState(searchQuery);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (search === '') {
      setMovies([]);
      return;
    }
    const getMovies = async () => {
      try {
        const { results } = await getSearchMovies(search);
        setMovies(results);
      } catch (error) {}
    };
    getMovies();
  }, [search]);

  const onFormSubmit = e => {
    e.preventDefault();
    const query = e.target[0].value;
    setSearch(query);
    setSearchParams(query !== '' ? { query: query } : {});
  };
  console.log('query', movies);

  return (
    <Box as="main">
      <SearchBox onSubmit={onFormSubmit} />
      {/* {movies.length ? <GalleryItems movies={movies} /> : ''} */}
    </Box>
  );
};

export default Movies;
