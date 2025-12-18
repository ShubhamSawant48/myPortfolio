import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      alert("Server error. Try again later.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full px-6 py-24 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-16">

        {/* LEFT — FORM */}
        <div className="bg-white/5 border border-white/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Send a Message
          </h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="contact-input"
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="contact-input"
                required
              />
            </div>

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="contact-input"
            >
              <option>General Inquiry</option>
              <option>Collaboration</option>
              <option>Freelance Work</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="contact-input resize-none"
              required
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2
                         bg-white text-black font-medium py-3 rounded-xl
                         hover:bg-purple-200 transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT — INFO */}
        <div className="flex flex-col justify-center text-white">
          <h2 className="text-5xl font-bold mb-10">Let’s Connect</h2>

          <div className="space-y-6">
            <h4 className="text-xl tracking-widest text-white/80">
              Get In Touch
            </h4>

            <div className="flex items-center gap-4">
              <div className="info-icon"><Mail /></div>
              <span className="text-lg">your.email@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="info-icon"><MapPin /></div>
              <span className="text-lg">Mumbai, India</span>
            </div>
          </div>

          <div className="mt-12">
            <h4 className="text-xl tracking-widest text-white/80 mb-6">
              Socials . . .
            </h4>

            <div className="flex gap-4">
              <SocialIcon href="#" icon={FaGithub} />
              <SocialIcon href="#" icon={FaLinkedin} />
              <SocialIcon href="#" icon={FaTelegramPlane} />
              <SocialIcon href="#" icon={FaTwitter} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

/* ---------- Small Component ---------- */
const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full bg-purple-600/80 hover:bg-purple-500
               flex items-center justify-center transition hover:scale-110"
  >
    <Icon size={20} />
  </a>
);
