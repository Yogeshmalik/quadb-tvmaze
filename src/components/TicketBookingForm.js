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
    return <ConfirmationScreen movieName={movieName} show={show} name={name} image={image} />;
  }

  return (
    <div className="flex flex-col justify-center text-center h-screen pb-4">
      <div
        className="border p-4 mx-3 flex flex-col mt-5 rounded-3xl shadow-md 
    hover:shadow-2xl pb-5"
      >
        <h2 className="flex text-left mx-auto justify-center pb-4">
          Book Ticket - {movieName}
        </h2>
        <div className="imgTicket">
          {show && show.image && <img className=" h-48 w-auto" src={image} alt={show.name} />}
          <img className=" h-48 w-auto" src={image} alt={name} />
        </div>
        <form onSubmit={handleSubmit}>
          <label className="inline-flex text-xl text-red-400 font-semibold mt-4">
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
          <label className="inline-flex text-xl text-red-400 font-semibold text-left px-4 mt-4">
            EMAIL:
            <input
              className="border rounded-3xl p-3 mx-2 text-blue-500"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <button
            className=" bg-red-400 text-white font-semibold py-3 mt-5 text-sm min-w-[80px] 
          sm:min-w-[120px] md:min-w-[130px] lg:min-w-[150px] xl:min-w-[150px] 
          rounded-xl sm:text-lg md:text-2xl hover:bg-red-500 active:scale-90 hover:max-w-screen"
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
