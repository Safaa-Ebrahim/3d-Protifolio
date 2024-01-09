import React, { useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

function Tech() {
  const [hoveredBall, setHoveredBall] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredBall(index);
  };

  const handleMouseLeave = () => {
    setHoveredBall(null);
  };
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => {
        return (
          <div
            className="w-28 h-28"
            key={technology.name}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <BallCanvas icon={technology.icon} />
            {hoveredBall === index && (
              <div className="text-gray-700 text-center">{technology.name}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default SectionWrapper(Tech, "");
