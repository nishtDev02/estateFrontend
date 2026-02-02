import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const SectionC = () => {
  return (
    <section className="w-full bg-[#222831] py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LEFT */}
        <motion.div className="flex flex-col gap-6" variants={container}>
          <motion.span
            className="text-sm font-semibold text-emerald-400 uppercase tracking-wide"
            variants={item}
          >
            Proven
          </motion.span>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9FAFB] leading-tight"
            variants={item}
          >
            Measurable growth for <br />
            real-estate businesses
          </motion.h1>

          <motion.p
            className="text-[#9CA3AF] max-w-xl"
            variants={item}
          >
            We deliver predictable results. Your business grows because
            we focus on what matters most—qualified appointments that close.
          </motion.p>

          {/* FEATURES */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-6"
            variants={container}
          >
            {/* Feature 1 */}
            <motion.div
              className="flex flex-col gap-2"
              variants={item}
              whileHover={{ y: -6 }}
            >
              <span className="text-emerald-400 text-2xl">➜</span>
              <h3 className="text-[#F9FAFB] font-semibold">
                Real growth
              </h3>
              <p className="text-sm text-[#9CA3AF]">
                Appointments booked by customers ready to move forward
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="flex flex-col gap-2"
              variants={item}
              whileHover={{ y: -6 }}
            >
              <span className="text-emerald-400 text-2xl">⌂</span>
              <h3 className="text-[#F9FAFB] font-semibold">
                Your advantage
              </h3>
              <p className="text-sm text-[#9CA3AF]">
                No guessing, no wasted time, no empty promises
              </p>
            </motion.div>
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="flex items-center gap-6 mt-8"
            variants={item}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-emerald-400 text-emerald-400 px-6 py-2 rounded-md font-medium hover:bg-emerald-400 hover:text-black transition"
            >
              Start
            </motion.button>

            <motion.button
              whileHover={{ x: 4 }}
              className="text-[#F9FAFB] font-medium flex items-center gap-1"
            >
              Explore →
            </motion.button>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="w-full h-105 bg-emerald-500/5 rounded-xl flex items-center justify-center relative overflow-hidden"
          variants={item}
          whileHover={{ scale: 1.02 }}
        >
          {/* glow */}
          <div className="absolute inset-0 bg-emerald-400/10 blur-3xl" />

          {/* placeholder */}
          <div className="relative z-10 text-emerald-300 text-5xl">
            🖼
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionC;