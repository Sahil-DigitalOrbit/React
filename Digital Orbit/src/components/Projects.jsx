import { Canvas } from "@react-three/fiber";
import Ball from "./models/Ball";
import { projects } from "../constants/projects";
import { SectionWrapper } from "../hoc/SectionWrapper";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="mt-10 sm:p-10 p-2">
      <h2 className="text-5xl font-medium py-6">Projects</h2>
      <div className="flex flex-wrap justify-around">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="  w-48 h-48"
          >
            <Canvas>
              {/* Stable lighting */}
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[5, 10, 5]}
                intensity={1}
                castShadow={true}
              />
              {/* Ball Component */}
              <Ball imgUrl={p.imgUrl} />
            </Canvas>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SectionWrapper(Projects, "projects");
