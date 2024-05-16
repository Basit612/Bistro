import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItemsCard from "../../Shared/MenuItemsCard/MenuItemsCard";


const MenuCategory = ({items,title,coverImg}) => {
  return (
    <div className="pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
       <div className="grid md:grid-cols-2 gap-10 my-16 mb-5">
        {
          items.map(item => <MenuItemsCard key={item._id} item={item}></MenuItemsCard>)
        }
      </div>
      <div className="flex justify-center items-center">
     <Link to={`/order/${title}`}>
     <button className="btn btn-outline border-0 border-b-4 mb-4 flex justify-center items-center mt-3 ">ORDER YOUR FAVOURITE FOOD</button></Link>
      </div>
    </div>
  );
};

export default MenuCategory;