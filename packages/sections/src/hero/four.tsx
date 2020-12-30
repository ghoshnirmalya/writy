import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
  meta: any;
}

const HeroLayoutFour: FC<IProps> = ({ theme, data, meta }) => {
  return (
    <div
      className="text-gray-600 body-font"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <div className="container mx-auto">
        <div className="text-center space-y-4 p-8">
          <h2 className="title-font text-2xl md:text-3xl font-bold">
            {meta.heading}
          </h2>
          <p className="leading-relaxed">{meta.subHeading}</p>
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
            {data.buttons?.map((button: any, index: number) => {
              if (!button.label) {
                return false;
              }

              return (
                <a
                  key={index}
                  href={button.link}
                  className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg justify-center"
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
      <div className="w-full">
        <div
          style={{
            backgroundImage: `url(${meta.image})`,
          }}
          className="h-96 w-full bg-center bg-cover bg-no-repeat"
        ></div>
      </div>
    </div>
  );
};

export default HeroLayoutFour;
