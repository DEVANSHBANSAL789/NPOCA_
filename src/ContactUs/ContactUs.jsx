import React, { useState } from "react";
import "./ContactUs.css";
import location from "../Image/location1.png";
import message from "../Image/message.png";
import group from "../Image/group.png";
import image1 from "../Image/image1.png";
import image2 from "../Image/image2.png";
import image3 from "../Image/image3.png";
import image4 from "../Image/image4.png";
import image5 from "../Image/image5.png";
import image6 from "../Image/image6.png";
import image7 from "../Image/image7.png";
import image8 from "../Image/image8.png";
import image9 from "../Image/image9.png";
import image10 from "../Image/image10.png";
import image11 from "../Image/image11.png";
import image12 from "../Image/image12.png";
import image13 from "../Image/image13.png";
import image14 from "../Image/image14.png";
import image15 from "../Image/image15.png";
import image16 from "../Image/image16.png";
import image17 from "../Image/image17.png";
import image18 from "../Image/image18.png";
import image19 from "../Image/image19.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    YouAre: "",
  });

  const CompanyMap = () => {
    return (
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448746.45281022234!2d77.4079!3d28.514712!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1734735252871!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", YouAre: "" });
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h2 className="h2contact">Contact Us</h2>
        <p>
          If you have a question or a request, we will be happy to help. Feel
          free to contact us by email, WhatsApp, or telephone and we will get
          back to you at the earliest.
        </p>
      </div>
      <div className="contact-features">
        <div className="feature">
          <img src={location} alt="location" />
          <p className="p1">📌 Noida, Uttar Pradesh, India</p>
          <a href="tel:+918588013322" target="_blank" className="anchortag">
            <p>📞 +91 85880 13322</p>
          </a>
        </div>
        <div className="feature">
          <img src={message} alt="message" />
          <a
            href="mailto:sambhav@npoca.com"
            target="_blank"
            className="anchortag"
          >
            <p className="p1">⚲ sambhav@npoca.com</p>
          </a>
          <p>(For School Only)</p>
          <a href="mailto:arun@npoca.com" target="_blank" className="anchortag">
            <p>✉️ arun@npoca.com</p>
          </a>
        </div>
        <div className="feature">
          <img src={group} alt="group" />
          <p className="p1">Join our Whatsapp Group</p>
          <p>NPOCA Academic Group</p>
          <a
            href="https://api.whatsapp.com/message/454W2XXUX4MQG1?autoload=1&app_absent=0"
            target="_blank"
            className="anchortag"
          >
            <button>Join Now</button>
          </a>
        </div>
      </div>
      <h1 className="heading-form">Get in touch</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-div">
          <label className="contact-label">Name:</label>
          <input
            className="contact-input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="contact-label">Email:</label>
          <input
            className="contact-input"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contact-message">
          <label className="contact-label">You Are:</label>
          <input
            className="contact-input"
            name="YouAre"
            value={formData.YouAre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-form">
          <button className="contact-button" type="submit">
            Submit
          </button>
        </div>
      </form>
      <CompanyMap />
      <h2 className="h2image">Trusted By</h2>
      <div className="image-gallery">
        <div className="image-row">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
          <img src={image4} alt="image4" />
          <img src={image5} alt="image5" />
          <img src={image6} alt="image6" />
          <img src={image7} alt="image7" />
          <img src={image8} alt="image8" />
          <img src={image9} alt="image9" />
          <img src={image10} alt="image10" />
        </div>
        <div className="image-row">
          <img src={image11} alt="image11" />
          <img src={image12} alt="image12" />
          <img src={image13} alt="image13" />
          <img src={image14} alt="image14" />
          <img src={image15} alt="image15" />
          <img src={image16} alt="image16" />
          <img src={image17} alt="image17" />
          <img src={image18} alt="image18" />
          <img src={image19} alt="image19" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
