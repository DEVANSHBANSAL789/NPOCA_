import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBanner.css";

const UpdateBannerForm = () => {
  const [bannerData, setBannerData] = useState({
    link: "",
    image: null, // For image file
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { id } = useParams(); // Get banner ID from URL for editing
  const navigate = useNavigate();

  //   // Fetch banner data for editing
  //   useEffect(() => {
  //     const fetchBannerData = async () => {
  //       try {
  //         const response = await axios.get(
  //           `${import.meta.env.VITE_API_URL}/update/${id}`
  //         );
  //         setBannerData({ link: response.data.banner.link, image: null });
  //       } catch (err) {
  //         setError("Failed to fetch banner data.");
  //       }
  //     };

  //     fetchBannerData();
  //   }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBannerData({
      ...bannerData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setBannerData({
      ...bannerData,
      image: e.target.files[0], // Update the image file
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("link", bannerData.link);
    if (bannerData.image) {
      formData.append("file", bannerData.image);
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/banner/update/${id}`,
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
        navigate("/banner"); // Redirect to banner list or another page
      }
    } catch (error) {
      setError("Error updating banner. Please try again.");
      setSuccess("");
    }
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Update Banner</h2>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}

      <form onSubmit={handleSubmit} className="banner-form">
        <div className="form-group">
          <label className="form-label">Link:</label>
          <input
            type="text"
            name="link"
            value={bannerData.link}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Upload New Image:</label>
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            className="form-input"
          />
        </div>

        <button type="submit" className="submit-btn">
          Update Banner
        </button>
      </form>
    </div>
  );
};

export default UpdateBannerForm;
