import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  fadeInUp,
  staggerContainer,
} from "../utils/animations";

const contactCards = [
  {
    id: 1,
    title: "Email",
    value: "ashis@example.com",
    icon: <FaEnvelope />,
  },

  {
    id: 2,
    title: "LinkedIn",
    value: "linkedin.com/in/ashis",
    icon: <FaLinkedin />,
  },

  {
    id: 3,
    title: "GitHub",
    value: "github.com/ashis",
    icon: <FaGithub />,
  },

  {
    id: 4,
    title: "Phone",
    value: "+91 XXXXX XXXXX",
    icon: <FaPhoneAlt />,
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white text-gray-900 dark:bg-gray-950 dark:text-white py-32 transition-colors duration-500"
    >

      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-purple-500/5 dark:bg-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="mb-4 font-medium text-cyan-400">
            Get In Touch
          </p>

          <h2 className="text-5xl font-bold">
            Let’s Build Something Amazing
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-600 dark:text-gray-400">
            I’m always interested in discussing frontend
            engineering, scalable architectures, React ecosystems,
            and exciting opportunities.
          </p>

        </motion.div>

        {/* Main Grid */}
        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Left Side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >

            {contactCards.map((card) => (
              <motion.div
                key={card.id}
                variants={fadeInUp}
                className="group flex items-center gap-6 rounded-3xl border border-gray-200 bg-gray-50/70 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-400/30 dark:hover:bg-white/10 hover:bg-white/20"
              >

                {/* Icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/20 text-2xl text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">

                  {card.icon}

                </div>

                {/* Text */}
                <div>

                  <p className="text-gray-600 dark:text-gray-400">
                    {card.title}
                  </p>

                  <h3 className="mt-1 text-xl font-semibold">
                    {card.value}
                  </h3>

                </div>

              </motion.div>
            ))}

          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200 bg-gray-50/70 dark:border-white/10 dark:bg-white/5 p-8 backdrop-blur-xl transition-colors"
          >

            <form className="space-y-6">

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-black/20 dark:text-white"
                />

              </div>

              {/* Email */}
              <div>

                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-black/20 dark:text-white"
                />

              </div>

              {/* Message */}
              <div>

                <label className="mb-2 block text-sm text-gray-600 dark:text-gray-400">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full rounded-2xl border border-gray-300 bg-gray-50 px-5 py-4 text-gray-900 outline-none transition focus:border-cyan-400 dark:border-white/10 dark:bg-black/20 dark:text-white"
                />

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-cyan-400 px-6 py-4 font-semibold text-black transition hover:bg-cyan-300"
              >

                Send Message

              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Contact;