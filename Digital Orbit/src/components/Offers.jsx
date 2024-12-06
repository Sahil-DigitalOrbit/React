import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { features } from "../constants/strategies";
import { SectionWrapper } from "../hoc/SectionWrapper";

function Offers() {
  return (
    <div className="mt-10 sm:p-10 p-2">
      <h2 className="text-5xl font-medium my-6">Why Choose Us</h2>
      <div className="bg-[#000714] py-12 opacity-70 sm:flex block">
        <div className="flex flex-col justify-center p-5 flex-1">
          <motion.h3  initial={{opacity:0}} whileInView={{opacity:100}} transition={{ease:"easeInOut", duration:0.7}} className="text-3xl font-medium my-3">What We Offer</motion.h3>
          <motion.div  initial={{opacity:0}} whileInView={{opacity:100}} transition={{ease:"easeInOut", duration:0.9}} className="my-2">
            Digital Orbit is the preferred partner for numerous global
            enterprises, SMEs, and tech innovators. We enhance business value
            through bespoke software development, product design, quality
            assurance, and consultancy services.
          </motion.div>
          <motion.div  initial={{opacity:0}} whileInView={{opacity:100}} transition={{ease:"easeInOut", duration:1.5}} className="font-semibold">
            We can help to maintain and modernize your software and solve
            various issues a business may face in their journey of digital path.
          </motion.div>
        </div>
        <div className="flex flex-1 flex-wrap items-center">
          {features.map((x, idx) => (
            <Tilt className="w-full h-1/4 " key={idx}>
              <motion.div
                initial={{ scale: 0, rotate: 300 }}
                whileInView={{ scale: 1, rotate: 360 }}
                // animate={{}}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              // viewport={{once:true}}
                className="h-full gradient-border sm:m-0 my-2 "
              >
                <div className="p-8 flex justify-around items-center h-full bg-[#000714] rounded-xl">
                  <div className="text-2xl w-1/3">{x.title}</div>
                  <div className="w-4/12">{x.disclaimer}</div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}
export default SectionWrapper(Offers, "company");
