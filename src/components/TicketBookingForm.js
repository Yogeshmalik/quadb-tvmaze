import React, { useState } from "react";
import ConfirmationScreen from "./ConfirmationScreen";

const TicketBookingForm = ({ movieName, onClose, show }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [isTicketBooked, setIsTicketBooked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user details in local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    // Close the booking form
    setIsTicketBooked(true);
    onClose();
  };

  if (isTicketBooked) {
    return <ConfirmationScreen movieName={movieName} />;
  }

  return (
    <div>
      <h2>Book Ticket - {movieName}</h2>
      <div className="imgTicket">
        {show && show.image && <img src={show.image.medium} alt={show.name} />}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default TicketBookingForm;
