import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefRecommendsCard from "../ChefRecommendsCard/ChefRecommendsCard";

const ChefRecommends = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => {
        setChefs(data);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading="Chef Recommends"
        heading="Should Try"
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 mb-10 mt-5">
        {chefs.map((chef) => (
          <ChefRecommendsCard key={chef._id} chef={chef}></ChefRecommendsCard>
        ))}
      </div>
    </section>
  );
};

export default ChefRecommends;
