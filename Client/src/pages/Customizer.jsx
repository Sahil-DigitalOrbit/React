import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { CustomButton } from "../components";
import { ai, file, swatch, stylishTshirt, logoTshirt } from "../assets";
import ColorPicker from "../components/ColorPicker";
import Prisma from "../components/Prisma";

const Customizer = () => {
  const snap = useSnapshot(state);
  const [color, setColor] = useState();
  const [texture, setTexture] = useState();

  function updateContent(func, value) {
    setColor(false);
    setTexture(false);
    func(value);
  }

  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          ></motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => (state.intro = true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>
          <motion.div
            {...slideAnimation("left")}
            className=" text-teal-50 text-2xl top-0 h-full flex items-center absolute left-0"
          >
            <motion.div className="bg-slate-300 py-5 rounded-md bg-opacity-80">
              <p
                className={`p-2 transition-all ${color && "scale-110"}`}
                onClick={() => updateContent(setColor, !color)}
              >
                <img className="h-12 w-12 object-contain" src={swatch} />
              </p>
              <p
                className={`p-2 transition-all ${texture && "scale-110"}`}
                onClick={() => updateContent(setTexture, !texture)}
              >
                <img className="h-12 w-12 object-contain" src={file} />
              </p>
            </motion.div>
            {color ? <ColorPicker /> : texture ? <Prisma /> : ""}
          </motion.div>

          <motion.div
            {...slideAnimation("up")}
            className=" text-teal-50 text-2xl bottom-0 w-full flex justify-center absolute"
          >
            <motion.div className="bg-slate-300 py-1 px-4 flex rounded-md bg-opacity-80">
              <p
                className={`p-2 transition-all ${snap.isLogoTexture && "scale-110"} ${
                  snap.isLogoTexture && "scale-110"
                }`}
                onClick={() => {
                  state.isLogoTexture = !snap.isLogoTexture;
                }}
              >
                <img className="h-12 w-12 object-contain" src={stylishTshirt} />
              </p>
              <p
                className={`p-2 transition-all ${snap.isFullTexture && "scale-110"}`}
                onClick={() => {
                  state.isFullTexture = !snap.isFullTexture;
                }}
              >
                <img className="h-12 w-12 object-contain" src={logoTshirt} />
              </p>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
