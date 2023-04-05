import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Sushi from "./components/Sushi";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Canvas camera={{ position: [5, 7, 7], fov: 45 }}>
        <ambientLight intensity={1} />
        <Sushi />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;
