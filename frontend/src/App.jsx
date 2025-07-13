import './App.css';
import { Header } from './components/Header/header';
import { Hero } from './components/Hero/Hero';
import { FeaturedProducts } from './components/FeaturedProducts/FeaturedProducts';
import { About } from './components/About/About';


function App() {

  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <FeaturedProducts/>
      <About/>
    </>
  )
}

export default App
