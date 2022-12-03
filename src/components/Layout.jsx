import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ProgressBar } from 'react-loader-spinner';
import { Box, Appbar } from '../components';

export const Layout = () => {
  return (
    <Box>
      <Appbar></Appbar>
      <Suspense
        fallback={
          <ProgressBar
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        }
      >
        <Outlet />
      </Suspense>
    </Box>
  );
};
