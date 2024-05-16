// import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItemsCard from "../Shared/MenuItemsCard/MenuItemsCard";
import useMenu from "../../hooks/useMenu";

const PopularManu = () => {
  const [menu]= useMenu();
  const popular = menu.filter(item => item.category === 'popular');
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("/menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularItems = data.filter(item => item.category === 'popular')
  //       setMenu(popularItems);
  //     });
  // }, []);
  return (
    <section>
      <SectionTitle
        heading="From Ore Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mt-5 mb-5">
        {
          popular.map(item => <MenuItemsCard key={item._id} item={item}></MenuItemsCard>)
        }
      </div>
      <div className="flex justify-center items-center">
      <button className="btn btn-outline border-0 border-b-4 mb-4 flex justify-center items-center mt-3 ">View Full  Menu</button>
      </div>
    </section>
  );
};

export default PopularManu;
