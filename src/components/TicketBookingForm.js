import React, { useState } from "react";
import ConfirmationScreen from "./ConfirmationScreen";
import { useParams, Link } from "react-router-dom";

const TicketBookingForm = ({ show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { movieName, image } = useParams();

  const [isTicketBooked, setIsTicketBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user details in local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    // Close the booking form
    setIsTicketBooked(true);
  };

  if (isTicketBooked) {
    return <ConfirmationScreen movieName={movieName} show={show} name={name} />;
  }

  return (
    <div className="flex flex-col justify-center text-center h-screen pb-4">
      <div
        className="border p-4 mx-2 flex flex-col mt-4 rounded-3xl shadow-md 
    hover:shadow-2xl  justify-center text-center  pb-5"
      >
        <h2 className="flex text-left mx-auto justify-center pb-4">
          Book Ticket - {movieName}
        </h2>
        <div className="imgTicket">
          {show && show.image && <img src={image.medium} alt={show.name} />}
          <img src={image} alt={name} />
        </div>
        <form onSubmit={handleSubmit}>
          <label className=" text-xl text-red-400 font-semibold">
            NAME:
            <input
              className="border rounded-full p-3 mx-2 text-blue-500"
              placeholder="Enter your name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className=" text-xl text-red-400 font-semibold">
            EMAIL:
            <input
              className="border rounded-full p-3 mx-2 text-blue-500"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button
            className=" bg-blue-500 text-white font-semibold py-3 mt-2 text-sm min-w-[80px] 
          sm:min-w-[120px] md:min-w-[130px] lg:min-w-[150px] xl:min-w-[150px] 
          rounded-xl sm:text-lg md:text-lg lg:text-xl hover:bg-blue-600 active:scale-90"
            type="submit"
          >
            Book
          </button>
        </form>
      </div>
      <Link to="/">
        <button
          className=" bg-blue-500 text-white font-semibold py-3 m-4 text-sm min-w-[80px] 
          sm:min-w-[120px] md:min-w-[130px] lg:min-w-[150px] xl:min-w-[150px] 
          rounded-xl sm:text-lg md:text-xl lg:text-3xl pb-4 hover:bg-blue-600 active:scale-90"
        >
          Home
        </button>
      </Link>
    </div>
  );
};

export default TicketBookingForm;
