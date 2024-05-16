import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import PopularManu from "../PopularManu/PopularManu";

const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>BISTRO BOSS | Menu</title>
      </Helmet>
      <Cover img={menuImg} title='our menu'></Cover>
      <PopularManu></PopularManu>
      <Cover img={menuImg} title='our menu'></Cover>
      <PopularManu></PopularManu>
      <Cover img={menuImg} title='our menu'></Cover>
      <PopularManu></PopularManu>
    </div>
  );
};

export default Menu;
