import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams to get the eventId from URL
import "./EditEvent.css";

const EditEventForm = () => {
  const { id: eventId } = useParams(); // Get eventId from the URL
  const [eventData, setEventData] = useState({
    link: "",
    heading: "",
    date: "",
    title: "",
    para: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch the event data when the component mounts
  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/event/fetch/${eventId}`
        );
        console.log(response); // Check the response structure
        if (response.status === 200) {
          // Check if the data is an array or an object
          const data = Array.isArray(response.data.data)
            ? response.data.data[0]
            : response.data.data;
          setEventData(data);
        }
      } catch (error) {
        setError("Error fetching event data. Please try again.");
      }
    };

    if (eventId) {
      fetchEventData();
    }
  }, [eventId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/event/update/${eventId}`,
        eventData
      );
      if (response.status === 200) {
        setSuccess("Event updated successfully!");
        setError("");
      }
    } catch (error) {
      setError("Error updating event. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Edit Event</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit} className="event-form">
        <div className="form-group">
          <label className="form-label">Link:</label>
          <input
            type="text"
            name="link"
            value={eventData.link}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Heading:</label>
          <input
            type="text"
            name="heading"
            value={eventData.heading}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Date:</label>
          <input
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            value={eventData.title}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Paragraph:</label>
          <textarea
            name="para"
            value={eventData.para}
            onChange={handleChange}
            required
            className="form-textarea"
          />
        </div>
        <button type="submit" className="submit-btn">
          Update Event
        </button>
      </form>
    </div>
  );
};

export default EditEventForm;
