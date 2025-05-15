import Navbar from "../components/Navbar";
import "./AboutUsNew.css";

export default function AboutUsNew() {
  return (
    <div className="about-us-container">
      <Navbar />
      <div className="content">
        <div className="top">
          <h1 className="title">About Us</h1>
        </div>

        <div className="about-section">
          <div className="text-section">
            <h2>About Our servie</h2>
            <h3>Welcome to , a comprehensive Learning Management System.</h3>
            <p>
              Our platform provides a seamless and intuitive experience for
              managing, delivering, and engaging with educational content.
              Whether you're an institution, a corporate trainer, or an
              individual looking to expand your knowledge, [Your LMS Name]
              offers the tools you need to succeed.
            </p>
            <button className="service-button">View Our Service</button>
          </div>
          <div className="image-section">
            <img src="lms.jpeg" width="400" height="250" />
          </div>
        </div>
      </div>
    </div>
  );
}
