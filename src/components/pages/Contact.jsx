import { Link } from "react-router-dom";
import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../../styling/Contact.css";
import contact from "../../assets/contact.jpg";
function Contact() {
  function formSubmit(e) {
    e.preventDefault();
    window.location.reload();
  }
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div
          className="leftSide"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>
        <div className="rightSide">
          <h1> Contact Us</h1>

          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit" onClick={(e) => formSubmit(e)}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
