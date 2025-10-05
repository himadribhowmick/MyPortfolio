import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1uejf8d", // Your Service ID
        "template_yjro7d5", // Your Template ID
        form.current,
        "zO8oM6RSvO5mxe7Yl" // Your Public Key
      )
      .then(
        (result) => {
          console.log("EmailJS result:", result.text);
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error.text);
          alert("❌ Failed to send message: " + error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-3xl mx-auto px-6 md:px-8 py-16 text-center"
    >
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
        Lets Design Together
      </h2>
      <p className="text-lg text-gray-600 mb-10 dark:text-gray-300">
        If you like my work and think I’d be a great fit for your team or
        project, feel free to email me — I’d love to collaborate and bring your
        ideas to website!
      </p>

      {/* Fixed Card (same in light and dark mode) */}
      <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            required
            className="flex-1 w-full sm:w-auto px-4 py-3 rounded-md border border-gray-300 
                       text-gray-900 bg-white focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-md bg-orange-500 hover:bg-orange-600 
                       text-white font-semibold transition-colors duration-200"
          >
            Contact Me
          </button>
        </form>
      </div>
    </section>
  );
}
