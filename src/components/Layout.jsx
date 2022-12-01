import { Appbar } from './Appbar/Appbar';
import { Box } from './Box';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <Appbar></Appbar>

      <Outlet />
    </Box>
  );
};
