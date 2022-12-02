import { Box, Appbar } from '../components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import { ProgressBar } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <Box>
      <Appbar></Appbar>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
