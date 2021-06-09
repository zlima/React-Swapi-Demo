import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ThroughProvider } from 'react-through';

import './App.css';
import Header from './components/application/header/Header';
import Main from './components/application/main/Main';

const queryClient = new QueryClient();

const App = () => (
  <div className="App">
    <QueryClientProvider client={queryClient}>
      <Header />
      <ThroughProvider>
        <Main />
      </ThroughProvider>
    </QueryClientProvider>
  </div>
);

export default App;
