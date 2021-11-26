import { Spinning, Floating, StandardEnvironment, Audio, Arrow } from "spacesvr";
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";

export default function Starter() {
  return (
    <StandardEnvironment playerProps={{ pos: [5, 5, 5], controls: {disableGyro: true}}}>
      <ambientLight />
      <group position={[10, 1, 0]}>
        <Arrow dark={true} />
        <directionalLight />
      </group>
      <group position={[10, 1, 0]}>
        <Audio
          url="https://cdn.pixabay.com/download/audio/2021/10/29/audio_dee1428e39.mp3?filename=tense-detective-looped-drone-10054.mp3"
          position={[0, 0, 0]}
          volume={1}
          rollOff={1}
        />
        <Arrow dark={true} />
      </group>
      <group position={[0, 2, 0]}>
        <Floating>
          <Spinning xSpeed={0.2} ySpeed={0.4} zSpeed={0.3}>
            <mesh>
              <torusKnotBufferGeometry args={[1, 0.2]} />
              <meshStandardMaterial color="blue" />
            </mesh>
          </Spinning>
        </Floating>
      </group>
      <CloudySky color="white" />
      <TransparentFloor opacity={0.7} />
    </StandardEnvironment>
  );
}
