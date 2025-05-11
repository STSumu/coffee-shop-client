import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/images/more/11.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAdd = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const supplier = e.target.supplier.value;
    const chef = e.target.chef.value;
    const taste = e.target.taste.value;
    const details = e.target.details.value;
    const category = e.target.category.value;
    const coffee = { name, supplier, chef, taste, details, category, photo };
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div
      className="container mx-auto px-4 lg:px-50 pb-16 lg:pb-30 mt-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Link to="/">
        <h3 className="flex items-center text-[#374151] text-shadow-lg text-shadow-[#374151]/50">
          <FaArrowLeft></FaArrowLeft>Back to Home
        </h3>
      </Link>
      <div className="bg-[#F4F3F0] w-full mt-12 p-4 px-30 md:py-18 flex flex-col justify-center items-center">
        <div className="max-w-3/4 text-center">
          <h1 className="text-3xl md:text-4xl text-[#374151] text-shadow-lg text-shadow-[#374151]/50">
            Add New Coffee
          </h1>
          <p className="py-6 opacity-70 text-xs md:text-base">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form
          action=""
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={handleAdd}
        >
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter Coffee name"
            />
          </div>

          <div>
            <label className="label">Supplier</label>
            <input
              type="text"
              name="supplier"
              className="input w-full"
              placeholder="Enter coffee supplier"
            />
          </div>

          <div>
            <label className="label">Category</label>
            <input
              type="text"
              name="category"
              className="input w-full"
              placeholder="Enter coffee category"
            />
          </div>

          <div>
            <label className="label">Chef</label>
            <input
              type="text"
              name="chef"
              className="input w-full"
              placeholder="Enter coffee chef"
            />
          </div>

          <div>
            <label className="label">Taste</label>
            <input
              type="text"
              name="taste"
              className="input w-full"
              placeholder="Enter coffee taste"
            />
          </div>

          <div>
            <label className="label">Details</label>
            <input
              type="text"
              name="details"
              className="input w-full"
              placeholder="Enter coffee details"
            />
          </div>

          <div className=" md:col-span-2 w-full">
            <label className="label w-full">Photo</label>
            <input
              type="text"
              name="photo"
              className="input w-full"
              placeholder="Enter photo URL"
            />
          </div>
          <button className="md:col-span-2 btn bg-[#D2B48C] border-[#331A15]">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
