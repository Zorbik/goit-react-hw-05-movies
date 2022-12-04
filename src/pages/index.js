import { lazy } from 'react';

export const Home = lazy(() => import('./HomePage/HomePage'));
export const Movies = lazy(() => import('./MoviesPage/Movies'));
export const Reviews = lazy(() => import('./MovieDetailsPage/Reviews'));
export const MovieDetails = lazy(() =>
  import('./MovieDetailsPage/MovieDetails')
);
export const Cast = lazy(() => import('./MovieDetailsPage/Cast'));
export const Error = lazy(() => import('./Error/Error'));
