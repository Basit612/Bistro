import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import CategoryImage from "../Category/CategoryImage";
import PopularManu from "../PopularManu/PopularManu";
import ChefRecommends from "../Shared/ChefRecommends/ChefRecommends";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <CategoryImage></CategoryImage>
      <PopularManu></PopularManu>
      <ChefRecommends></ChefRecommends>
    </div>
  );
};

export default Home;