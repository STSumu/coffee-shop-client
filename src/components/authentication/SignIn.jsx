import bg2 from "../../assets/images/more/11.png";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignIn = () => {
    const {login,googleLogin}=useContext(AuthContext);
  const handleGoogleLogin=()=>{
    googleLogin()
    .then((result)=>{
         Swal.fire({
                    title: "Success!",
                    text: "Coffee added successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                  });
        const email=result.user.email;
        const lastSignIntime=result.user?.metadata?.lastSignInTime;
        const loginInfo={email,lastSignIntime};
        fetch('http://localhost:5000/users',{
            method:'PATCH',
            headers:{
                'content-type' : 'application/json',
            },
            body:JSON.stringify(loginInfo),
        })
    })
    .catch((err)=>{
        alert(err.message);
    })
  }
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.name.value;
    const password = e.target.password.value;
    login(email,password)
    .then((result)=>{
         Swal.fire({
                    title: "Success!",
                    text: "Coffee added successfully",
                    icon: "success",
                    confirmButtonText: "Cool",
                  });
        const lastSignIntime=result.user?.metadata?.lastSignInTime;
        const loginInfo={email,lastSignIntime};
        fetch('http://localhost:5000/users',{
            method:'PATCH',
            headers:{
                'content-type' : 'application/json',
            },
            body:JSON.stringify(loginInfo),
        })
        e.target.reset();
    })
    .catch((err)=>{
        alert(err.message);
    })
  };
  return (
    <div
      className="container mx-auto px-4 lg:px-50 pb-16 lg:pb-30 mt-12"
      style={{ backgroundImage: `url(${bg2})` }}
    >
      <Link to="/">
        <h3 className="flex items-center text-[#374151] text-shadow-lg text-shadow-[#374151]/50">
          <FaArrowLeft></FaArrowLeft>Back to Home
        </h3>
      </Link>
      <div className="bg-[#F4F3F0] w-full mt-12 p-4 px-30 md:py-18 flex flex-col justify-center items-center">
        <div className="max-w-3/4 text-center">
          <h1 className="text-3xl md:text-4xl text-[#374151] text-shadow-lg text-shadow-[#374151]/50">
            Login
          </h1>
        </div>

        <form onSubmit={handleLogin} className="fieldset *:w-full w-1/2">
          <label className="label">Email</label>
          <input type="email" className="input" name="name" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn bg-[#D2B48C] border-[#331A15] text-[#331A15]">
            Login
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/auth/signUp" className="text-red-900">
            Sign Up.
          </Link>
        </p>
        <button className="btn bg-[#D2B48C] border-[#331A15] text-[#331A15] w-1/2" onClick={handleGoogleLogin}>
          <FaGoogle></FaGoogle>Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
