import React from "react";
import "./AboutUs.css";
import Integrity from "../Image/Integrity.png";
import Transparency from "../Image/Transparency.png";
import Student from "../Image/Student-First.png";
import Collaboration from "../Image/Collaboration-1-1.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      {/* First Div */}
      <div className="about-us__section">
        <div className="headingdiv">
          <h2>About Us</h2>
        </div>

        <div className="about-us__content">
          {/* Vision Statement */}
          <div className="columndirection">
            <h2 className="aboutush2">Vision Statement</h2>
            <p>
              Work with schools in mainstreaming career education as part of the
              school curriculum.
            </p>
          </div>

          {/* About Us */}
          <div className="columndirection">
            <h2 className="aboutush2">About Us</h2>
            <p>
              We are a social initiative focused on mainstreaming Career
              Education & Guidance in the school curriculum.
              <br />
              At NPOCA, we are attempting to build comprehensive career services
              for school students, which would help them identify their talent,
              explore opportunities, and make informed career decisions using
              the best resources available globally.
              <br />
              This, in our view, would help youth stay focused and motivated,
              improve academic performance, and address the issue of
              underemployment and unemployability.
            </p>
          </div>
        </div>
      </div>
      <div className="about-us__features">
        <h2>Our Virtues</h2>
        <p>
          We are a social initiative focused on mainstreaming Career Education &
          Guidance in the school curriculum. This in our view would help youth
          stay focused and motivated, improve academic performance and address
          the issue of underemployment and unemployability.
        </p>
        <div className="feature1">
          <div className="feature">
            <img src={Student} alt="Student" />
            <h2>Student First</h2>
            <p className="p1">
              Student welfare and interest precede everything else.
            </p>
          </div>
          <div className="feature">
            <img src={Collaboration} alt="Collaboration" />
            <h2>Collaboration</h2>
            <p className="p1">
              Building partnerships and alliances are the fastest way to
              contribute and scale.
            </p>
          </div>
          <div className="feature">
            <img src={Transparency} alt="Transparency" />
            <h2>Transparency</h2>
            <p className="p1">It is key to building trust.</p>
          </div>
          <div className="feature">
            <img src={Integrity} alt="Integrity" />
            <h2>Integrity</h2>
            <p className="p1">
              It is about what's right over what’s convenient.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
