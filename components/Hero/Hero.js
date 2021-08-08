import { useState, useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import { GLTFLoader } from "three-stdlib";
import { OBJLoader } from "three-stdlib";

const GLTF = ({ url, ...props }) => {
  const gltf = useLoader(GLTFLoader, url);
  const mesh = useRef();
  return <primitive ref={mesh} object={gltf.scene} />;
};

const OBJ = ({ url, ...props }) => {
  const obj = useLoader(OBJLoader, url);
  const mesh = useRef();
  return <primitive ref={mesh} object={obj} />;
};

function Hero() {
  const [rotation, api] = useSpring(() => ({ y: 1 }));

  return (
    <div className="relative flex flex-row px-32 py-12 max-w-screen-2xl mx-auto">
      <div className="flex flex-1 flex-col">
        <div className="text-7xl leading-relaxed font-serif">
          <div>Arcadia Literacy & Learning</div>
          <div className="font-sans">Making Independent Learners</div>
        </div>
      </div>
      <div className="flex-1">
        <Canvas>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.5} position={[0, -1, 3]} />

            <pointLight
              position={[0, 2, 3]}
              intensity={0.8}
              color="teal"
              castShadow
            />
            <animated.mesh
              position={[0, -1, 3]}
              rotation={[0, 0, 0]}
              receiveShadow
            >
              <GLTF url={"./Owl.gltf"} />
            </animated.mesh>
            <mesh
              position={[0, -1, 1]}
              rotation={[0, 0, 0]}
              scale={0.4}
              receiveShadow
            >
              <OBJ url={"./books.obj"} />
            </mesh>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Hero;
