import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShowList = ({ show, onShowClick }) => {
  const [shows, setShows] = useState([]);

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

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
    <div className="max-w-screen sm:p-3 md:p-3 lg:p-3 xl:p-3 ">
      <div className="flex pl-8">
        <h1>Show List</h1>
      </div>
      <ul
        className="shadow-md max-w-[40rem] sm:max-w-full md:max-w-full 
     lg:max-w-full xl:max-w-full min-w-screen "
      >
        {shows.map((show) => (
          <li
            key={show.show.id}
            className={`min-w-screen relative list-group-item d-flex justify-content-between align-items-center 
            my-5 py-4 rounded-xl shadow-md hover:bg-blue-300 hover:scale-105 hover:shadow-2xl ${
              isExpanded ? "after-expand" : "text-list"
            }`}
          >
            <div className="flex p-2">
              <h4 className="absolute top-4 mb-4 font-bold">MOVIE</h4>
              <h3 className="min-w-[9.2rem] md:min-w-[10rem] lg:min-w-[12rem] xl:min-w-[14rem] ">
                {show.show.name}
              </h3>
            </div>
            <img
              className=""
              src={show.show.image.medium}
              alt={show.show.name}
            />
            <div className="flex flex-col px-3 flex-grow">
              <h4 className="absolute top-4 mb-4">SUMMARY</h4>
              <p
                className={`text pt-4 mt-4 sm:mt-5 md:mt-5 lg:mt-5 xl:mt-6 whitespace-wrap ${
                  isExpanded ? "text-expanded" : "text"
                }`}
                onClick={toggleExpand}
              >
                {show.show.summary}
              </p>
            </div>
            <Link to={`/show/${show.show.id}`}>
              <button
                className=" mr-2 bg-blue-500 text-white font-semibold py-4 
                text-sm min-w-[80px] sm:min-w-[120px] md:min-w-[130px] 
              lg:min-w-[150px] xl:min-w-[150px]  rounded-xl sm:text-lg 
              md:text-lg lg:text-lg xl:text-lg hover:scale-90"
              >
                View Details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowList;
