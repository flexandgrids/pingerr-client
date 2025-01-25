import { ReactNode } from "react";

export const svgIcons: { [key: string]: ReactNode } = {
  aiIcon: (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 304 304"
    >
      <defs>
        <style>{`.cls-1{fill:url(#linear-gradient);}`}</style>
        <linearGradient
          id="linear-gradient"
          x1="373.65"
          y1="552.6"
          x2="221.63"
          y2="289.29"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#d60b52" />
          <stop offset="0.38" stopColor="#e71d73" />
          <stop offset="1" stopColor="#2d2e83" />
        </linearGradient>
      </defs>
      <path
        className="cls-1"
        d="M297.64,269a152,152,0,1,0,152,152A152,152,0,0,0,297.64,269Zm0,253.25A101.25,101.25,0,1,1,398.89,421,101.25,101.25,0,0,1,297.64,522.2Z"
        transform="translate(-145.64 -268.95)"
      />
    </svg>
  ),
};
