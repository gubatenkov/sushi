import { useEffect, useState } from "react";
import { Group, Mesh, MeshStandardMaterial } from "three";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sushi = () => {
  const [time, setTime] = useState(0);
  const model = useGLTF("/sushi.glb");
  const map = useTexture("/4k.jpg");
  map.flipY = false;
  const material = new MeshStandardMaterial({ map });

  // apply texture map on each obj in scene
  useEffect(() => {
    model.scene.traverse((obj) => {
      if (obj.isObject3D) {
        const children = obj as Mesh;
        children.material = material;
      }
    });
  }, []);

  // rotate whole scene around Y axis
  useFrame(() => {
    setTime((prevTime) => (prevTime += 0.001));
    model.scene.rotation.y = time;
  });

  return <primitive object={model.scene} />;
};

export default Sushi;
