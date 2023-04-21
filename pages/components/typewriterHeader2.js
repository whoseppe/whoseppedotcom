import Typical from "react-typical";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { animated, useSpring, easings, useSpringRef } from "@react-spring/web";
import ClickButton from "./clickButton";
const TypewriterHeader2 = () => {
  const letterH = useSpringRef();
  const letterI = useSpringRef();
  const letterI2 = useSpringRef();
  const letterM = useSpringRef();
  const letterG = useSpringRef();
  const letterI3 = useSpringRef();
  const letterU = useSpringRef();
  const letterS = useSpringRef();
  const letterE = useSpringRef();
  const letterP = useSpringRef();
  const letterP2 = useSpringRef();
  const letterE2 = useSpringRef();
  const letterI4 = useSpringRef();
  const letterC = useSpringRef();
  const letterR = useSpringRef();
  const letterE3 = useSpringRef();
  const letterA = useSpringRef();
  const letterT = useSpringRef();
  const letterE4 = useSpringRef();
  const letterM2 = useSpringRef();
  const letterO = useSpringRef();
  const letterB = useSpringRef();
  const letterI6 = useSpringRef();
  const letterL = useSpringRef();
  const letterE5 = useSpringRef();
  const letterA2 = useSpringRef();
  const letterN = useSpringRef();
  const letterD = useSpringRef();
  const letterW = useSpringRef();
  const letterE6 = useSpringRef();
  const letterB2 = useSpringRef();
  const letterE7 = useSpringRef();
  const letterX = useSpringRef();
  const letterP3 = useSpringRef();
  const letterE8 = useSpringRef();
  const letterR2 = useSpringRef();
  const letterI5 = useSpringRef();
  const letterE9 = useSpringRef();
  const letterN2 = useSpringRef();
  const letterC2 = useSpringRef();
  const letterE10 = useSpringRef();
  const letterS2 = useSpringRef();

  const topYValue = -150;
  const delayStart = 2000;

  const letterSequenceOne = [
    {
      skew: 8,
      delay: delayStart + delayStart * 0.35,
      space: false,
      letter: "H",
      refId: letterH,
      y: topYValue + 35,
      x: 80,
    },
    {
      skew: -3,
      delay: delayStart + delayStart * 0.3,
      y: topYValue + 25,
      x: 70,
      space: false,
      letter: "i",
      refId: letterI,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.25,
      space: true,
      letter: "i",
      refId: letterI2,
      y: topYValue + 15,
      x: 50,
    },
    {
      skew: -20,
      delay: delayStart + delayStart * 0.15,
      space: false,
      letter: "m",
      refId: letterM,
      y: topYValue,
      x: 23,
    },
    {
      skew: 10,
      delay: delayStart,
      space: true,
      letter: "g",
      refId: letterG,
      y: topYValue,
      x: 1,
    },
    {
      skew: -4,
      delay: delayStart + delayStart * 0.05,
      space: false,
      letter: "i",
      refId: letterI3,
      y: topYValue,
      x: 0,
    },
    {
      skew: 30,
      delay: delayStart + delayStart * 0.075,
      space: false,
      letter: "u",
      refId: letterU,
      y: topYValue,
      x: -2,
    },
    {
      skew: 13,
      delay: delayStart + delayStart * 0.175,
      space: false,
      letter: "s",
      refId: letterS,
      y: topYValue,
      x: -28,
    },
    {
      skew: -5,
      delay: delayStart + delayStart * 0.25,
      space: false,
      letter: "e",
      refId: letterE,
      y: topYValue + 15,
      x: -40,
    },
    {
      skew: -3,
      delay: delayStart + delayStart * 0.3,
      y: topYValue + 15,
      x: -60,
      space: false,
      letter: "p",
      refId: letterP,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.425,
      space: false,
      letter: "p",
      refId: letterP2,
      y: topYValue + 35,
      x: -82,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.425,
      space: false,
      letter: "e",
      refId: letterE2,
      y: topYValue + 35,
      x: -86,
    },
  ];

  const letterSequenceTwo = [
    {
      space: false,
      letter: "i",
      refId: letterI4,
      skew: 5,
      delay: delayStart + delayStart * 0.72,
      y: topYValue + 73,
      x: 140,
    },
    {
      skew: 5,
      delay: delayStart + delayStart * 0.68,
      y: topYValue + 70,
      x: 115,
      space: true,
      letter: "C",
      refId: letterC,
    },
    {
      skew: 5,
      delay: delayStart + delayStart * 0.76,
      y: topYValue + 68,
      x: 87,
      space: false,
      letter: "r",
      refId: letterR,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.68,
      y: topYValue + 64,
      x: 65,
      space: false,
      letter: "e",
      refId: letterE3,
    },
    {
      skew: 3,
      delay: delayStart + delayStart * 0.6,
      y: topYValue + 60,
      x: 40,
      space: false,
      letter: "a",
      refId: letterA,
    },
    {
      skew: 3,
      delay: delayStart + delayStart * 0.55,
      space: false,
      letter: "t",
      refId: letterT,
      y: topYValue + 38,
      x: 18,
    },
    {
      skew: 3,
      delay: delayStart + delayStart * 0.5,
      space: false,
      letter: "e",
      refId: letterE4,
      y: topYValue + 60,
      x: 13,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.45,
      space: true,
      letter: "M",
      refId: letterM2,
      y: topYValue + 40,
      x: 0,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.5,
      space: false,
      letter: "o",
      refId: letterO,
      y: topYValue + 40,
      x: 0,
    },
    {
      skew: -2,
      delay: delayStart + delayStart * 0.5,
      space: false,
      letter: "b",
      refId: letterB,
      y: topYValue + 40,
      x: -5,
    },
    {
      skew: -3,
      delay: delayStart + delayStart * 0.55,
      space: false,
      letter: "i",
      refId: letterI6,
      y: topYValue + 60,
      x: -25,
    },
    {
      skew: -3,
      delay: delayStart + delayStart * 0.6,
      y: topYValue + 60,
      x: -35,
      space: false,
      letter: "l",
      refId: letterL,
    },
    {
      delay: delayStart + delayStart * 0.68,
      y: topYValue + 64,
      x: -48,
      space: false,
      skew: 0,
      letter: "e",
      refId: letterE5,
    },
    {
      skew: -5,
      delay: delayStart + delayStart * 0.76,
      y: topYValue + 68,
      x: -80,
      space: true,
      letter: "a",
      refId: letterA2,
    },
    {
      skew: -5,
      delay: delayStart + delayStart * 0.68,
      y: topYValue,
      x: -95,
      space: false,
      letter: "n",
      refId: letterN,
    },
    {
      space: false,
      letter: "d",
      refId: letterD,
      skew: 5,
      delay: delayStart + delayStart * 0.72,
      y: topYValue,
      x: -125,
    },

    {
      skew: 0,
      delay: delayStart + delayStart * 1.1,
      space: true,
      letter: "w",
      refId: letterW,
      y: topYValue + 20,
      x: 88,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.97,
      space: false,
      letter: "e",
      refId: letterE6,
      y: topYValue + 18,
      x: 78,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.93,
      space: false,
      letter: "b",
      refId: letterB2,
      y: topYValue + 16,
      x: 60,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.9,
      space: true,
      letter: "e",
      refId: letterE7,
      y: topYValue + 11,
      x: 42,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.8,
      y: topYValue + 8,
      x: 10,
      space: false,
      letter: "x",
      refId: letterX,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.8,
      y: topYValue + 4,
      x: 5,
      space: false,
      letter: "p",
      refId: letterP3,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.83,
      y: topYValue + 3,
      x: 1,
      space: false,
      letter: "e",
      refId: letterE8,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.85,
      y: topYValue + 1,
      x: 0,
      space: false,
      letter: "r",
      refId: letterR2,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.88,
      y: topYValue,
      x: 0,
      space: false,
      letter: "i",
      refId: letterI5,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.9,
      y: topYValue,
      x: -21,
      space: false,
      letter: "e",
      refId: letterE9,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 0.94,
      space: false,
      letter: "n",
      refId: letterN2,
      y: topYValue + 13,
      x: -49,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 1.08,
      space: false,
      letter: "c",
      refId: letterC2,
      y: topYValue + 15,
      x: -60,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 1.12,
      space: false,
      letter: "e",
      refId: letterE10,
      y: topYValue + 18,
      x: -79,
    },
    {
      skew: 0,
      delay: delayStart + delayStart * 1.16,
      space: false,
      letter: "s",
      refId: letterS2,
      y: topYValue + 20,
      x: -98,
    },
  ];

  useEffect(() => {
    animateOut();
  }, []);

  const animateOut = () => {
    const sequence = [...letterSequenceOne, ...letterSequenceTwo];
    sequence.forEach((i) => {
      const { refId, x, y, delay, skew } = i;
      refId.start({
        to: [{ x }, { y, opacity: 0, skew }],
        delay,
        config: {
          easing: easings.linear,
        },
      });
    });
  };

  const Letter = ({ letter, refId, space }) => {
    const springs = useSpring({
      ref: refId,
      from: { y: 0, x: 0, opacity: 1, skew: 0 },
    });

    return (
      <animated.p
        className={classNames("text-purple text-2xl uppercase text-center", {
          "ml-2": space,
        })}
        style={{
          ...springs,
        }}
      >
        {letter}
      </animated.p>
    );
  };
  return (
    <>
      <div className="h-28">
        <div className="flex flex-row flex-nowrap items-center justify-center">
          {letterSequenceOne.map((i, index) => (
            <Letter
              key={index + i.letter}
              letter={i.letter}
              refId={i.refId}
              space={i.space}
            />
          ))}
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center w-[310px]">
          {letterSequenceTwo.map((i, index) => (
            <Letter
              key={index + i.letter}
              letter={i.letter}
              refId={i.refId}
              space={i.space}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TypewriterHeader2;
