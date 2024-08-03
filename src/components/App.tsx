import React from 'react';
import ProductGrid from './ProductGrid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <ProductGrid />
      </div>
    </QueryClientProvider>
  );
}

export default App;
