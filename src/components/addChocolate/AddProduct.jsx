import React, { useState } from "react";
import Container from "../Container";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { AddChocolate } from "../../api/allApis";

const options = ["Dairy Milk", "Peanut", "Vanilla", "Treat"];

function AddProduct() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const onchangeValue = event => {
    setSelectedOption(event.target.value);
  };
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    console.log(data);
    AddChocolate(data);
    reset();
  };
  return (
    <div className="py-10">
      <Helmet>
        <title>Chocolate || Add Form</title>
      </Helmet>
      <Container>
        <div className="flex items-center font-poppins">
          <Link to="/" className="inline-block">
            <BsArrowLeft className="inline-block mr-2" /> All Chocolates
          </Link>
        </div>
        <hr className="my-5" />
        <div className="bg-gray-100 p-10 rounded-md font-poppins">
          <p className="text-center text-[16px] font-light pb-10">
            Use the below form to create a new product
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="block text-[16px] font-light" htmlFor="name">
                Name
              </label>
              <input
                className="block py-2 pl-2 rounded-md w-full outline-0"
                type="text"
                id="name"
                name="name"
                {...register("name")}
                placeholder="Chocolate Name"
              />
            </div>
            <div className="mb-3">
              <label className="block text-[16px] font-light" htmlFor="country">
                Country
              </label>
              <input
                className="block py-2 pl-2 rounded-md w-full outline-0"
                type="text"
                id="country"
                name="country"
                {...register("country")}
                placeholder="Enter Country Name"
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-[16px] font-light"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="block py-2 pl-2 rounded-md w-full outline-0"
                name="category"
                {...register("category")}
                value={selectedOption}
                onChange={onchangeValue}
              >
                {options.map(option => (
                  <option value={option} key={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label
                className="block text-[16px] font-light"
                htmlFor="photoUrl"
              >
                Image
              </label>
              <input
                className="block py-2 pl-2 rounded-md w-full outline-0"
                type="url"
                id="photoUrl"
                name="photoUrl"
                {...register("photoUrl")}
                placeholder="Enter Image Url"
              />
            </div>
            <div className="pt-5">
              <input
                type="submit"
                value="Save"
                className="w-full bg-[#91572B] py-2 text-center text-white"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default AddProduct;
