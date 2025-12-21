import React, { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

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
    <ScrollReveal>
      <section
        id="contact"
        className="relative w-full px-6 pt-24 flex items-center"
      >
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20">
          {/* LEFT — FORM (BIG SLIDE UP) */}
          <motion.div
            initial={{ opacity: 0, y: 180 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="bg-white/5 border border-white/20 backdrop-blur-xl
                       rounded-3xl p-8 shadow-2xl"
          >
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
                <option className="contact-input-option">General Inquiry</option>
                <option className="contact-input-option">Collaboration</option>
                <option className="contact-input-option">Freelance Work</option>
                <option className="contact-input-option">Other</option>
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
                           hover:bg-purple-200 hover:scale-[1.03]
                           transition-all duration-300"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* RIGHT — INFO (BIG SLIDE FROM RIGHT) */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col justify-center text-white"
          >
            <h2 className="text-5xl font-bold mb-10">Let’s Connect</h2>

            <div className="space-y-6">
              <h4 className="text-xl tracking-widest text-white/80">
                Get In Touch
              </h4>

              <div className="flex items-center gap-4">
                <div className="info-icon">
                  <Mail />
                </div>
                <span className="text-lg">sawantshubham736@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="info-icon">
                  <MapPin />
                </div>
                <span className="text-lg">Mumbai, Maharastra, India</span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-12">
              <h4 className="text-xl tracking-widest text-white/80 mb-6">
                Socials . . .
              </h4>

              <div className="flex gap-4">
                <SocialIcon
                  href="https://github.com/ShubhamSawant48"
                  icon={FaGithub}
                />
                <SocialIcon
                  href="https://www.instagram.com/shubhaam.ss?igsh=OGRhenEyOGs2ZTAx"
                  icon={FaInstagram}
                />
                <SocialIcon
                  href="https://www.linkedin.com/in/shubham-sawant-145477319/"
                  icon={FaLinkedin}
                />
                <SocialIcon
                  href="https://x.com/sawant_shub_48"
                  icon={FaTwitter}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Contact;

/* ---------- SMALL COMPONENT ---------- */
const SocialIcon = ({ href, icon: Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-12 h-12 rounded-full
               bg-purple-600/80 hover:bg-purple-500
               flex items-center justify-center
               transition-all duration-300
               hover:-translate-y-2 hover:scale-110
               shadow-lg hover:shadow-purple-500/40"
  >
    <Icon size={20} />
  </a>
);
