import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import TicketBookingForm from "./TicketBookingForm";

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);
  const openBookingForm = () => {
    setIsBookingFormOpen(true);
  };

  useEffect(() => {
    const fetchShowDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/shows/${showId}`
        );
        setShow(response.data);
      } catch (error) {
        console.error("Error fetching show details:", error);
      }
    };

    fetchShowDetails();
  }, [showId]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Show Details</h1>
      <h3>{show.name}</h3>
      {show.image && (
        <img className="" src={show.image.original} alt={show.name} />
      )}
      <p>{show.summary}</p>
      {/* <Link to={`/booking/${encodeURIComponent(show.name)}`}>
        <button>Book Ticket</button>
      </Link> */}
      <button onClick={openBookingForm}>Book Ticket</button>
      {isBookingFormOpen && (
        <TicketBookingForm
          movieName={show.name}
          onClose={() => setIsBookingFormOpen(false)}
        />
      )}
      <nav>
        <Link to="/">
          <button className="btn btn-primary ">Home</button>
        </Link>
      </nav>
    </div>
  );
};

export default ShowDetails;
