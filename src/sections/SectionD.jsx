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

const cardHover = {
  hover: {
    y: -10,
    scale: 1.03,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const stats = [
  { value: "3x", label: "More qualified leads" },
  { value: "87%", label: "Appointments close rate" },
  { value: "50%", label: "Lower cost per booking" },
];

const SectionD = () => {
  return (
    <section className="w-full bg-[#222831] py-24 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.h2
          className="text-[#F9FAFB] text-3xl md:text-4xl lg:text-5xl font-bold max-w-4xl"
          variants={item}
        >
          Real results from real-estate businesses using our system
        </motion.h2>

        {/* Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover="hover"
              className="bg-emerald-500/90 rounded-xl flex flex-col items-center justify-center gap-4 py-14 px-8 text-center shadow-lg shadow-emerald-500/20"
            >
              <motion.span
                className="text-5xl md:text-6xl font-bold text-black"
                variants={cardHover}
              >
                {stat.value}
              </motion.span>

              <p className="text-black/80 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionD;
