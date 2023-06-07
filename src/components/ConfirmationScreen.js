import React from "react";
import { Link } from "react-router-dom";

const ConfirmationScreen = ({ movieName, show }) => {
  return (
    <div>
      <h2>Ticket Booked!</h2>
      <p>Your ticket for "{movieName}" has been booked.</p>
      {show && show.image && <img src={show.image.medium} alt={show.name} />}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ConfirmationScreen;
