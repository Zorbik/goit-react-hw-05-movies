import { Box, Appbar } from '../components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Box>
      <Appbar></Appbar>

      <Outlet />
    </Box>
  );
};
