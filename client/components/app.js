import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import NavBar from '../layouts/navbar';
import Footer from '../layouts/footer';

export default (props) => {
    return(
      <div>
      <NavBar />
        {props.children}
      <Footer />
      </div>
    );
};
