import React from "react";
import { colors } from "../theme/colors";

const CalendarIcon: React.FC = () => {
  return (
    <svg
      width="124"
      height="149"
      viewBox="0 0 124 149"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_59_15" fill="white">
        <path d="M0 15.9998H100V104H0V15.9998Z" />
      </mask>
      <path
        d="M0 15.9998V-16.0002H-10V15.9998H0ZM100 15.9998H110V-16.0002H100V15.9998ZM100 104V114H110V104H100ZM0 104H-10V114H0V104ZM0 47.9998H100V-16.0002H0V47.9998ZM90 15.9998V104H110V15.9998H90ZM100 93.9998H0V114H100V93.9998ZM10 104V15.9998H-10V104H10Z"
        fill={colors.primary.dark}
        mask="url(#path-1-inside-1_59_15)"
      />
      <path
        d="M58.0908 56.3791C59.9616 55.6063 62.1136 56.0379 63.542 57.4718L117.542 111.685C118.968 113.116 119.392 115.265 118.617 117.131C117.842 118.997 116.02 120.213 114 120.213H85.7705L63.542 142.528C62.1136 143.962 59.9616 144.394 58.0908 143.621C56.2202 142.848 55 141.024 55 139V61.0002L55.0146 60.6232C55.1556 58.7522 56.3371 57.1036 58.0908 56.3791Z"
        fill={colors.primary.dark}
        stroke={colors.primary.main}
        strokeWidth="10"
        strokeLinejoin="round"
      />
      <path
        d="M84 -0.000152588V20.9998"
        stroke={colors.primary.dark}
        strokeWidth="10"
      />
      <path
        d="M16.5 -0.000152588V20.9998"
        stroke={colors.primary.dark}
        strokeWidth="10"
      />
    </svg>
  );
};

export default CalendarIcon;
