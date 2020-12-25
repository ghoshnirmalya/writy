import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
  meta: any;
}

const HeroLayoutOne: FC<IProps> = ({ theme, data, meta }) => {
  return (
    <div
      className="p-24 lg:flex lg:items-center"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <div className="w-1/2 sm:w-full md:w-full lg:w-1/2">
        <div className="space-y-4">
          <h2 className="font-bold text-4xl">{meta.heading}</h2>
          <p>{meta.subHeading}</p>
          <div className="space-x-4">
            {data.buttons.map((button: any, index: number) => {
              if (!button.label) {
                return false;
              }

              return (
                <a
                  key={index}
                  href={button.link}
                  className="py-2 px-4 rounded font-bold"
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
      <div className="w-1/2 sm:w-full md:w-full lg:w-1/2">
        <img
          src={meta.image}
          alt={meta.imageAlternativeText}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default HeroLayoutOne;
