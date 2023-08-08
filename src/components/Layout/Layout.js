import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Loader } from '../Loader/Loader';

import { Box } from '../Box';

export const Layout = () => {
  return (
    <Box $display="grid" $gridTemplateRows="60px 1fr">
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Box>
  );
};