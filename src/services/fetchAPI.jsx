import axios from 'axios';

const API_KEY = '730ef8748287879a519fd0046c07e916';
const LANG = 'uk';
export const baseImageUrl = 'https://image.tmdb.org/t/p/w500';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export async function getTrendingMovies() {
  try {
    const response = await instance.get(
      `trending/all/week?api_key=${API_KEY}&language=${LANG}`
    );
    console.log('response.data', response.data);

    return response.data;
  } catch (error) {}
}

export async function getSearchMovies(searchQuery) {
  try {
    const response = await instance.get(
      `search/movie?api_key=${API_KEY}&language=${LANG}&query=${searchQuery}`
    );
    console.log('response.data.results', response.data.results);

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieById(movieId) {
  try {
    const response = await instance.get(
      `movie/${movieId}?api_key=${API_KEY}&language=${LANG}`
    );
    console.log('response.data', response.data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieCastById(movieId) {
  try {
    const response = await instance.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=${LANG}`
    );
    console.log('response.data', response.data.cast);

    return response.data.cast;
  } catch (error) {
    console.error(error);
  }
}

export async function getMovieReviewById(movieId) {
  try {
    const response = await instance.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=${LANG}`
    );
    console.log('response.data', response.data.results);

    return response.data.results;
  } catch (error) {
    console.error(error);
  }
}
