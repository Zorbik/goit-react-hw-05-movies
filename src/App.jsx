import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/HomePage/HomePage';
import { Layout } from './components/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="movies" element={<div>Movies</div>}></Route>
        <Route path="movies/:movieId" element={<div>Movies:movieId</div>}>
          <Route path="cast" element={<div>Movies:movieId</div>}></Route>
          <Route path="reviews" element={<div>Movies:movieId</div>}></Route>
        </Route>
      </Route>
    </Routes>
  );
};

// '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
