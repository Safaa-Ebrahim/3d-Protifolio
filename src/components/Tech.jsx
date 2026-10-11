import React, { Suspense, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Decal,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import { SectionWrapper } from "../hoc";
import { technologyGroups } from "../constants";
import { styles } from "../styles";
import CanvasLoader from "./Loader";

const technologies = technologyGroups.flatMap(
  (group) => group.technologies || []
);

const TechnologyBalls = ({ positions }) => {
  const textures = useTexture(technologies.map(({ icon }) => icon));
  const { size, viewport } = useThree();

  return technologies.map((technology, index) => {
    const position = positions[index];
    if (!position) return null;

    return (
      <mesh
        key={technology.name}
        position={[
          (position.x / size.width - 0.5) * viewport.width,
          (0.5 - position.y / size.height) * viewport.height,
          0,
        ]}
        scale={0.31}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1.15}
          map={textures[index]}
          flatShading
        />
      </mesh>
    );
  });
};

const Tech = () => {
  const gridRef = useRef(null);
  const [positions, setPositions] = useState([]);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const updatePositions = () => {
      const gridBounds = grid.getBoundingClientRect();
      const nextPositions = [];

      grid.querySelectorAll("[data-technology-index]").forEach((target) => {
        const bounds = target.getBoundingClientRect();
        const index = Number(target.dataset.technologyIndex);
        nextPositions[index] = {
          x: bounds.left + bounds.width / 2 - gridBounds.left,
          y: bounds.top + bounds.height / 2 - gridBounds.top,
        };
      });

      setPositions(nextPositions);
    };

    updatePositions();
    const observer = new ResizeObserver(updatePositions);
    observer.observe(grid);
    window.addEventListener("resize", updatePositions);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePositions);
    };
  }, []);

  let technologyIndex = 0;

  return (
    <>
      <div className="mb-10 mt-8 flex flex-col gap-2">
        <div>
          <p className={styles.sectionSubText}>My toolkit</p>
          <h2 className={styles.sectionHeadText}>Tech Stack.</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-secondary">
          A focused selection of the technologies I use to build and ship
          full-stack products.
        </p>
      </div>

      <div
        ref={gridRef}
        className="relative grid grid-cols-1 gap-5 lg:grid-cols-2"
      >
        <Canvas
          orthographic
          camera={{ position: [0, 0, 100], zoom: 100 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            pointerEvents: "auto",
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <ambientLight intensity={0.45} />
            <directionalLight position={[0, 0, 10]} intensity={1.1} />
            <TechnologyBalls positions={positions} />
            <OrbitControls enableZoom={false} />
            <Preload all />
          </Suspense>
        </Canvas>

        {technologyGroups.map((group, groupIndex) => (
          <article
            key={group.title}
            className="relative overflow-hidden rounded-2xl border border-white/10 transition-colors duration-200 hover:border-[#915eff]/50"
          >
            <div className="pointer-events-none absolute inset-0 z-0 rounded-2xl bg-[#100d25]/90" />
            <div className="relative z-20 flex items-start justify-between gap-4 px-5 pt-5">
              <div>
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
                <p className="mt-1 max-w-sm text-sm leading-6 text-secondary">
                  {group.description}
                </p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-[#b9a2ff]">
                {String(groupIndex + 1).padStart(2, "0")}
              </span>
            </div>

            {group.technologies ? (
              <div className="relative z-20 grid grid-cols-3 gap-x-1 px-3 pb-5 pt-3 sm:grid-cols-4">
                {group.technologies.map((technology) => {
                  const currentTechnologyIndex = technologyIndex++;

                  return (
                    <div
                      key={technology.name}
                      className="technology-icon-target flex min-h-[108px] flex-col items-center justify-start text-center"
                    >
                      <span
                        data-technology-index={currentTechnologyIndex}
                        className="h-16 w-16"
                        aria-hidden="true"
                      />
                      <span className="mt-2 max-w-full text-xs font-medium leading-tight text-white/90">
                        {technology.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="relative z-20 flex flex-wrap gap-2 px-5 pb-6 pt-5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-[#d6ccff]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
