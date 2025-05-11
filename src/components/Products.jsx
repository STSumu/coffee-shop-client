import { useEffect } from 'react';
import { useState } from 'react';
import Product from './Product';
import bg from '../assets/images/more/1.png'
import { Link } from 'react-router-dom';
import { RiCupLine } from "react-icons/ri";
import Swal from 'sweetalert2';


const Products = () => {
    const [coffees,setCoffees]=useState([]);

    useEffect(()=>{
          fetch('http://localhost:5000/coffee')
          .then(res=>res.json())
          .then(data=>setCoffees(data))
    },[])
    const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount > 0) {
                    const newCoffees=coffees.filter(coffee => coffee._id !=id);
                    setCoffees(newCoffees);
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                  });
                }
              });
          }
        });     
  };
    return (
        <div style={{backgroundImage : `url(${bg})`,
        backgroundSize:'cover' }} className='my-30'>
            <div className='text-center mb-8'>
                <p>--- Sip & Savor ---</p>
                <h2 className='text-[#331A15] text-shadow-lg text-shadow-[#331A15]/70 text-2xl md:text-4xl my-4'>Our Popular Products</h2>
                <Link to='/addCoffee'><button className='btn border-[#331A15] text-white bg-[#E3B577] text-shadow-md text-shadow-[#331A15]/70 hover:bg-white'>Add Coffee<RiCupLine className='text-[#331A15] text-xl'/></button></Link>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-4 lg:px-50'>
                {
                    coffees.map(coffee=><Product key={coffee._id} coffee={coffee} handleDelete={handleDelete}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;