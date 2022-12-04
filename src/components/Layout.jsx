import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Box, Appbar, loader } from '../components';

export const Layout = () => {
  return (
    <Box>
      <Appbar></Appbar>
      <Suspense fallback={loader}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
