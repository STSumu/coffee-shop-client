import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Product = ({ coffee ,handleDelete}) => {
  const { _id, name, photo, chef, taste } = coffee;
  return (
    <div className="flex bg-[#F5F4F1] p-8 gap-5 items-center justify-center shadow-lg">
      <img className="w-30 h-40" src={photo} alt={name} />
      <div>
        <p>
          <strong>Name:</strong>
          {name}
        </p>
        <p>
          <strong>Chef:</strong>
          {chef}
        </p>
        <p>
          <strong>Taste:</strong>
          {taste}
        </p>
      </div>
      <div className="text-white *:rounded-md *:p-1 *:w-8 *:h-8 *:text-sm flex flex-col gap-4">
        <Link to={`/coffee/${_id}`} className="bg-[#D2B48C]">
          <FaEye className="w-full h-full"></FaEye>
        </Link>
        <Link to={`/updateCoffee/${_id}`} className="bg-[#3C393B]">
          <MdEdit className="w-full h-full" />
        </Link>
        <MdDelete className="bg-[#EA4744]" onClick={() => handleDelete(_id)} />
      </div>
    </div>
  );
};

export default Product;
