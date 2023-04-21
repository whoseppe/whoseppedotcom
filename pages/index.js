import Image from "next/image";
import Content from "./components/content";
import Ufo from "./ufo.png";
import OverlayText from "./components/overlayText";
import { useState } from "react";
import {
  animated,
  useSpring,
  easings,
  useSpringRef,
  config,
} from "@react-spring/web";
import NoiseBackground from "./components/noiseBackground";
import TypewriterHeader from "./components/typewriterHeader";
import TypewriterHeader2 from "./components/typewriterHeader2";
import ClickButton from "./components/clickButton";

export default function Home() {
  const [active, setActive] = useState(false);
  const [animateOut, setAnimateOut] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [finalHeaderSequence, setFinalHeaderSequence] = useState(false);
  const [headerOne, setHeaderOne] = useState(true);

  const ufoRef = useSpringRef();
  const beamRef = useSpringRef();
  const strobeRef = useSpringRef();
  const shakeRef = useSpringRef();

  const beamAnimationStyle = useSpring({
    ref: beamRef,
    from: { height: 0 },
  });

  const ufoAnimationStyle = useSpring({
    ref: ufoRef,
    from: { y: 0 },
  });

  const strobeAnimationStyle = useSpring({
    ref: strobeRef,
    from: { opacity: 1 },
  });

  const shakeAnimationStyle = useSpring({
    ref: shakeRef,
    from: { x: 0, y: 0 },
  });

  const ufoAnimationIn = () => {
    shakeRef.start({
      to: [
        { x: 0, y: 0 },
        { x: 0.6, y: 0.6 },
        { x: -0.6, y: -0.6 },
      ],
      config: {
        duration: 100,
        easing: easings.easeInCirc,
      },
      loop: true,
    });

    ufoRef.start({
      to: { y: 250 },
      config: {
        mass: 1,
        friction: 5,
        tension: 5,
      },
      onResolve: () => ufoAnimateOut(),
    });

    beamRef.start({
      to: { height: 800 },
      delay: 2000,
      config: {
        mass: 5,
        friction: 120,
        tension: 120,
        easing: easings.easeInCubic,
      },
    });
  };

  const ufoAnimateOut = () => {
    ufoRef.start({
      delay: 500,
      to: { y: 0 },
      config: {
        friction: 5,
        tension: 5,
        duration: 2200,
      },
      onResolve: () => {
        setIntroComplete(true);
        shakeRef.stop();
      },
    });

    beamRef.start({
      to: { height: 0 },
    });
  };

  const endStrobeAnimation = () => {
    setActive(false);
    setAnimateOut(true);
    setHeaderOne(false);
    ufoAnimationIn();
  };

  const handleButtonClick = () => {
    setActive(true);
    setFinalHeaderSequence(true);

    strobeRef.start({
      to: [
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
        { opacity: 0.9 },
        { opacity: 1 },
      ],
      config: {
        duration: 100,
      },
      loop: false,
      onResolve: () => endStrobeAnimation(),
    });
  };

  return (
    <div className="bg-white">
      <animated.div style={{ ...strobeAnimationStyle }} className="bg-blackish">
        <animated.div style={{ ...shakeAnimationStyle }} className="">
          <main className="font-lores min-h-screen w-full relative">
            {!introComplete && (
              <>
                <OverlayText active={active} />
                <div className="absolute w-full -top-[220px] flex items-center justify-center">
                  <div className="max-w-sm">
                    <animated.div
                      style={{
                        ...ufoAnimationStyle,
                      }}
                      className="w-full flex flex-col items-center justify-center relative"
                    >
                      <Image src={Ufo} priority={true} alt="UFO" />
                      <animated.div
                        style={{ ...beamAnimationStyle }}
                        className="w-20 h-screen bg-green ml-[1px] opacity-50 -mt-7 rounded-b-full"
                      />
                    </animated.div>
                  </div>
                </div>

                <div className="absolute w-full h-screen z-20">
                  <div className="w-full h-screen flex flex-col items-center justify-center">
                    <div className="h-28">
                      {headerOne && !active && (
                        <TypewriterHeader setShowButton={setShowButton} />
                      )}
                      {!headerOne && (
                        <TypewriterHeader2
                          setShowButton={setShowButton}
                          animateOutStart={animateOut}
                          finalHeaderSequence={finalHeaderSequence}
                        />
                      )}
                      <div className="flex items-center justify-center w-full">
                        <ClickButton
                          onButtonClick={handleButtonClick}
                          showButton={showButton}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {introComplete && <Content />}

            <NoiseBackground />
          </main>
        </animated.div>
      </animated.div>
    </div>
  );
}
