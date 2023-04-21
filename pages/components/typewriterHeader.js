import Typical from "react-typical";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { animated, useSpring, easings, useSpringRef } from "@react-spring/web";
import ClickButton from "./clickButton";
const TypewriterHeader = ({ setShowButton }) => {
  const [line1, setLine1] = useState(true);
  const [animationLine2, setAnimationLine2] = useState(false);
  const [line2, setLine2] = useState(false);

  const startLine1 = () => {
    setTimeout(() => {
      setLine1(false);
      startLine2();
    }, 2800);
  };

  const startLine2 = () => {
    setAnimationLine2(true);
    setTimeout(() => {
      setAnimationLine2(false);
      setLine2(true);
      setShowButton(true);
    }, 2800);
  };

  useEffect(() => {
    startLine1();
  }, []);

  return (
    <>
      <div className="h-28">
        {line1 ? (
          <Typical
            steps={["Hi im giuseppe", 1000]}
            wrapper="p"
            className="text-purple text-2xl uppercase text-center"
          />
        ) : (
          <>
            <div className="flex flex-row flex-nowrap items-center justify-center">
              <p className="text-purple text-2xl uppercase text-center">
                Hi im giuseppe
              </p>
            </div>
          </>
        )}
        {animationLine2 && (
          <div className="w-[310px]">
            <Typical
              steps={["i create mobile and web experiences.", 1000]}
              wrapper="p"
              className="text-purple text-2xl uppercase text-center"
            />
          </div>
        )}

        {line2 && (
          <div className="flex flex-row flex-wrap items-center justify-center w-[310px]">
            <p className="text-purple text-2xl uppercase text-center">
              i create mobile and web experiences.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TypewriterHeader;
