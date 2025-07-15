import './App.css';
import { Header } from './components/Header/header';
import { Hero } from './components/Hero/Hero';
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
import { Category } from './components/category/Category';
import { About } from './components/About/About';


function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <FeaturedProducts/>
      <About/>
      <Category/>
    </>
  )
}

export default App
