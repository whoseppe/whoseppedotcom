import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypewriterHeader = ({ setShowButton }) => {
  const headerOneRef = useRef(null);
  const headerTwoRef = useRef(null);

  useEffect(() => {
    const headerOne = new Typed(headerOneRef.current, {
      strings: ["<p>Hi im giuseppe</p>"],
      typeSpeed: 60,
      startDelay: 750,
      showCursor: false,
    });

    const headerTwo = new Typed(headerTwoRef.current, {
      strings: ["<p>I create mobile and web experiences</p>"],
      typeSpeed: 55,
      startDelay: 4000,
      showCursor: false,
      onComplete: () => setShowButton(true),
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      headerOne.destroy();
      headerTwo.destroy();
    };
  }, []);

  return (
    <>
      <div className="h-28">
        <span
          ref={headerOneRef}
          className="text-purple text-2xl uppercase text-center"
        />

        <div className="w-[310px]">
          <span
            ref={headerTwoRef}
            className="text-purple text-2xl uppercase text-center"
          />
        </div>
      </div>
    </>
  );
};

export default TypewriterHeader;
