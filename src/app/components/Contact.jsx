"use client";

import { useState } from "react";

export default function NewContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }
  return (
    <div className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <h3 className="text-3xl font-semibold">Get in Touch!</h3>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div
            className="w-full flex flex-col my-4 shadow rounded"
            id="contact"
          >
            <input
              placeholder="Whats your name?"
              type="text"
              minLength={3}
              maxLength={150}
              required
              className=" p-4 bg-gray-50 border border-gray-100 "
              autoComplete="off"
              id="name"
            />
          </div>
          <div className="w-full flex flex-col my-4 shadow rounded">
            <input
              placeholder="Whats your email?"
              type="email"
              minLength={5}
              maxLength={150}
              required
              className=" p-4 bg-gray-50 border border-gray-100 "
              autoComplete="off"
              id="email"
            />
          </div>
          <div className="shadow rounded">
            <textarea
              placeholder="How can we help you?"
              rows={4}
              required
              minLength={10}
              maxLength={500}
              name="message"
              className="w-full p-4 bg-gray-50 border border-gray-100 "
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 w-40 bg-blue-950 text-white font-medium rounded mt-4"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
