import React, { lazy, Suspense } from 'react';

const Lazymap = lazy(() => import('./map'));

const map = props => (
  <Suspense fallback={null}>
    <Lazymap {...props} />
  </Suspense>
);

export default map;
