import React, { useState } from "react";
import axios from "axios";
import "./banner.css"; // CSS for styling the Banner form

const AddBannerForm = () => {
  const [bannerData, setBannerData] = useState({
    link: "",
    file: null,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle file change (image upload)
  const handleFileChange = (e) => {
    setBannerData({
      ...bannerData,
      file: e.target.files[0],
    });
  };

  // Handle input change for the link
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData({
      ...bannerData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", bannerData.file);
    formData.append("link", bannerData.link);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/banner/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        setSuccess(response.data.message);
        setError("");
        setBannerData({
          link: "",
          file: null,
        });
      }
    } catch (error) {
      setError("Error uploading banner. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Add Banner</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit} className="banner-form">
        <div className="form-group">
          <label className="form-label">Banner Link:</label>
          <input
            type="text"
            name="link"
            value={bannerData.link}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Enter banner link"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Upload Banner Image:</label>
          <input
            type="file"
            name="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Add Banner
        </button>
      </form>
    </div>
  );
};

export default AddBannerForm;
