import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/images/more/11.png";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCoffee = () => {
  const loadedData=useLoaderData();
  const handleUpdate=(e)=>{
    e.preventDefault();
   const name = e.target.name.value || loadedData.name;
  const photo = e.target.photo.value || loadedData.photo;
  const supplier = e.target.supplier.value || loadedData.supplier;
  const chef = e.target.chef.value || loadedData.chef;
  const taste = e.target.taste.value || loadedData.taste;
  const details = e.target.details.value || loadedData.details;
  const category = e.target.category.value || loadedData.category;
  const coffee={name,photo,supplier,chef,taste,details,category};
      fetch(`http://localhost:5000/coffee/${loadedData._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(coffee),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.modifiedCount > 0) {
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
          className="lg:min-h-screen container mx-auto px-4 lg:px-50 pb-16 lg:pb-30 mt-12"
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
                Update Existing Coffee
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
              onSubmit={handleUpdate}
            >
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full"
              name="name"
              placeholder={loadedData.name}
            />
          </div>

          <div>
            <label className="label">Supplier</label>
            <input
              type="text"
              className="input w-full"
              name="supplier"
              placeholder={loadedData.supplier}
            />
          </div>

          <div>
            <label className="label">Category</label>
            <input
              type="text"
              className="input w-full"
              name="category"
              placeholder={loadedData.category}
            />
          </div>

          <div>
            <label className="label">Chef</label>
            <input
              type="text"
              className="input w-full"
              name="chef"
              placeholder={loadedData.chef}
            />
          </div>

          <div>
            <label className="label">Taste</label>
            <input
              type="text"
              className="input w-full"
              name="taste"
              placeholder={loadedData.taste}
            />
          </div>

          <div>
            <label className="label">Details</label>
            <input
              type="text"
              className="input w-full"
              name="details"
              placeholder={loadedData.details}
            />
          </div>

          <div className=" md:col-span-2 w-full">
            <label className="label w-full">Photo</label>
            <input
              type="text"
              className="input w-full"
              name="photo"
              placeholder={loadedData.photo}
            />
          </div>
          <button className="md:col-span-2 btn bg-[#D2B48C] border-[#331A15]">
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
