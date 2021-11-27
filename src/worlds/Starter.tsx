import { Spinning, Floating, StandardEnvironment, Audio, Arrow } from "spacesvr";
import { Suspense } from "react";
import Phone from "../phone.js"
import TransparentFloor from "../ideas/TransparentFloor";
import CloudySky from "../ideas/CloudySky";

export default function Starter() {
  return (
    <StandardEnvironment playerProps={{ pos: [0, 20, 20], controls: {disableGyro: true}}}>
      <ambientLight />
      <group position={[10, 1, 0]}>
        <Arrow dark={true} />
        <directionalLight />
      </group>
      <group position={[10, 1, 0]}>
        <Audio
          url="https://cdn.pixabay.com/download/audio/2021/11/23/audio_b4dc76f582.mp3?filename=time-to-relax-11152.mp3"
          position={[0, 0, 0]}
          volume={1}
          rollOff={1}
        />
        <Arrow dark={true} />
      </group>
      <group position={[0, 3, 0]}>
          <Suspense fallback={null}>
            <Phone
              offsetAngle={0}
              offsetVertical={0}
              src="/create.mp4"
            />
          </Suspense>
      </group>
      <CloudySky color="white" />
      <TransparentFloor opacity={0.7} />
    </StandardEnvironment>
  );
}
