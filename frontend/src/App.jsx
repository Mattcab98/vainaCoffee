import './App.css';
import { Header } from './components/Header/header';
// import { Hero } from './components/Hero/Hero';
// import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
// import { Category } from './components/category/Category';
// import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';



function App() {

  return (
    <>
      <div className='grid__container'>
        <Header className='hola'/>
        {/* <Hero/> */}
        {/* <About /> */}
        {/* <FeaturedProducts /> */}
        {/* <Category /> */}
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App;
