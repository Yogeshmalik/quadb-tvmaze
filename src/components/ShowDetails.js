import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowDetails = () => {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  const navigate = useNavigate();
  const openBookingForm = () => {
    navigate(`/booking/${encodeURIComponent(show.name)}`);
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
    <div className="p-2 max-w-screen min-w-screen">
      <div className="flex justify-between p-2 mb-4">
        <h1>Movie Details</h1>
        <Link to="/">
          <button
            className="btn btn-primary mt-2 px-4 py-2 font-semibold 
          active:scale-90 "
          >
            Home
          </button>
        </Link>
      </div>
      <h3 className="mx-auto text-center">{show.name}</h3>
      {show.image && (
        <img
          className="mx-auto h-[35rem] w-auto"
          src={show.image.original}
          alt={show.name}
        />
      )}
      <p className="font-bold text-center p-2 text-xl">{show.summary}</p>
      <Link to={`/booking/${encodeURIComponent(show.name)}`}>
        <div className="flex justify-center font-bold">
          <button
            className=" bg-blue-500 text-white font-semibold py-3 text-sm min-w-[80px] 
          sm:min-w-[120px] md:min-w-[130px] lg:min-w-[150px] xl:min-w-[150px] 
          rounded-xl sm:text-lg md:text-lg lg:text-lg xl:text-lg hover:bg-blue-600 active:scale-90"
            // onClick={openBookingForm}
          >
            BOOK TICKET
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ShowDetails;
