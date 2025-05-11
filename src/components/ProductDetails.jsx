import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/images/more/11.png";
import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const loadedData=useLoaderData();
  console.log(loadedData);
  const {name,photo,chef,supplier,taste,category,details}=loadedData;
  return (
    <div
      className="min-h-screen container mx-auto px-4 md:px-20 lg:px-70 mb-30 mt-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <Link to="/">
        <h3 className="flex items-center text-[#374151] text-shadow-lg text-shadow-[#374151]/50">
          <FaArrowLeft></FaArrowLeft>Back to Home
        </h3>
      </Link>
      <div className="bg-[#F4F3F0] w-full mt-12 p-4 md:px-30 md:py-18 flex flex-col justify-center items-center">
       <div className="card lg:card-side flex justify-between">
  <figure className="flex-1">
    <img
      src={photo}
      alt="Album" />
  </figure>
  <div className="card-body flex-1 gap-4 justify-center">
    <h2 className="card-title text-[#331A15] shadow-[#331A15]/70 text-shadow-lg">Nicities</h2>
    <div>
        <p><strong>Name:</strong>{name}</p>
    <p><strong>Chef:</strong>{chef}</p>
    <p><strong>Supplier:</strong>{supplier}</p>
    <p><strong>Taste:</strong>{taste}</p>
    <p><strong>Category:</strong>{category}</p>
    <p><strong>Details:</strong>{details}</p>
    </div>
  </div>
</div>

        
      </div>
    </div>
  );
};

export default ProductDetails;
