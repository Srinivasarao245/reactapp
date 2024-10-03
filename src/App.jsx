import React from 'react';
import Header from './Component/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Component/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
