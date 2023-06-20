import React, { useEffect, useState } from "react";
import Container from "../Container";
import { AiOutlinePlus } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { DeleteChocolate } from "../../api/allApis";

function ShowProduct() {
  const [chocolate, setChocolate] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/chocolate`)
      .then(res => res.json())
      .then(data => setChocolate(data));
  }, []);

  const handleDelete = id =>{
    DeleteChocolate(id);
  }

  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
        <title>All Chocolate</title>
      </Helmet>
      <Container>
        <div className="flex items-center font-poppins">
          <Link
            to="/add-chocolate"
            className="inline-block border-2 px-4 py-2 rounded-md"
          >
            <AiOutlinePlus className="inline-block" /> Add Chocolates
          </Link>
        </div>
        <hr className="my-5" />
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="text-white bg-yellow-900 py-2">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Country/Factory</th>
                  <th>Category</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {chocolate.map(item => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src={item.photoUrl}
                        className="w-[50px] h-[50px]"
                        alt=""
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td>{item.category}</td>
                    <td>
                      <div className="flex items-center justify-center gap-3">
                        <span onClick={()=>navigate(`/update/${item._id}`)} className="w-[30px] h-[30px] bg-yellow-900 rounded-md text-white text-center cursor-pointer">
                          <FaPencilAlt className="inline-block mt-1" />
                        </span>
                        <span onClick={()=>handleDelete(item._id)} className="w-[30px] h-[30px] bg-yellow-900 rounded-md text-white text-center cursor-pointer">
                          <FaTrash className="inline-block mt-1" />
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ShowProduct;
