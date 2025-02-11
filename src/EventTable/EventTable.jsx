import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./EventTable.css";

const EventsTable = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // Fetch the events on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/event/events`
        );
        if (response.status === 200) {
          setEvents(response.data.data);
          setError("");
        }
      } catch (error) {
        setError("Error fetching events. Please try again.");
        setSuccess("");
      }
    };

    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/event/delete/${id}`
      );
      if (response.status === 200) {
        setSuccess(response.data.message);
        setEvents(events.filter((event) => event._id !== id));
      }
    } catch (error) {
      setError("Error deleting event. Please try again.");
      setSuccess("");
    }
  };

  const handleEdit = (eventId) => {
    // Redirect to the edit event form page with the eventId as a URL parameter
    navigate(`/edit-event/${eventId}`);
  };

  return (
    <div className="events-table-container">
      <h2 className="table-title">Latest Events</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <table className="events-table">
        <thead>
          <tr className="table-header">
            <th>Link</th>
            <th>Heading</th>
            <th>Date</th>
            <th>Title</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id} className="table-row">
              <td>{event.link}</td>
              <td>{event.heading}</td>
              <td>{new Date(event.date).toLocaleDateString()}</td>
              <td>{event.title}</td>
              <td className="actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(event._id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(event._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;
