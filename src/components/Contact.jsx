import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ahmerPortfolio", // ✅ your real service ID
        "template_9yhuzhs", // ✅ your template ID
        form.current,
        "gkGuSGi10eOfONqTt" // ✅ your public key
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌", error.text);
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#1d1316] text-white py-20 px-6 md:px-20"
    >
      <div className="max-w-[700px] mx-auto">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold mb-8 text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full bg-transparent border border-[#c2926b] px-4 py-3 rounded text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full bg-transparent border border-[#c2926b] px-4 py-3 rounded text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full bg-transparent border border-[#c2926b] px-4 py-3 rounded text-white"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className="bg-[#c2926b] hover:bg-[#a77250] text-black px-6 py-3 rounded text-lg w-full"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
