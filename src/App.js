import './App.css';
import { Header } from './components/Header/Header';
import { Center } from './components/Center/Center';
import { useState } from 'react';
import { Footer } from './components/Footer/Footer';
function App() {


  return (
    <div >
      <Header />
      <div className='container'>
        <Center />
      </div>
      <Footer />
    </div>
  );
}

export default App;
