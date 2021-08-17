import Link from "next/link";
import { useSpring, a } from "react-spring";
import { useState, useEffect, useRef } from "react";
import { useMeasure } from "react-use";

export default function NavItem({ title, url }) {
  const [underline, { width: elementWidth }] = useMeasure();
  const [hovered, setHovered] = useState(false);

  const underlineStyle = useSpring({
    width: hovered ? `${elementWidth}px` : "0px",
  });

  return (
    <div className="flex flex-col items-center">
      <div className="flex-none" ref={underline}>
        <Link href={url}>
          <a
            href={url}
            className="text-cloud-800 text-xl font-serif tracking-wider font-thin "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {title}
          </a>
        </Link>
      </div>
      <a.div
        className="h-1 bg-brown-500 overflow-hidden"
        style={underlineStyle}
      ></a.div>
    </div>
  );
}
