import React, { useState } from "react";
import classNames from "classnames";

const ClickButton = ({ onButtonClick, showButton }) => {
  const [hideButton, setHideButton] = useState(false);

  const handleClick = () => {
    setHideButton(true);
    onButtonClick();
  };

  return (
    <>
      {!hideButton && (
        <div>
          <div
            className={classNames(
              "transition-opacity duration-1000 opacity-0 h-16",
              {
                "opacity-100": showButton,
              }
            )}
          >
            <button
              disabled={!showButton}
              onClick={() => handleClick()}
              className="border-2 h-16 w-60 bg-green text-blackish"
            >
              Check out my work
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ClickButton;
