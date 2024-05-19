import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigator = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCard = food => {
    if (user && user.email) {
       console.log(user.email,food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-status",
            icon: "success",
            title: "Food added to card",
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the card to update the card items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must login to add to card",
        footer: "Please login to add to card",
      });
      navigator("/login", { state: { from: location } });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={()=>handleAddToCard(item)}
            className="btn btn-outline border-0 border-b-4 mb-4 border-orange-600"
          >
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
