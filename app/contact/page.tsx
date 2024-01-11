// ContactForm.js
"use client";

import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import Head from "next/head";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [response, setResponse] = useState(0);

  const handleChange = (e: any) => {
    setResponse(0);
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xwkdvoqa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful form submission logic (e.g., show success message)
        setResponse(1);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        // Error handling (e.g., show error message)
        setResponse(2);
      }
    } catch (error) {
      console.log("Error:", error);
    }
    // Clear form fields after submission (optional)
  };

  var resmessage;
  switch (response) {
    case 0:
      resmessage = "";
      break;
    case 1:
      resmessage = "Your message was successfully recieved.";
      break;
    case 2:
      resmessage =
        "Form submission failed. Please refresh the page and try again!";
      break;
    default:
      resmessage = "Server Error.  Please refresh the page and try again!";
  }

  return (
    <div className="page">
      <div className={styles.container}>
      <h2 className={styles.title}>Contact</h2>

        
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
            />
          </label>
          <button className={styles.submitButton} type="submit">
            Send Message
          </button>
          <div className={styles.responsemess}>
            {response > 0 && <div>{resmessage}</div>}
          </div>
        </form>
      </div>

      <div className={styles.sec2}>
        <div className={styles.whatsappcont}>
          <div className={styles.whatsappinfo}>
            <h4>Hate Waiting?</h4>
            <div className={styles.whatsappdes}>
              Send a{" "}
              <Link
                href={
                  "https://wa.me/919315173922?text=Hey%20Suraj,%20I%20came%20across%20your%20website%20and%20I%20wanted%20to%20know%20if%20you%20are%20available%20to%20talk."
                }
                target="_blank"
              >
                WhatsApp Message
              </Link>{" "}
              right away!
            </div>
          </div>
          <Link
            href={
              "https://wa.me/919315173922?text=Hey%20Suraj,%20I%20came%20across%20your%20website%20and%20I%20wanted%20to%20know%20if%20you%20are%20available%20to%20talk."
            }
            target="_blank"
          >
            <BsWhatsapp size="4em"  />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
