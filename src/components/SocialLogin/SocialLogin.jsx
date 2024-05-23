
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const {googleSingIn} = useAuth()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()

  const handleGoogleSingIn = () => {
    googleSingIn()
    .then(res =>{
      console.log(res.user);
     const userInfo ={
      email: res.user?.email,
      name: res.user?.displayName
     }
     axiosPublic.post('users', userInfo)
     .then(res =>{
       console.log(res.data);
       navigate('/')
     })
    })
  };
  return (
    <div className=" p-8">
      <div>
        <button onClick={handleGoogleSingIn} className="btn w-full">
          <FaGoogle className="mr-5"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
