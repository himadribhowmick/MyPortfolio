import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Send the email
    emailjs
      .sendForm(
        "service_690s73w",      // Your Service ID
        "template_yjro7d5",     // Your Template ID
        form.current,
        "zO8oM6RSvO5mxe7Yl"     // Your Public Key
      )
      .then(
        (result) => {
          console.log('EmailJS result:', result.text);
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS error:', error.text);
          alert('❌ Failed to send message: ' + error.text);
        }
      );
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 md:px-8 py-16">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-8 md:p-12 shadow-lg">
        <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          Let's Design Together
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Got a project in mind? Send me a message and let's collaborate!
        </p>

        <form ref={form} onSubmit={sendEmail} className="contact-form space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-orange-500 focus:outline-none resize-none"
          />

          <button
            type="submit"
            className="px-6 py-3 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
