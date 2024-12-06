import React from "react";
import { services } from "../constants/services";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";
import { SectionWrapper } from "../hoc/SectionWrapper";

function Services() {
  return (
    <div className=" sm:mt-52 mt-20 sm:p-10 p-2">
      <h2 className="text-5xl font-medium py-6">Services</h2>
      <div className="flex flex-wrap justify-center">
        {services.map((x, idx) => (
          <Tilt className="sm:w-1/4 w-full min-h-52 mx-4 my-5" key={idx}>
            <motion.div
              initial={{ scale: 0, rotate: 300}}
              whileInView={{ scale: 1, rotate: 360}}
              // animate={{}}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              // viewport={{once:true}}
              className="h-full gradient-border"
            >
              <div className="p-8 flex justify-around flex-col items-center h-full bg-[#000714] rounded-xl">
                <div className="text-3xl">
                  <FontAwesomeIcon icon={faMeteor} />
                </div>
                <div>{x.title}</div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}
export default SectionWrapper(Services, "services");
