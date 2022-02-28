import React from 'react';
import { Outlet, Link } from "react-router-dom";
import Footer from '../components/Footer/index';
import Header from '../components/Header/index';

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/note">Notas</Link>
          </li>
          <li>
            <Link to="/opinion">Opinion</Link>
          </li>
          <li>
            <Link to="/most-relevant">Más relevante</Link>
          </li>
        </ul>
      </nav>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;