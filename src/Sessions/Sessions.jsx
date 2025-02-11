import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Sessions.css";

const Sessions = () => {
  const [events, setEvents] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/register/links`
      );
      setEvents(response.data.data);
    } catch (error) {
      setMessage("Error fetching sessions");
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/register/link/${id}`
      );
      setMessage(response.data.message);
      alert("Session Deleted");
      fetchEvents();
    } catch (error) {
      setMessage("Error deleting session");
      console.error(error);
    }
  };

  const handleEdit = (session) => {
    // Pass session data as state
    navigate(`/edit-session/${session._id}`, { state: { session } });
  };

  const handleAddSession = () => {
    // Navigate to the add session form
    window.location.href = "/add-session";
  };

  const handleAddBanner = () => {
    // Navigate to the add banner form
    window.location.href = "/banner"; // Ensure this route matches your setup
  };
  const handleAddYouTubeLink = () => {
    // Navigate to the add YouTube link form
    window.location.href = "/add"; // Ensure this route matches your setup
  };
  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="sessions">
      <h2>All Sessions</h2>

      {/* Button to Add Banner */}
      <button className="add-banner-button" onClick={handleAddBanner}>
        Add Banner
      </button>

      <button className="add-session-button" onClick={handleAddSession}>
        Add Session
      </button>
      {/* Add YouTube Link Button */}
      <button className="add-youtube-button" onClick={handleAddYouTubeLink}>
        Add YouTube Link
      </button>

      <table className="events-table">
        <thead>
          <tr>
            <th>Speaker Title</th>
            <th> Speaker Name</th>
            <th>Title</th>
            <th>Type</th>
            <th>Link</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event._id}>
              <td>{event.heading}</td>
              <td>{event.name}</td>
              <td>{event.title}</td>
              <td>{event.type}</td>
              <td>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  {event.link}
                </a>
              </td>
              <td>{event.date}</td>
              <td>{event.time}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => handleEdit(event)} // Pass entire session object
                >
                  Edit
                </button>
                <button
                  className="delete-button"
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

export default Sessions;
