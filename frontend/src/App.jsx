import './App.css';
import { Header } from './components/Header/header';
// import { Hero } from './components/Hero/Hero';
// import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
// import { Category } from './components/category/Category';
// import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import {ScrollTop} from './components/utils/scrollTop/ScrollTop'


function App() {

  return (
    <>
    <ScrollTop/>
      <div className='grid__container'>
        <Header/>
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App;
