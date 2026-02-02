import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FeatureCard = ({ icon, title, description, link, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="bg-emerald-500 w-full sm:w-[320px] lg:w-[28vw] flex flex-col justify-between items-start gap-6 p-6 rounded-lg shadow-lg hover:shadow-2xl hover:shadow-emerald-500/20 relative overflow-hidden group cursor-pointer"
      data-testid={`feature-card-${index}`}
    >
      {/* Hover gradient */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.4 }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative z-10"
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="flex flex-col gap-2 relative z-10">
        <motion.h2
          className="text-2xl font-bold text-black"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.15 + 0.3 }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="text-sm text-black/80"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: index * 0.15 + 0.4 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Link */}
      <motion.div
        className="text-black font-medium relative z-10"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <a href={link} className="flex items-center gap-1">
          Learn
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            &gt;
          </motion.span>
        </a>
      </motion.div>

      {/* Shine */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full"
        transition={{ duration: 0.8 }}
      />
    </motion.div>
  );
};

const SectionB = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="#000" fill="none" strokeWidth="1.5">
          <path d="M2.5 12C2.5 7.52 2.5 5.28 3.89 3.89C5.28 2.5 7.52 2.5 12 2.5C16.48 2.5 18.72 2.5 20.11 3.89C21.5 5.28 21.5 7.52 21.5 12C21.5 16.48 21.5 18.72 20.11 20.11C18.72 21.5 16.48 21.5 12 21.5C7.52 21.5 5.28 21.5 3.89 20.11C2.5 18.72 2.5 16.48 2.5 12Z" />
          <path d="M17 14C17 14 13.32 10 12 10C10.68 10 7 14 7 14" />
        </svg>
      ),
      title: "Done-for-you system",
      description: "We handle the work so you book appointments",
      link: "/",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="#000" fill="none" strokeWidth="1.5">
          <path d="M2.5 12C2.5 7.52 2.5 5.28 3.89 3.89C5.28 2.5 7.52 2.5 12 2.5C16.48 2.5 18.72 2.5 20.11 3.89C21.5 5.28 21.5 7.52 21.5 12C21.5 16.48 21.5 18.72 20.11 20.11C18.72 21.5 16.48 21.5 12 21.5C7.52 21.5 5.28 21.5 3.89 20.11C2.5 18.72 2.5 16.48 2.5 12Z" />
          <path d="M17 14C17 14 13.32 10 12 10C10.68 10 7 14 7 14" />
        </svg>
      ),
      title: "No long contracts",
      description: "Cancel anytime without penalties and complications.",
      link: "/",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="34" height="34" stroke="#000" fill="none" strokeWidth="1.5">
          <path d="M2.5 12C2.5 7.52 2.5 5.28 3.89 3.89C5.28 2.5 7.52 2.5 12 2.5C16.48 2.5 18.72 2.5 20.11 3.89C21.5 5.28 21.5 7.52 21.5 12C21.5 16.48 21.5 18.72 20.11 20.11C18.72 21.5 16.48 21.5 12 21.5C7.52 21.5 5.28 21.5 3.89 20.11C2.5 18.72 2.5 16.48 2.5 12Z" />
          <path d="M17 14C17 14 13.32 10 12 10C10.68 10 7 14 7 14" />
        </svg>
      ),
      title: "No wasted ad spend",
      description: "Every dollar works toward qualified leads",
      link: "/",
    },
  ];

  return (
    <section className="min-h-[80vh] py-20 px-5">
      {/* Header */}
      <motion.div
        ref={headerRef}
        className="flex flex-col text-center gap-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">
          Built
        </span>
        <span className="text-[#F9FAFB] text-3xl md:text-4xl lg:text-5xl font-bold">
          Three things that work
        </span>
        <span className="text-[#9CA3AF] text-base md:text-lg">
          Everything you need to grow
        </span>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 lg:gap-10 justify-center">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default SectionB;
