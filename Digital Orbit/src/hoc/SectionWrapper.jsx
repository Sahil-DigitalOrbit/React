import { motion } from "framer-motion";
import React from "react";

export const SectionWrapper = ( Component, idName ) =>
  function hoc() {
    return (
      <motion.section
      // initial={{translateZ:4}}
      // whileInView={{translateZ:1}}
      viewport={{ amount: 0.3,once:true }}
      
      >
        <span id={idName}></span>
        <Component />
      </motion.section>
    );
  };
