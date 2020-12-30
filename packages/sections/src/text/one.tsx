import React, { FC } from "react";

interface IProps {
  theme: any;
  meta: any;
}

const TextLayoutOne: FC<IProps> = ({ theme, meta }) => {
  return (
    <div
      className="text-gray-600 body-font"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="space-y-4 text-center md:text-left w-full p-8">
          <h2 className="text-2xl md:text-3xl font-bold">{meta.heading}</h2>
          <p className="mb-8 leading-relaxed">{meta.subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default TextLayoutOne;
