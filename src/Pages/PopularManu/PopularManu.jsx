import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItemsCard from "../Shared/MenuItemsCard/MenuItemsCard";

const PopularManu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter(item => item.category === 'popular')
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading="From Ore Menu"
        subHeading="Popular Items"
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mt-5 mb-5">
        {
          menu.map(item => <MenuItemsCard key={item._id} item={item}></MenuItemsCard>)
        }
      </div>
    </section>
  );
};

export default PopularManu;
