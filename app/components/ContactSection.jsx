"use client";
import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const ContactSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const {theme} = useTheme();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
      <section
        id="contact"
        className={`flex h-screen items-center justify-center ${
          theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-black'
        }`}>
        <div>
          {emailSubmitted ? (
            <p className="text-pink-400 text-md mt-2">
              Email sent!
            </p>
          ) : (
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-6">
                <h1 className="text-4xl font-extrabold font-['ui-serif'] text-pink-300 mb-4">Let's chat</h1>
                <label
                  htmlFor="email"
                  className="text-indigo-400 block mb-2 text-sm font-medium"
                >
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  id="email"
                  required
                  className="bg-pink-300 border border-pink-300 text-sm rounded-lg block w-full p-3"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="Subject"
                  className="text-indigo-400 block text-sm mb-2 font-medium"
                >
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  id="subject"
                  required
                  className="bg-pink-300 border border-pink-300 text-sm rounded-lg block w-full p-3"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-indigo-400 block text-sm mb-2 font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-pink-300 border border-pink-300 text-sm rounded-lg block w-full p-3"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-medium font-['ui-serif'] hover:text-sky-800 py-2.5 px-5 rounded-lg w-full"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>

  );
};

export default ContactSection;