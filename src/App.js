import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import ShowDetails from "./components/ShowDetails";
import TicketBookingForm from "./components/TicketBookingForm";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:showId" element={<ShowDetails />} />
          <Route path="/booking/:movieName" element={<TicketBookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
