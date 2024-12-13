import React, { useState } from "react";
import { useSnapshot } from "valtio";
import state from "../store";
import { details } from "../constant/details";
import { motion } from "framer-motion";
import { slideAnimation } from "../config/motion";
const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <motion.div {...slideAnimation("left")} className="absolute left-full ml-1">
      <div className="bg-slate-300 py-3 px-5 rounded-md bg-opacity-80 flex flex-col gap-4">
        {details.colors.map((color) => (
          <label
            key={color}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              value={color}
              checked={color === snap.color}
              onChange={() => (state.color = color)}
              style={{ display: "none" }}
            />
            <span
              className={`w-[40px] h-[40px] rounded-lg`}
              style={{
                background: color.toLowerCase(),
                border:
                  snap.color === color ? "3px solid black" : "2px solid gray",
                display: "inline-block",
              }}
            />
          </label>
        ))}
      </div>
    </motion.div>
  );
};

export default ColorPicker;
