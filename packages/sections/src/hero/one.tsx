import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
  meta: any;
}

const HeroLayoutOne: FC<IProps> = ({ theme, data, meta }) => {
  return (
    <div
      className="text-gray-600 body-font"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div
            style={{
              backgroundImage: `url(${meta.image})`,
            }}
            className="h-64 w-full bg-center bg-cover bg-no-repeat"
          />
        </div>
        <div className="space-y-4 text-center md:text-left w-full md:w-1/2 p-8">
          <h1 className="title-font text-2xl md:text-4xl font-bold">
            {meta.heading}
          </h1>
          <p className="mb-8 leading-relaxed">{meta.subHeading}</p>
          <div className="flex justify-center md:justify-start space-x-4">
            {data.buttons.map((button: any, index: number) => {
              if (!button.label) {
                return false;
              }

              return (
                <a
                  key={index}
                  href={button.link}
                  className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg"
                  style={{
                    backgroundColor: theme?.buttonBackgroundColor,
                    color: theme?.buttonTextColor,
                  }}
                >
                  {button.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroLayoutOne;
