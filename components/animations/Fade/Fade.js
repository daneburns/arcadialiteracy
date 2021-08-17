import { useSpring, a, config } from "react-spring";

export default function Fade({ visible, children, spring }) {
  const fade = useSpring({
    opacity: visible ? 1 : 0,
    config: spring ? config[spring] : config.default,
  });

  return <a.div style={fade}>{children}</a.div>;
}
