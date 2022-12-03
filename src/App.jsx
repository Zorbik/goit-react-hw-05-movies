import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
// import { Cast, Home, MovieDetails, Movies, Reviews, Error } from './pages';

import { lazy } from 'react';
// export { default as Movies } from './MoviesPage/Movies';
// export { default as Reviews } from './MovieDetailsPage/Reviews';
// export { default as MovieDetails } from './MovieDetailsPage/MovieDetails';
// export { default as Cast } from './MovieDetailsPage/Cast';
// export { default as Home } from './HomePage/HomePage';
const Home = lazy(() => import('./pages/HomePage/HomePage'));
const Movies = lazy(() => import('./pages/MoviesPage/Movies'));
const Reviews = lazy(() => import('./pages/MovieDetailsPage/Reviews'));
const MovieDetails = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetails')
);
const Cast = lazy(() => import('./pages/MovieDetailsPage/Cast'));
const Error = lazy(() => import('./pages/Error/Error'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
