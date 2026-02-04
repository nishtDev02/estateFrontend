import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

const SectionF = () => {
  return (
    <section className="w-full py-28 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-5 flex flex-col gap-12 items-center text-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div className="flex flex-col gap-4 max-w-3xl" variants={item}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#F9FAFB]">
            Ready to stop wasting money?
          </h2>
          <p className="text-[#9CA3AF] text-base md:text-lg">
            See how our system books qualified appointments for your business
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-5"
          variants={item}
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="bg-emerald-500 text-black font-medium px-8 py-3 rounded-md shadow-lg shadow-emerald-500/20"
          >
            Start
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-400 text-[#F9FAFB] px-8 py-3 rounded-md hover:border-emerald-400 hover:text-emerald-400 transition"
          >
            Learn
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          className="w-full max-w-5xl mt-6 rounded-xl overflow-hidden bg-gray-800"
          variants={item}
          whileHover={{ scale: 1.02 }}
        >
          <div className="h-75 md:h-105 bg-gray-700 flex items-center justify-center text-gray-400 text-5xl">
            🖼
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionF;
