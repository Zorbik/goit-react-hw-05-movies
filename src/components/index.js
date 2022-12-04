import { ProgressBar } from 'react-loader-spinner';

export { Appbar } from './Appbar/Appbar';
export { Box } from './Box';
export { ListItem } from './Home/ListItem';
export { Layout } from './Layout';
export { CastItem } from './Movies/Cast/CastItem';
export { CastList } from './Movies/Cast/CastList';
export { GalleryItems } from './Movies/GalleryItems';
export { MovieItem } from './Movies/MovieItem';
export { ReviewsItem } from './Movies/Reviews/ReviewsItem';
export { ReviewsList } from './Movies/Reviews/ReviewsList';
export { SearchBox } from './SearchBox/SearchBox';

export const loader = (
  <ProgressBar
    height="80"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor="#F4442E"
    barColor="#51E5FF"
  />
);
