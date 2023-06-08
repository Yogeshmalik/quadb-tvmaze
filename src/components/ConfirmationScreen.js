import React from "react";
import { Link } from "react-router-dom";

const ConfirmationScreen = ({ movieName, show, name }) => {
  return (
    <div className="flex flex-col justify-center text-center mx-auto h-screen pb-4">
      <span className=" text-center ">
        <h1 className=" text-red-400 p-4">CONGRATULATIONS! 🎉🎊</h1>
        <h2>Ticket Booked for {name}</h2>
        <p className=" text-xl p-4">
          Your ticket for <b>{movieName}</b> has been booked.
        </p>
        {show && show.image && <img src={show.image.medium} alt={show.name} />}

        <Link to="/">
          <button
            className=" bg-blue-500 text-white font-semibold py-3 text-sm min-w-[80px] 
          sm:min-w-[120px] md:min-w-[130px] lg:min-w-[150px] xl:min-w-[150px] 
          rounded-xl sm:text-lg md:text-xl lg:text-3xl pb-4 hover:bg-blue-600 active:scale-90"
          >
            Home
          </button>
        </Link>
      </span>
    </div>
  );
};

export default ConfirmationScreen;
