import React from "react";

type DividerProps = {
  className?: string;
};

export default function Divider2({ className }: DividerProps) {
  return (
    <div className={`text-center overflow-hidden ${className}`}>
      <div className="w-full h-20 overflow-hidden">
        <svg
          viewBox="0 0 500 100"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="zigzagGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#84745F" />
              <stop offset="40%" stopColor="#FAD29E" />
              <stop offset="100%" stopColor="#84745F" />
            </linearGradient>
          </defs>

          <path
            d="M0,70 Q55,60 100,55 T200,40 T300,30 T400,40 T500, 75"
            className="fill-transparent"
            stroke="url(#zigzagGradient)"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
}
