import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowList = ({ show, onShowClick }) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get(
          "https://api.tvmaze.com/search/shows?q=all"
        );
        setShows(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container">
      <h1>Show List</h1>
      <ul className="list-group">
        {shows.map((show) => (
          <li
            key={show.show.id}
            className="list-group-item d-flex justify-content-between align-items-center "
          >
            <h3>{show.show.name}</h3>
            <img src={show.show.image.medium} alt={show.show.name} />
            <p>{show.show.summary}</p>
            <Link to={`/show/${show.show.id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
