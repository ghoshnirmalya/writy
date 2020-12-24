import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
}

const HeroLayoutOne: FC<IProps> = ({ theme, data }) => {
  return (
    <div
      className="border-b border-solid border-gray-300 p-24"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.linkColor,
      }}
    >
      <div className="space-y-4">
        <h2 className="font-bold text-4xl">Photos for everyone</h2>
        <p>
          Over 2 million free high-resolution images brought to you by the
          world’s most generous community of photographers.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded font-bold">
            Start browsing
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroLayoutOne;
