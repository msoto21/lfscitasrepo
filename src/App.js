import './App.css';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Tratamientos } from './components/tratamientos/Tratamientos';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import NewTratamientoForm from './components/NewTratamientoForm/NewTratamientoForm';
import Login from './components/login/login';
import store from './redux/store';
import { Provider } from 'react-redux';
import EnConstruccion from './components/EnConstruccion/Enconstruccion'
import { createContext, useState } from 'react';

export const MyContext = createContext({});

const App = () => {

  

  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route element={<Navbar />}>
            <Route index path='/' element={<Home />} />
            <Route path='/tratamientos' element={<Tratamientos />} />
            <Route path='/newtratamientosform' element={<NewTratamientoForm/>} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<EnConstruccion />} />
          </Route>
        </Routes>
        <Footer />
      </Provider>
    </>
  )
}

export default App;
