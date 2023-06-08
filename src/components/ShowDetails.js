import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const ShowDetails = () => {
  const { showId, image } = useParams();
  const [show, setShow] = useState(null);

  const navigate = useNavigate();
  const openBookingForm = () => {
    navigate(`/booking/${encodeURIComponent(show.name)}/${encodeURIComponent(show.image.original)}`);
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
        <h1 className="pt-2">TV Show Details</h1>
        <Link to="/">
          <button
            className="btn btn-primary mt-1 px-4 py-2 font-semibold 
          active:scale-90"
          >
            Home
          </button>
        </Link>
      </div>
      <h3 className="mx-auto text-center font-bold text-3xl">{show.name}</h3>
      {show.image && (
        <img
          className="mx-auto h-96 w-auto hover:scale-105 p-2 rounded-3xl hover:shadow-md"
          src={show.image.original}
          alt={show.name}
        />
      )}
      <p className="font-bold text-center p-3 text-xl">{show.summary}</p>
      <div className="mx-auto text-center font-bold ">
        <Link to={`/booking/${encodeURIComponent(show.name)}`}>
          <button
            className=" bg-blue-600 text-white font-semibold py-3 px-2 text-sm min-w-[80px] 
          sm:min-w-[120px] md:min-w-[130px] lg:min-w-[150px] xl:min-w-[150px] 
          rounded-xl sm:text-lg md:text-lg lg:text-lg xl:text-lg hover:bg-blue-700 active:scale-90"
            onClick={openBookingForm}
          >
            BOOK TICKET
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ShowDetails;
