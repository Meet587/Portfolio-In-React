import React from "react";
import './contact.scss'

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact sec-pad">
        <div className="main-container">
          <h2 className="heading_sec">
            <span className="heading_sec_main">CONTACT</span>
            <span className="heading_sec_sub">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </span>
          </h2>
          <div className="contact-content">
            <form action="#" className="contact_form" method="post">
              <div className="contact_form-field">
                <label htmlFor="name" className="contact_form-label">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="contact_form-input"
                  id="name"
                  name="name"
                />
              </div>
              <div className="contact_form-field">
                <label htmlFor="email" className="contact_form-label">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="contact_form-input"
                  id="email"
                  name="email"
                />
              </div>
              <div className="contact_form-field">
                <label htmlFor="message" className="contact_form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  className="contact_form-input"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
