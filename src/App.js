import React, { Fragment } from 'react';
import Header from "./Components/Layout/Header";
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import Modal from './Components/UI/Modal';


function App() {
  return (
    <Fragment>
    <Cart />
    <Header/>
    <Modal />
    <main>
    <Meals />
    </main>

    </Fragment>
  );
};

export default App;
