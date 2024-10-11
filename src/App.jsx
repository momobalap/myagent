import React from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <Layout>
      <Header />
      <main className="flex-1 overflow-hidden">
        <MainContent />
      </main>
    </Layout>
  );
}

export default App;