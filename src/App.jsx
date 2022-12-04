import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './components';

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
        <Route path="movies" element={<Movies />} />
        {/* <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Error />} /> */}
      </Route>
    </Routes>
  );
};
