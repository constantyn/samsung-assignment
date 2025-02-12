import React from 'react';
import ProductGrid from './ProductGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductGrid />
    </QueryClientProvider>
  );
}

export default App;
