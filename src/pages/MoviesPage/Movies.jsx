import { useState, useEffect } from 'react';
import { getSearchMovies } from '../../services/fetchAPI';
import { Box } from '../../components/Box';
import { SearchBox } from '../../components/Movies/SearchBox';
import { GalleryItems } from '../../components/Movies/GalleryItems';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (search === '') return;
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
    setSearchParams({ query: query });
  };

  return (
    <Box as="main">
      <SearchBox onSubmit={onFormSubmit} />
      <GalleryItems movies={movies} />
    </Box>
  );
};
