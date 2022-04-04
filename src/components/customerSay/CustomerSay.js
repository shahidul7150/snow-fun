import React from "react";
import "./CustomerSay.css";
const CustomerSay = ({ review }) => {
  console.log(review);
  const { name, image, detail, ratting } = review;

  return (
    <div className="review-container max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={image} alt="" />
      </div>

        <div >
          <p className="text-gray-800 text-2xl font-semibold">{name}</p>
          <p className="mt-2 text-gray-600">Ratting:★ ({ratting})</p>
        </div>
        <div>
          <p >{detail}</p>
        </div>
      
    </div>
  );
};

export default CustomerSay;
