import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Category } from "../category/Category";
import { FeaturedProducts } from "../FeaturedProducts/FeaturedProducts";

const HomePage = () => {
  return (
    <>
        <Hero></Hero>
        <About></About>
        <FeaturedProducts></FeaturedProducts>
        <Category></Category>
    </>
  )
}
export { HomePage } ;