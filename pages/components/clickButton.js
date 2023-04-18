import classNames from "classnames";

const ClickButton = ({ handleClick, showButton }) => {
  return (
    <div
      className={classNames("transition-opacity duration-1000 opacity-0", {
        "opacity-100": showButton,
      })}
    >
      <button
        onClick={() => handleClick()}
        className="border-2 p-4  border-white text-white"
      >
        Check out my work
      </button>
    </div>
  );
};

export default ClickButton;
