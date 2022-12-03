import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import { Cast, Home, MovieDetails, Movies, Reviews, Error } from './pages';

// import { lazy } from 'react';
// export { default as Movies } from './MoviesPage/Movies';
// export { default as Reviews } from './MovieDetailsPage/Reviews';
// export { default as MovieDetails } from './MovieDetailsPage/MovieDetails';
// export { default as Cast } from './MovieDetailsPage/Cast';
// export { default as Home } from './HomePage/HomePage';
// export const Home = lazy(() => import('./pages/HomePage/HomePage'));
// export const Movies = lazy(() => import('./pages/MoviesPage/Movies'));
// export const Reviews = lazy(() => import('./pages/MovieDetailsPage/Reviews'));
// export const MovieDetails = lazy(() =>
//   import('./pages/MovieDetailsPage/MovieDetails')
// );
// export const Cast = lazy(() => import('./pages/MovieDetailsPage/Cast'));
// export const Error = lazy(() => import('./pages/Error/Error'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
};
