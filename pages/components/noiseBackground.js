import { animated, useSpring, easings } from "@react-spring/web";

const NoiseBackground = () => {
  const { value } = useSpring({
    from: {
      value: 0,
    },
    to: {
      value: 1,
    },
    loop: true,
    config: {
      duration: 800,
      easing: easings.steps(10, "start"),
    },
  });

  return (
    <animated.div
      style={{
        x: value.to({
          output: [
            "0%",
            "-5%",
            "-15%",
            "7%",
            "-5%",
            "-15%",
            "15%",
            "0%",
            "3%",
            "-10%",
          ],
        }),
        y: value.to({
          output: [
            "0%",
            "-10%",
            "5%",
            "-25%",
            "25%",
            "10%",
            "0%",
            "15%",
            "35%",
            "10%",
          ],
        }),
      }}
      className="noise"
    />
  );
};

export default NoiseBackground;
