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

const SectionE = () => {
  return (
    <section className="w-full py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* LEFT — VIDEO */}
        <motion.div
          className="w-full h-105 bg-gray-400 flex items-center justify-center relative"
          variants={item}
          whileHover={{ scale: 1.02 }}
        >
          {/* Play Button */}
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
            <div className="w-0 h-0 border-l-14 border-l-black border-y-10 border-y-transparent ml-1" />
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div className="flex flex-col gap-6" variants={container}>
          {/* Stars */}
          <motion.div
            className="flex gap-1 text-emerald-500 text-lg"
            variants={item}
          >
            ★ ★ ★ ★ ★
          </motion.div>

          {/* Quote */}
          <motion.p
            className="text-xl font-semibold text-[#F9FAFB] leading-relaxed max-w-xl"
            variants={item}
          >
            “This system changed how we operate. We stopped chasing
            leads and started closing deals. The appointments we book
            actually convert.”
          </motion.p>

          {/* Author */}
          <motion.div
            className="flex items-center gap-4 text-sm text-[#F9FAFB]"
            variants={item}
          >
            <div>
              <p className="font-semibold">Michael Torres</p>
              <p className="text-gray-600">
                Broker, Torres Realty
              </p>
            </div>

            <div className="h-6 w-px bg-gray-300" />

            <p className="font-medium">Webflow</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionE;
