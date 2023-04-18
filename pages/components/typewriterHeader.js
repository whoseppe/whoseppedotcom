import Typical from "react-typical";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { animated, useSpring, easings, useSpringRef } from "@react-spring/web";
const TypewriterHeader = ({ setShowButton }) => {
  const [line1, setLine1] = useState(true);
  const [animationLine2, setAnimationLine2] = useState(false);
  const [line2, setLine2] = useState(false);
  const [letterAnimation, setLetterAnimation] = useState(false);

  const hi = useSpringRef();
  const im = useSpringRef();

  const startLine1 = () => {
    setTimeout(() => {
      setLine1(false);
      startLine2();
    }, 2000);
  };

  const startLine2 = () => {
    setAnimationLine2(true);
    setTimeout(() => {
      setAnimationLine2(false);
      setLine2(true);
      setShowButton(true);
    }, 2000);
  };

  const letterSequence = [{ letter: "H" }, { letter: "yo" }];

  useEffect(() => {
    startLine1();
  }, []);

  const handleClick = () => {
    hi.start({
      to: { y: -140, x: 100 },
      config: {
        mass: 1,
        friction: 5,
        tension: 5,
      },
    });
  };

  const Letter = () => {
    const springs = useSpring({
      ref: hi,
      from: { y: 0, x: 0 },
    });

    return (
      <animated.p
        style={{
          ...springs,
        }}
        // className={classNames(
        //   "transition-all text-purple text-2xl uppercase text-center duration[2000ms] ease-in-out",
        //   { "-translate-y-44": letterAnimation }
        // )}
      >
        Hi im giuseppe.
      </animated.p>
    );
  };
  return (
    <>
      <div className="h-28">
        {line1 ? (
          <Typical
            steps={["Hi im giuseppe.", 1000]}
            wrapper="p"
            className="text-purple text-2xl uppercase text-center"
          />
        ) : (
          <>
            {letterSequence.map((i) => (
              <Letter />
            ))}
          </>
        )}
        {animationLine2 && (
          <Typical
            steps={["i create web and mobile experiences.", 1000]}
            wrapper="p"
            className="text-purple text-2xl uppercase text-center"
          />
        )}

        {line2 && (
          <p className="text-purple text-2xl uppercase text-center">
            i create web and mobile experiences..
          </p>
        )}
      </div>

      <button onClick={() => handleClick()}>Press</button>
    </>
  );
};

export default TypewriterHeader;
