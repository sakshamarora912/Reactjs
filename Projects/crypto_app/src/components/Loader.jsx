import React from "react";
import { motion } from "framer-motion";

// Styles for the loading container and circles
const loadingContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  width: "10rem",
  height: "5rem",
};

const loadingCircle = {
  width: "2rem",
  height: "2rem",
  backgroundColor: "#3A36DB",
  borderRadius: "50%",
};

// Animation variants
const loadingContainerVariants = {
  start: { transition: { staggerChildren: 0.1 } },
  end: { transition: { staggerChildren: 0.1 } },
};

const loadingCircleVariants = {
  start: { y: "0%" },
  end: { y: "100%" },
};

const loadingCircleTransition = {
  duration: 0.6,
  yoyo: Infinity,
  ease: "easeInOut",
};

const Loader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh" }}>
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
      </motion.div>
    </div>
  );
};

export default Loader;
