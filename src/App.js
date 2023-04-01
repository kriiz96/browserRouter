import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Inicio from './components/Inicio';
import Blog from './components/Blog';
import AcercaDe from './components/AcercaDe';
import Post from './components/Post';
import styled from 'styled-components';
import Error404 from './components/Error404';

const App = () => {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path='*' element={<Error404/>}/>
            <Route path="/" element={<Inicio />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Post />} />
            <Route path="acerca-de" element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
};

const ContenedorPrincipal= styled.div`
padding: 20px;
width: 90%;
max-width: 1200px;
`

const Main = styled.main`
padding:40px;
background-color:#fff;
border-radius: 15px;
box-shadow: 0px 0px 5px rgba(129,129,129,0.5);
`

export default App;
