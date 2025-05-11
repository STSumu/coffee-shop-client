import { FaArrowLeft } from "react-icons/fa";
import bg from "../assets/images/more/11.png";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const newUsers = users.filter((user) => user._id !== id);
              setUsers(newUsers);
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
            Users : {users.length}
          </h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Last Logged In</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user._id}>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={user.photo} alt={`${user.name} image`} />
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{user.name}</div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.lastlogin}</td>

                  <th className="flex items-center text-white justify-between gap-3 p-6">
                    <MdDelete
                      className="bg-[#EA4744] w-5 h-5"
                      onClick={() => handleDelete(user._id)}
                    />
                    <Link to={`/updateUser/${user._id}`} className="bg-[#3C393B] w-5 h-5 flex justify-center items-center">
                      <MdEdit  />
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
