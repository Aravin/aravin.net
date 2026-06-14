import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Portfolios from './pages/Portfolios';
import ScrollToTop from './components/ScrollToTop';
import './assets/css/style.css'; // Global tailwind styles

// Mock GlobalContext since we removed _app.js
import React from 'react';
export const GlobalContext = React.createContext({
  defaultSeo: {
    metaTitle: 'Aravin.net',
    metaDescription: 'My Portfolio and Blog',
    shareImage: '/Aravin.png',
  },
  siteName: 'Aravin.net',
});

function App() {
  return (
    <GlobalContext.Provider
      value={{
        defaultSeo: {
          metaTitle: 'Aravin.net',
          metaDescription: 'My Portfolio and Blog',
          shareImage: '/Aravin.png',
        },
        siteName: 'Aravin.net',
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolios" element={<Portfolios />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/tag/:tag" element={<Articles />} />
          <Route path="/category/:category" element={<Articles />} />
          <Route path="/article/:slug" element={<Article />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
