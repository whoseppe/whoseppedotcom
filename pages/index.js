import Image from "next/image";
import { Inter } from "next/font/google";
import arrow from "./arrow.png";
import Ufo from "./ufo.png";
import { useEffect, useRef, useState } from "react";
import Beam from "./beam.png";

import classNames from "classnames";
import { animated, useSpring, easings, useSpringRef } from "@react-spring/web";
import NoiseBackground from "./components/noiseBackground";
import TypewriterHeader from "./components/typewriterHeader";
import ClickButton from "./components/clickButton";

export default function Home() {
  const [active, setActive] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [beam, setBeam] = useState(false);
  const [hideText, setHideText] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [animationBegin, setAnimationBegin] = useState(false);

  const api = useSpringRef();

  const springs = useSpring({
    ref: api,
    from: { y: 0 },
  });

  const handleClick = () => {
    setAnimationBegin(true);
    beamAnimation();

    api.start({
      to: [{ y: 250 }, { y: 0 }],
      config: {
        mass: 1,
        friction: 5,
        tension: 5,
      },
    });
  };

  const beamAnimation = () => {
    setTimeout(() => {
      setBeam(true);
      setHideText(true);

      setTimeout(() => {
        setBeam(false);

        setTimeout(() => {
          setIntroComplete(true);
        }, 1800);
      }, 1500);
    }, 2000);
  };

  return (
    <>
      <main className="font-lores min-h-screen w-full relative">
        {/* <div className="absolute w-full -top-[220px] flex items-center justify-center">
          <div className="max-w-sm">
            <animated.div
              style={{
                ...springs,
              }}
              className="w-full flex flex-col items-center justify-center"
            >
              <Image src={Ufo} />
              <Image
                src={Beam}
                className={classNames(
                  "-mt-[20px] transition-opacity opacity-0 duration-[2000ms] ease-in translate-",
                  {
                    "opacity-50": beam,
                  }
                )}
              />
            </animated.div>
          </div>
        </div>

        <div className="absolute w-full h-56 z-30">
          <div
            className={classNames(
              "p-6 transition-opacity delay-1000 duration-[2000ms] opacity-0",
              {
                "opacity-100": introComplete,
              }
            )}
          >
            <p className="text-blue uppercase">my stuff</p>
            <div className="space-y-4 mt-3">
              <div className="flex items-center">
                <p className="text-white text-2xl underline">dovly</p>
                <Image src={arrow} className="ml-2 h-7 w-7" />
              </div>
              <div className="flex items-center">
                <p className="text-white text-2xl underline">spotmytaste</p>
                <Image src={arrow} className="ml-2 h-7 w-7" />
              </div>
              <div className="flex items-center">
                <p className="text-white text-2xl underline">bootsandcatz</p>
                <Image src={arrow} className="ml-2 h-7 w-7" />
              </div>
              <div className="flex items-center">
                <a
                  href="www.google.com"
                  className="text-white text-2xl underline"
                >
                  dopestdata
                </a>
                <Image src={arrow} className="ml-2 h-7 w-7" />
              </div>
            </div>
          </div>
        </div> */}

        <div className="absolute w-full h-screen z-20">
          <div
            className={classNames(
              "z-50 transition-all duration-[2000ms] ease-in",
              {
                "opacity-0 -translate-y-10 skew-y-6": hideText,
              }
            )}
          >
            <div className="w-full h-screen flex flex-col items-center justify-center">
              <div className="h-28">
                <TypewriterHeader setShowButton={setShowButton} />
              </div>
              <div
                className={classNames(
                  "transition-opacity duration-1000 opacity-0 h-16",
                  {
                    "opacity-100": showButton,
                  }
                )}
              >
                <button
                  onClick={() => handleClick()}
                  className={classNames("border-2 h-16 w-60", {
                    "bg-green text-blackish": !animationBegin,
                    "border-green bg-transparent text-green": animationBegin,
                  })}
                >
                  {!animationBegin ? "Check out my work" : "ur being abducted"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <div
          className={classNames(
            "transition-opacity duration-[2000ms] opacity-0 delay-1000",
            {
              "opacity-100": introComplete,
            }
          )}
        >
          <div className="w-full pl-4 pb-8 flex justify-between items-center absolute bottom-20 sm:bottom-0 z-40">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                fillRule="evenodd"
                viewBox="0 0 32 32"
                fill="white"
              >
                <path d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 32 32"
                fill="white"
              >
                <path d="M7.5 5A2.518 2.518 0 005 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.489.489 0 01-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 100 3.437 1.719 1.719 0 000-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z"></path>
              </svg>
            </div>
            <div className="pr-4 text-yellow">
              <p className="text-[10px]">Coded by:</p>
              <p className="text-[10px]">Giuseppe Mele 👽</p>
            </div>
          </div>
        </div>
        <NoiseBackground /> */}
      </main>
    </>
  );
}
