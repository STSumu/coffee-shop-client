import bg2 from "../../assets/images/more/11.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const user = { name, email, photo };
    createUser(email, password)
      .then(() => {
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "User created successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
      })
      .catch((err) => {
        alert(err.message);
      });
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
            Sign Up
          </h1>
        </div>

        <form className="fieldset *:w-full w-1/2" onSubmit={handleSignUp}>
          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Name"
          />
          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            name="email"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            className="input"
            name="password"
            placeholder="Password"
          />
          <label className="label">Photo URL</label>
          <input
            type="text"
            className="input"
            name="photo"
            placeholder="Photo URL"
          />
          <button className="btn bg-[#D2B48C] border-[#331A15] text-[#331A15]">
            Sign Up
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/auth/signIn" className="text-red-900">
            Sign In.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
