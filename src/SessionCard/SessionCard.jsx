import React from "react";
import "./SessionCard.css"; // Import the CSS file

const SessionCard = ({ session }) => {
  return (
    <div className="card-container">
      {/* Header Section */}
      <div className="card-header">
        <div className="card-title">{session.heading}</div>
        <div className="date-and-time">
          <div className="card-date">{session.date}</div>
          <div className="card-time">{session.time}</div>
        </div>
      </div>

      {/* Content Section */}
      <div className="card-content">
        <div className="card-author">{session.name}</div>
        <div className="description-and-button">
          <div className="title-and-type">
            <div className="card-description">{session.title}</div>
            <div className="card-live">{session.type}</div>
          </div>

          {/* Register Button */}
          <div className="button-container">
            <a href={session.link} target="_blank" rel="noopener noreferrer">
              <button className="card-button">Register Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;
