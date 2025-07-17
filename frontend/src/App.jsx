import './App.css';
import { Header } from './components/Header/header';
import { Hero } from './components/Hero/Hero';
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
import { Category } from './components/category/Category';
import { About } from './components/About/About';
import { Footer } from './components/Footer/Footer';



function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About />
      <FeaturedProducts />
      <Category />
      <Footer/>
    </>
  )
}

export default App
