import {
  OrbitControls,
  Preload,
  Environment,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState, useEffect } from "react";
import CanvasLoader from "./CanvasLoader";
import Booth from "./models/booth";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc/SectionWrapper";

function Contact() {
  return (
    <div className="mt-10 sm:p-10 p-2 flex flex-col">
      <h2 className="text-5xl font-medium py-6">Contact Us</h2>
      <div className="w-full h-auto flex sm:flex-row flex-col p-2 rounded-xl overflow-hidden">
        <motion.div
          initial={{ translateX: "-50%", opacity: 0 }}
          whileInView={{ translateX: "0", opacity: 100 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
          className="h-[10rem] sm:h-auto"
          >
          <BoothCanvas />
        </motion.div>
        <motion.div
          initial={{ translateX: "50%", opacity: 0 }}
          whileInView={{ translateX: "0%", opacity: 100 }}
          transition={{ duration: 0.6, ease: "backInOut" }}
          className="flex-1 bg-[#000714]  rounded-xl p-4"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  );
}

const BoothCanvas = () => (
  <Canvas
    shadows
    frameloop="always"
    camera={{ position: [2, 2, 4], fov: 50 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2.1}
        minPolarAngle={Math.PI / 2.2}
      />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      <Environment preset="night" />
      <Booth gltfLink="/phone_booth/scene.gltf" />
      <Preload all />
    </Suspense>
  </Canvas>
);

const ContactForm = () => {
  let [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleUpdate = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sdsd");
  };

  return (
    <div className="flex flex-col justify-around h-full gap-2 ">
      <p className="text-sm">GET IN TOUCH</p>
      <h3 className="text-4xl font-bold">CONTACT</h3>
      <form onSubmit={handleSubmit} className="flex flex-col h-full gap-3 py-2 z-10">
        <label className="flex flex-col gap-1">
          <span>Your Name</span>
          <input
            className="p-2 rounded-xl bg-[#161131]"
            name="name"
            type="text"
            value={form.name}
            placeholder="what's your name?"
            onChange={handleUpdate}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Your Email</span>
          <input
            className="p-2 rounded-xl bg-[#161131]"
            name="email"
            type="text"
            value={form.email}
            placeholder="what's your email?"
            onChange={handleUpdate}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Your Message</span>
          <textarea
            className="p-2 rounded-xl bg-[#161131]"
            name="message"
            rows={6}
            type="text"
            placeholder="enter your message here!"
            value={form.message}
            onChange={handleUpdate}
          />
        </label>
        <button
          className="w-fit p-2 rounded-xl  bg-[#161131] font-semibold shadow-md shadow-lime-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
