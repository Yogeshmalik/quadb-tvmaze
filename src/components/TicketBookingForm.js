import React, { useState } from "react";

const TicketBookingForm = ({ movieName, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store user details in local storage
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    // Close the booking form
    onClose();
  };

  return (
    <div>
      <h2>Book Ticket - {movieName}</h2>
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
