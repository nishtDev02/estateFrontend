import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <section className="w-full pt-32 pb-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto px-6 text-center relative"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10" />

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#F9FAFB]"
          >
            Get in <span className="text-emerald-400">Touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-[#9CA3AF] max-w-2xl mx-auto"
          >
            Have a question or want to learn more about what we’re building?
            We’d love to hear from you.
          </motion.p>
        </motion.div>
      </section>

      {/*contactForm section  */}
      <section className="w-full py-28">
        <div className="max-w-4xl mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative bg-[#111827] border border-white/10 rounded-2xl p-8 md:p-12 hover:border-emerald-500/40 transition-all"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 transition"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 transition"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="mt-6 w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 transition"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="mt-6 w-full bg-[#0F172A] border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500/40 resize-none transition"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="mt-8 px-8 py-3 bg-emerald-500 text-black font-medium rounded-lg hover:bg-emerald-600 transition"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
