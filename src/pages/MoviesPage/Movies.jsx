import { useState, useEffect } from 'react';
import { getSearchMovies } from '../../services/fetchAPI';
import { Box } from '../../components/Box';
import { SearchBox } from '../../components/Movies/SearchBox';
import { GalleryItems } from '../../components/Movies/GalleryItems';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
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

  return (
    <Box as="main">
      <SearchBox onSubmit={onFormSubmit} />
      <GalleryItems movies={movies} />
    </Box>
  );
};
