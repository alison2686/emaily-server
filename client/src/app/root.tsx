import { wrapper } from '@/store';
import React from 'react'; // Import React

function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Global components and children */}
      {children}
    </>
  );
}

export default wrapper.withRedux(Root);
