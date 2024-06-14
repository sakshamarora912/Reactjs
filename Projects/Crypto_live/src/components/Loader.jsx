import React from "react";
import { motion } from "framer-motion";

const loadingContainer = {width: "10rem",height: "5rem",display: "flex",justifyContent: "space-around"};
const loadingCircle = {display: "block",width: "2rem",height: "2rem",backgroundColor: "#3A36DB",borderRadius: "100%"};

const loadingContainerVariants = {
  start: {
    transition: {staggerChildren: .1}
  },
  end: {
    transition: {staggerChildren: .1},
  },
};

const loadingCircleVariants = {
  start: {y: "0%"},
  end: {y: "150%",}
};
const loadingCircleTransition = {duration : 0.4,yoyo : Infinity,ease: 'easeInOut'}

const Loader = () => {
  return (
      <div style={{display:"flex",justifyContent:"center", alignContent:"center",width:"100%",margin:"15em 0"}}>
        <motion.div style={loadingContainer} variants={loadingContainerVariants} initial="start"animate="end">
          <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
          <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
          <motion.span style={loadingCircle} variants={loadingCircleVariants} transition={loadingCircleTransition}></motion.span>
        </motion.div>
      </div>
  );
};


export default Loader