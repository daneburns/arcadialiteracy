import { useState } from "react";
import { useSpring, a, config } from "react-spring";
import Link from "next/link";

export default function Button({ text, children, href }) {
  const [hovered, hover] = useState(false);
  const colorChange = useSpring({
    backgroundColor: hovered ? "#546576" : "#8e9ba8",
    config: config.gentle,
  });
  return (
    <div>
      <Link href={href}>
        <a href={href}>
          <a.button
            onMouseEnter={() => hover(true)}
            onMouseLeave={() => hover(false)}
            className="bg-blue-500 px-4 py-2 text-white font-serif rounded-lg"
            style={colorChange}
          >
            {children}
          </a.button>
        </a>
      </Link>
    </div>
  );
}
