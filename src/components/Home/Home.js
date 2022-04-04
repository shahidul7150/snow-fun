import React, { useEffect, useState } from "react";
import CustomerSay from "../customerSay/CustomerSay";
import "./Home.css";
const Home = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="flex justify-around mt-8 items-center">
        <div className="text-5xl font-bold ">
          <h2>It's Not Just snow-board</h2>
          <h2 className="text-cyan-400">Enjoy your life </h2>
          <p
            className="text-xl font-normal
                pt-4 text-gray-500 "
          >
            Snow-board is a tool that is use for ride in snow field . So Enjoy
            and fun your life.
          </p>

          <button className="bg-cyan-400 text-xl py-2 px-5 font-semibold text-white rounded mt-8">
            DEMO
          </button>
        </div>
        <img
          className="img-size"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-rF7WRmhRWhRx9GmNPb0x0lMNpqu3Z8qP9g&usqp=CAU"
          alt=""
        />
      </div>
      <h1 className="text-3xl font-semibold mt-20 text-orange-600">
        Our Customers Say
      </h1>
      <div className="reviews-container">
        {reviews.map((review) => (
          <CustomerSay key={review.id} review={review}></CustomerSay>
        ))}
      </div>
    </div>
  );
};

export default Home;
