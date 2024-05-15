import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CategoryImage from "../Category/CategoryImage";
import Featured from "../Featured/Featured";
import PopularManu from "../PopularManu/PopularManu";
import ChefRecommends from "../Shared/ChefRecommends/ChefRecommends";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CategoryImage></CategoryImage>
      <PopularManu></PopularManu>
      <ChefRecommends></ChefRecommends>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;