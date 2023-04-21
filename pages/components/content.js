import React, { useEffect } from "react";
import Image from "next/image";
import { animated, useSpring, easings, useSpringRef } from "@react-spring/web";
import arrow from "./arrow.png";
const Content = () => {
  const opacityRef = useSpringRef();

  const opacityAnimationStyle = useSpring({
    ref: opacityRef,
    from: { opacity: 0 },
  });

  useEffect(() => {
    opacityRef.start({
      to: { opacity: 1 },
      config: {
        duration: 1000,
      },
    });
  }, []);

  return (
    <animated.div
      style={{ ...opacityAnimationStyle }}
      className="w-full h-screen z-50 absolute"
    >
      <div className="w-full h-56 z-30">
        <div className="p-6">
          <p className="text-blue uppercase">my stuff</p>
          <div className="space-y-4 mt-3">
            <div className="flex items-center">
              <a
                className="text-white text-2xl underline"
                href="https://www.dovly.com/whydovly/"
                target="_blank"
              >
                dovly
              </a>
              <div className="h-7 w-7">
                <Image
                  alt="arrow"
                  src={arrow}
                  className="ml-2 h-7 w-7"
                  href="https://github.com/whoseppe/spotify-stats"
                  target="_blank"
                />
              </div>
            </div>
            <div className="flex items-center">
              <a
                className="text-white text-2xl underline"
                href="https://github.com/whoseppe/spotify-stats"
                target="_blank"
              >
                spotmytaste
              </a>
              <div className="h-7 w-7">
                <Image
                  alt="arrow"
                  src={arrow}
                  className="ml-2 h-7 w-7"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://github.com/whoseppe/cannabis-app"
                className="text-white text-2xl underline"
                target="_blank"
              >
                dopestdata
              </a>
              <div className="h-7 w-7">
                <Image
                  alt="arrow"
                  src={arrow}
                  className="ml-2 h-7 w-7"
                  placeholder="blur"
                />
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://bootsandcatz.com/"
                target="_blank"
                className="text-white text-2xl underline"
              >
                bootsandcatz
              </a>
              <div className="h-7 w-7">
                <Image
                  alt="arrow"
                  src={arrow}
                  className="ml-2 h-7 w-7"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pl-4 pb-8 flex justify-between items-center absolute bottom-20 sm:bottom-0 z-40">
          <div className="flex items-center">
            <a href="https://github.com/whoseppe" target="_blank">
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
            </a>
            {/* <a href="" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 32 32"
                fill="white"
              >
                <path d="M7.5 5A2.518 2.518 0 005 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.489.489 0 01-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 100 3.437 1.719 1.719 0 000-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5z"></path>
              </svg>
            </a> */}
          </div>
          <div className="pr-4 text-yellow">
            <p className="text-[10px]">Coded by:</p>
            <p className="text-[10px]">Giuseppe Mele</p>
          </div>
        </div>
      </div>
    </animated.div>
  );
};

export default Content;
