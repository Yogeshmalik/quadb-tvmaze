import React from "react";
import { Link } from "react-router-dom";

const ConfirmationScreen = ({ movieName, show }) => {
  return (
    <div>
      <h2>Ticket Booked!</h2>
      <p>Your ticket for "{movieName}" has been booked.</p>
      {show && show.image && <img src={show.image.medium} alt={show.name} />}
      
            <Link to="/"><button className="btn btn-primary mt-2 ">Home</button></Link>
          
    </div>
  );
};

export default ConfirmationScreen;
