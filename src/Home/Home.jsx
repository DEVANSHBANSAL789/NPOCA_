import React, { useState, useEffect } from "react";
// import studentbenefit from "../Image/studentbenefit.png";
// import participating from "../Image/participating.png";
// import exception from "../Image/exception.png";
// import student1 from "../Image/student1.png";
import Transparency from "../Image/Transparency.png";
import Student from "../Image/Student-First.png";
import Collaboration from "../Image/Collaboration-1-1.png";
import marilyn from "../Image/marilyn.jpeg";
import Integrity from "../Image/Integrity.png";
import npocamap from "../Image/npoca-map.webp";
import Slider from "../Slider/Slider.jsx";
import "./Home.css";
// import "./Slider.css";
// import slide1 from "../Image/slide1.png";
// import slide2 from "../Image/slide2.png";
import axios from "axios";
import SessionCard from "../SessionCard/SessionCard.jsx";

const Home = () => {
  const [sessions, setSessions] = useState([]);
  const fetchSessions = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/register/links`
      );
      setSessions(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchSessions();
  }, []);
  useEffect(() => {
    const counters = document.querySelectorAll(".number");
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText.replace("+", ""); // Remove "+" if already present
        const increment = target / 40; // Adjust speed

        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}+`; // Append "+"
          setTimeout(updateCount, 100); // Adjust delay
        } else {
          counter.innerText = `${target}+`; // Append "+" when target is reached
        }
      };

      updateCount();
    });
  }, []);

  return (
    <div className="home1">
      <div>
        <Slider />
      </div>
      {/* <div className="image-grid">
        <div className="image-item">
          <img src={student1} alt="Image 1" />
          <p className="number" data-target="5">
            0+
          </p>
          <p className="text1">Countries</p>
        </div>
        <div className="image-item">
          <img src={exception} alt="Image 2" />
          <p className="number" data-target="150">
            0+
          </p>
          <p className="text1">Exceptional Speakers</p>
        </div>
        <div className="image-item">
          <img src={participating} alt="Image 3" />
          <p className="number" data-target="700">
            0+
          </p>
          <p className="text1">Participating Schools</p>
        </div>
        <div className="image-item">
          <img src={studentbenefit} alt="Image 4" />
          <p className="number" data-target="38000">
            0+
          </p>
          <p className="text1">Students Benefitted</p>
        </div>
      </div> */}

      <div className="about-us__features">
        <h2>What We Offer</h2>
        <p>
          Engage with the finest professionals from industry and academia, to
          get an insider’s perspective on career, growth opportunities and
          prospects. Learn, and get inspired.
        </p>
        <div className="feature1">
          <div className="feature">
            <img src={Student} alt="Student" />
            <h2>Career Guidance</h2>
            <p className="p1">
              Career Selection, Career Preparation, Positive Behavior &
              Effective Learning.
            </p>
          </div>
          <div className="feature">
            <img src={Transparency} alt="Collaboration" />
            <h2>Academic Research</h2>
            <p className="p1">
              Supporting collaborations, resources and driving data-driven
              decisions.
            </p>
          </div>
          <div className="feature">
            <img src={Collaboration} alt="Transparency" />
            <h2>Advocacy</h2>
            <p className="p1">
              Building consensus on practices and policy around career
              education.
            </p>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="left-div">
          <h2> Mission statement</h2>
          <div className="maxdi">
            <p>
              Make career education accessible to a million students by 2024.
            </p>
          </div>
          <h2
            className="down
          "
          >
            Vision Statement
          </h2>
          <div className="maxdi">
            <p>
              Work with schools in mainstreaming career education as part of the
              school curriculum.
            </p>
          </div>
        </div>
        <div className="right-div">
          <div className="maxw">
            <p>“What a valuable gift to the people of India!</p>
            <p className="down">
              NPOCA is a major force for the advancement of career services in
              this country and deserves the attention of all people who care
              about the future of India and its children.”
            </p>
          </div>
          <div className="imagefooter">
            <img src={marilyn} alt="marilyn" className="marilyn" />
            <h2> Dr. Marilyn Maze, PhD</h2>
            <p>
              Executive Director
              <br />
              <br />
              Asia Pacific Career Development Association
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
      <div className="about-us__features" id="change">
        <h2>Upcoming Sessions</h2>
        <p>
          Engage with the finest professionals from industry and academia, to
          get an insider’s perspective on career, growth opportunities and
          prospects. Learn, and get inspired.
        </p>
        <div className="feature1">
          {sessions.slice(0, 3).map((session, index) => (
            // <div className="feature" key={session._id} id="first">
            //   <div className="one">
            //     <h2 className="h2">{session.heading}</h2>
            //     <div>
            //       <p className="p1">{session.date}</p>
            //       <p>{session.title}</p>
            //     </div>
            //   </div>
            //   <div className="two">
            //     <h2 className="a">{session.name}</h2>
            //     <div>
            //       <h2 className="a">{session.title}</h2>
            //       <a
            //         href={session.link}
            //         target="_blank"
            //         rel="noopener noreferrer"
            //       >
            //         <button className="b">Register Now</button>
            //       </a>
            //     </div>
            //     <h3 id="t" className="t">
            //       {session.type}
            //     </h3>
            //   </div>
            // </div>
            <SessionCard session={session} id={index} />
          ))}
          {/* <div className="feature" id="first">
            <div className="one">
              <h2 className="h2">National Automobile Olympiad</h2>
              <div>
                <p className="p1">June 10 onwards</p>
                <p>Open</p>
              </div>
            </div>
            <div className="two">
              <h2 className="a">Automotive Skills Development Council</h2>
              <div>
                <h2 className="a">Olympiad</h2>
                <a
                  href="https://drive.google.com/file/d/14v-JdRqn6aDMoA9RBJYO_8b6Cv1-SG9o/view"
                  target="_blank"
                >
                  <button className="b"> Register Now</button>
                </a>
              </div>
              <h3 id="t" className="t">
                Hybrid
              </h3>
            </div>
          </div>
          <div className="feature" id="first">
            {" "}
            <div className="one">
              <h2 className="h2">Careers in Media & Communication</h2>
              <div>
                <p className="p1">July 20, 2023</p>
                <p> 4:30 pm onwards</p>
              </div>
            </div>
            <div className="two">
              <h2 className="a">Prof. Ujjwal Choudhury</h2>
              <div>
                <h2 className="a">Career Conversation</h2>
                <a
                  href="https://us02web.zoom.us/webinar/register/WN_FiELeno2Qb6TSZHUH-Xg0A"
                  target="_blank"
                >
                  <button className="b"> Register Now</button>
                </a>
              </div>
              <h3 id="t" className="t">
                Live Online
              </h3>
            </div>
          </div>
          <div className="feature" id="second">
            {" "}
            <div className="one">
              <h2 className="h2">Personal Effectiveness & Resilience</h2>
              <div>
                <p className="p1">June 25, 2023</p>
                <p> 4:30pm onwards</p>
              </div>
            </div>
            <div className="two">
              <h2 className="a">Arun Mittal </h2>
              <div>
                <h2 className="a">Career Conversation</h2>
                <a
                  href="https://us02web.zoom.us/webinar/register/WN__gt-AaqdRsqRMFpirw7YWg"
                  target="_blank"
                >
                  <button className="b"> Register Now</button>
                </a>
              </div>
              <h3 id="t" className="t">
                Live Online
              </h3>
            </div>
          </div> */}
        </div>
      </div>
      <div className="ourReach">
        <h2>Our Reach</h2>
        <p>
          Ensuring career services are accessible, scalable, and timely
          available to one & all.
        </p>
        <img src={npocamap} alt="npocamap" />
      </div>
      <div className="about-us__features">
        <h2>Career Resources</h2>
        <p>
          A repository of illustrated handbooks, exam calendars and informative
          videos.
        </p>
        <div className="feature2">
          <div className="featureN">
            <div className="video-container">
              <iframe
                width="1280"
                height="654"
                src="https://www.youtube.com/embed/Y6fk5oGCQYI"
                title="Future Proof Careers | Masterclass for educators | Dr. Marilyn Maze"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h2 className="featureNh2">
              Future Proof Careers | Masterclass for Educators | Dr. Marilyn
              Maze
            </h2>
            <p className="featureNp">
              In this masterclass Dr. Marilyn Maze, talks about the dynamic
              world of work, its impact, and how career practitioners need to
              stay ahead.and how career practitioners .
            </p>
          </div>
          <div className="featureN">
            <div className="video-container">
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/YUKWeducKxw"
                title="Careers in Design 🎨 || Everything About Career in Design Field || Design Career Guide 2022"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h2 className="featureNh2">
              Careers in Design || Everything About Career in Design Field
            </h2>
            <p className="featureNp">
              This video provides an outline to the various opportunities
              available to students interested in pursuing a career in the field
              of design and education pathways.
            </p>
          </div>
          <div className="featureN">
            <div className="video-container">
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/UVLnRxf7FOQ"
                title="Space Careers | Astrophotography and Observatories"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <h2 className="featureNh2">
              Space Careers | Astrophotography and Observatories
            </h2>
            <p className="featureNp">
              Dorje is the Engineer-in-Charge at Indian Astronomical Observatory
              in Hanle. In this video, he shares his career journey which spans
              more than two decades.
            </p>
          </div>
        </div>
        <div className="view">
          <a
            href="https://www.youtube.com/channel/UCGG1BYfTyo-_MhjcDGZT3Kg"
            target="_blank"
          >
            <button className="but-view"> View More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
