import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Events.css"; // Ensure the CSS file is imported
import toast from "react-hot-toast";

const EventSearch = () => {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchDate, setSearchDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fetch latest events from the backend
  const fetchLatestEvents = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/event/latest-events`
      );
      setEvents(response.data.data);
      setLoading(false);
      toast.success("Events fetched successfully!");
    } catch (error) {
      console.error("Error fetching events:", error);
      setLoading(false);
      toast.error("An error occurred. Please try again.");
    }
  };

  // Fetch events based on search query
  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/event/search`,
        {
          query: searchQuery,
          date: searchDate,
        }
      );
      setEvents(response.data.data);
      toast.success("Search results fetched!");
    } catch (error) {
      console.error("Error searching events:", error);
      toast.error("An error occurred while searching.");
    }
  };

  // Handle event click to show details
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  // Use useEffect to fetch events on component load
  useEffect(() => {
    fetchLatestEvents();
  }, []);

  return (
    <div className="event-container">
      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search events..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Latest Events Section */}
      <h2>Latest Past Events</h2>
      {loading ? (
        <p>Loading events...</p>
      ) : (
        <ul>
          {events.map((event) => (
            <li key={event._id}>
              <div className="event-date">{event.date}</div>
              <div className="event-heading">
                <a
                  href={event.link} // Link for heading
                  // target="_blank"
                  rel="noopener noreferrer"
                >
                  {event.heading}
                </a>
              </div>
              <div className="event-title">{event.title}</div>
              <div className="event-para">{event.para}</div>
            </li>
          ))}
        </ul>
      )}

      {/* Display selected event details */}
      {selectedEvent && (
        <div>
          <h3>{selectedEvent.heading}</h3>
          <p>{selectedEvent.title}</p>
          <p>{selectedEvent.para}</p>
          <p>
            <strong>{selectedEvent.date}</strong>
          </p>
          <p>
            <a
              href={selectedEvent.link}
              // target="_blank"
              rel="noopener noreferrer"
            >
              Event Link
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default EventSearch;
