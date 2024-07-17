"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("service", formData.service);
      formDataToSend.append("message", formData.message);
      if (formData.resume) {
        formDataToSend.append("resume", formData.resume);
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });
      const res = await response.json();
      // console.log(res.success);
      if (res.success) {
        toast.success("Form submitted successfully");
        // Clear the form
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
          resume: null,
        });
      } else {
        toast.error("Form submission error");
      }
    } catch (error) {
      console.log("An error occurred while submitting the form", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col md:flex-row items-start md:items-center justify-between p-8 bg-black text-white min-h-screen"
    >
      <Toaster />
      {/* Left Section */}
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-2">Let's Talk Now</h2>
        <p className="text-5xl font-bold mb-4">
          Do You Have A Project In Your Mind?
        </p>
        <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
        <div className="grid grid-cols-2 gap-2 mb-8">
          <span>Front End Development</span>
          <span>Back End Development</span>
          <span>Full Stack Development</span>
          <span>App Development</span>
          <span>Graphic Design</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-8 md:mt-0">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-4 bg-gray-800 text-white focus:outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full p-4 bg-gray-800 text-white focus:outline-none"
            required
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-4 bg-gray-800 text-white focus:outline-none"
            required
          >
            <option disabled value="">
              Choose Service
            </option>
            <option>Front End Development</option>
            <option>Back End Development</option>
            <option>Full Stack Development</option>
            <option>App Development</option>
            <option>Graphic Design</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write Message"
            className="w-full p-4 bg-gray-800 text-white focus:outline-none h-32"
            required
          ></textarea>
          <input
            type="file"
            name="resume"
            onChange={handleFileChange}
            className="w-full p-4 bg-gray-800 text-white focus:outline-none"
          />
          <button
            type="submit"
            className="w-full p-4 bg-white text-black font-bold"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
