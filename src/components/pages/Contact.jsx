import { Link } from "react-router-dom";
import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../../styling/Contact.css";
import contact from "../../assets/contact.jpg";
import { useState } from "react";
function Contact() {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const[mesaj, setMesaj] = useState("")
  function formSubmit(e) {
    e.preventDefault();
    const mesajDeTrimis = `Ma numesc ${name}:Vrei să ne contactezi? Suntem la un click distanță! Completează formularul și spune-ne cum te putem ajuta. Vom reveni cât mai curând posibil. ${mesaj}`;
    const mailtoLink = `mailto:Ewinegalery@gmail.com ?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(mesajDeTrimis)}`;
    window.location.href = mailtoLink;
  }
  const setNameChange = (event) => {
     setName(event.target.value)
  }
  const setSubjectChange = (event) => {
    setSubject(event.target.value)
  }
  const setMesajChange = (event) => {
    setMesaj(event.target.value)
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

          <form id="contact-form" onSubmit={(e) => formSubmit(e)}>
            <label htmlFor="name">Full Name</label>
            <input
              name="name"
              placeholder="Enter full name..."
              type="text"
              value={name}
              onChange={setNameChange}
            />
            <label htmlFor="Subject">Subject</label>
            <input
              name="Subject"
              placeholder="Enter subject..."
              type="text"
              value={subject}
              onChange={setSubjectChange}
            />
            <label htmlFor="mesaj">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
              value={mesaj}
              onChange={setMesajChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
