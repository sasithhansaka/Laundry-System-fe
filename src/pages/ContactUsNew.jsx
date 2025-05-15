import Navbar from "../components/Navbar";
import "./ContactUsNew.css";

export default function ContactUsNew() {
  return (
    <div className="contact-page">
      <Navbar />
      <div className="contact-info">
        <h1>Contact Us</h1>
        <div className="store-hours">
          <p>Store hours</p>
          <address>
            507-495 Flatbush Ave <br />
            New York, Brooklyn <br />
            NY 11225
          </address>
        </div>
        <div className="contacts">
          <div>
            <p>Contacts</p>
          </div>
          <div>
            <p>mountain@point.com</p>
            <p>415 500 7685</p>
          </div>
        </div>
      </div>

      <div className="contact-form">
        <h2>Contact form</h2>
        <form>
          <label>Name</label>
          <input type="text" placeholder="John" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea placeholder="Write your message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
