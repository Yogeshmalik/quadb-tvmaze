import React from "react";

const ConfirmationScreen = ({ movieName, show }) => {
  return (
    <div>
      <h2>Ticket Booked!</h2>
      <p>Your ticket for "{movieName}" has been booked.</p>
      {show && show.image && <img src={show.image.medium} alt={show.name} />}

    </div>
  );
};

export default ConfirmationScreen;
