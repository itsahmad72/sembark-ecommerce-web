import React, { type ReactNode } from "react";

interface HeadingTextProps {
  text: string;
  highlight?: string;
  textStyle?: any;
  side?: ReactNode;
  subText?: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text, textStyle, highlight, side, subText }) => {
  return (
    <div className="heading-wrapper">
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: 'space-between', gap: "10px" }}>
        <h2 style={textStyle} className="heading-title">
          {text} <span className="highlight">{highlight}</span>
        </h2>
        {side && <div className="heading-side">{side}</div>}
      </div>

      {subText && <p className="heading-subtext">{subText}</p>}
    </div>
  );
};

export default HeadingText;
