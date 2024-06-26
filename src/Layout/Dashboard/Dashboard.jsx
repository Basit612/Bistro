import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Dashboard = () => {
  const [cart] =useCart();

  //todo:
  const [isAdmin] =useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-800">
        <ul className="menu">
         {
          isAdmin ? <>
           <li>
            <NavLink to="/dashboard/adminHome">
             <FaHome></FaHome> Admin Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
             <FaUtensils></FaUtensils> Add Items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">
             <FaAd></FaAd> All users
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageBookings">
             <FaBook></FaBook> Manage Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manageItems">
              <FaList></FaList> Manage Items
            </NavLink>
          </li>
          </>
          :
          <>
           <li>
            <NavLink to="/dashboard/userHome">
             <FaHome></FaHome> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
             <FaCalendar></FaCalendar> Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
             <FaAd></FaAd> Add A Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/bookings">
             <FaList></FaList> My Bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})
            </NavLink>
          </li>
          </>
         }
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
             <FaHome></FaHome>  Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
             <FaSearch></FaSearch>  Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
             <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
