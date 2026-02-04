import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Building2, TrendingUp, Settings } from "lucide-react";

const About = () => {
  const MotionNavlink = motion(NavLink);

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

  // section - 3

  const data = [
    {
      title: "Lead Management",
      desc: "Building simple tools to help real-estate businesses manage and track leads efficiently.",
      icon: <Building2 className="w-12 h-12 text-emerald-400" />,
    },
    {
      title: "Growth Strategy",
      desc: "Creating clear and practical growth strategies focused on long-term success.",
      icon: <TrendingUp className="w-12 h-12 text-emerald-400" />,
    },
    {
      title: "Automation Systems",
      desc: "Working on automation solutions to reduce manual work and save time.",
      icon: <Settings className="w-12 h-12 text-emerald-400" />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7 },
    }),
  };
  return (
    <>
      {/* section - 1 */}
      <section className="w-full pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold text-[#F9FAFB] leading-tight"
          >
            About <span className="text-emerald-400">Our Journey</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-6 text-lg text-[#9CA3AF] max-w-3xl mx-auto"
          >
            We are a new startup focused on building simple and practical
            solutions to help real-estate businesses grow using modern
            technology and clear strategies.
          </motion.p>

          {/* Optional small CTA */}
          <motion.button
            className="bg-emerald-500 rounded-md text-black mt-4 font-medium px-6 py-3 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 relative overflow-hidden group"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            data-testid="get-started-btn"
          >
            <span className="relative z-10">Learn More</span>
            <motion.span
              className="absolute inset-0 bg-emerald-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </section>

      {/* section - 2 */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB]">
              Who <span className="text-emerald-400">We Are</span>
            </h2>

            <p className="mt-6 text-[#9CA3AF] leading-relaxed">
              We are a small and growing startup focused on building practical
              solutions for real-estate businesses. Our aim is to simplify
              everyday processes and help businesses grow at their own pace.
            </p>

            <p className="mt-4 text-[#9CA3AF] leading-relaxed">
              As a new team, we believe in learning, improving, and creating
              systems that are easy to use, affordable, and genuinely helpful.
            </p>
          </motion.div>

          {/* RIGHT SIDE (Simple Visual Box – no image for now) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full h-72 rounded-2xl bg-linear-to-br from-emerald-500/10 to-emerald-500/0 border border-emerald-500/20 flex items-center justify-center"
          >
            <span className="text-emerald-400 font-medium">
              Growing Step by Step 🚀
            </span>
          </motion.div>
        </div>
      </section>

      {/* section - 3 */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB]">
              What We’re <span className="text-emerald-400">Working On</span>
            </h2>
            <p className="mt-4 text-[#9CA3AF] max-w-2xl mx-auto">
              We’re focused on building simple and effective solutions that help
              real-estate businesses grow step by step.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {data.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-[#0F172A] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/40 transition-all"
              >
                {/* <img
                src={item.img}
                alt={item.title}
                className="w-20 h-14 mb-6"
              /> */}

                <div className="mb-6">{item.icon}</div>

                <h3 className="text-xl font-semibold text-[#F9FAFB]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[#9CA3AF] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* section - 4 */}
      <section className="w-full py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* LEFT – TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#F9FAFB]">
              Why We <span className="text-emerald-400">Started</span>
            </h2>

            <p className="mt-6 text-[#9CA3AF] leading-relaxed">
              We started this journey after noticing how difficult it can be for
              real-estate businesses to manage leads, follow-ups, and growth
              using outdated or complex systems.
            </p>

            <p className="mt-4 text-[#9CA3AF] leading-relaxed">
              Our goal is to build simple, modern tools that remove unnecessary
              complexity and help businesses focus on what truly matters —
              growth and relationships.
            </p>
          </motion.div>

          {/* RIGHT – VISUAL BOX */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl p-10 bg-linear-to-br from-emerald-500/10 to-emerald-500/0 border border-emerald-500/20"
          >
            <div className="text-[#F9FAFB] text-lg font-medium">
              Simple ideas.
              <br />
              Real problems.
              <br />
              Honest solutions.
            </div>

            {/* subtle glow */}
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* section - 5 */}
      <section className="w-full py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          {/* heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#F9FAFB]"
          >
            Let's build something{" "}
            <span className="text-emerald-400">Together</span>
          </motion.h2>

          {/* text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="mt-6 max-w-2xl mx-auto text-[#9CA3AF]"
          >
            We're just getting started, and we'd love to connect with people who
            believe in simple ideas and steady growth.
          </motion.p>

          {/* buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center gap-6 mt-10"
          >
            <MotionNavlink 
            to={"/contact"}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            data-testid="get-started-btn"
            className="bg-emerald-500 rounded-md text-black font-medium px-7 py-3 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 relative overflow-hidden group">
              Get In Touch
            </MotionNavlink>
            <button className="px-7 py-3 border border-white/20 text-white rounded-lg hover:border-emerald-400 hover:text-emerald-400 transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
