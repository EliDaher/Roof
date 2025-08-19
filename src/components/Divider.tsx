import React from "react";

type DividerProps = {
  className?: string;
};

export default function Divider({ className }: DividerProps) {
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
            d="M0,45 Q55,50 100,60 T200,55 T300,35 T400,32 T500,50"
            className="fill-transparent"
            stroke="url(#zigzagGradient)"
            strokeWidth="5"
          />
          <path
            d="M0,35 Q55,40 100,50 T200,45 T300,25 T400,22 T500,40"
            className="fill-transparent"
            stroke="url(#zigzagGradient)"
            strokeWidth="5"
          />
        </svg>
      </div>
    </div>
  );
}
