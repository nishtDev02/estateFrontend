import { motion } from "framer-motion";

const SectionA = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center text-center px-4">
      <motion.div
        className="max-w-5xl mx-auto py-20 flex flex-col gap-6 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Heading */}
        <motion.h1
          className="text-[#F9FAFB] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          variants={itemVariants}
        >
          Stop wasting money on{" "}
          <motion.span
            className="text-emerald-400 inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            dead leads
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-[#9CA3AF] text-base md:text-lg max-w-3xl"
          variants={itemVariants}
        >
          Our system brings real customers to your door and books qualified
          appointments. No contacts, no guessing. Just results that matter.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mt-6"
          variants={itemVariants}
        >
          <motion.button
            className="bg-emerald-500 rounded-md text-black font-medium px-6 py-3 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 relative overflow-hidden group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            data-testid="get-started-btn"
          >
            <span className="relative z-10">Get Started</span>
            <motion.span
              className="absolute inset-0 bg-emerald-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            className="text-gray-200 rounded-md border border-gray-500 px-6 py-3 relative overflow-hidden group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            data-testid="learn-more-btn"
          >
            <span className="relative z-10 group-hover:text-emerald-400 transition-colors duration-300">
              Learn more
            </span>
            <motion.span
              className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>

        {/* Floating background elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-emerald-400/5 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], scale: [1, 1.2, 1] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default SectionA;
