import React, { useState } from "react";
import axios from "axios";
import "./youtube.css"; // Custom styles for the form

const AddContent = () => {
  const [formData, setFormData] = useState({
    link: "",
    heading: "",
    para: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/content/add`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setSuccess("Content added successfully!");
        setError("");
        setFormData({
          link: "",
          heading: "",
          para: "",
        });
      }
    } catch (error) {
      setError("Error adding content. Please try again.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-content-container">
      <h2>Add New YouTube Content</h2>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="add-content-form">
        <div className="form-group">
          <label htmlFor="link">YouTube Link</label>
          <input
            type="url"
            id="link"
            name="link"
            value={formData.link}
            onChange={handleChange}
            placeholder="Enter YouTube Link"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="heading">Heading</label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            placeholder="Enter Heading"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="para">Paragraph</label>
          <textarea
            id="para"
            name="para"
            value={formData.para}
            onChange={handleChange}
            placeholder="Enter Paragraph"
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Adding..." : "Add Content"}
        </button>
      </form>
    </div>
  );
};

export default AddContent;
