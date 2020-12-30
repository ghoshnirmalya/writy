import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
  meta: any;
}

const FeaturesLayoutThree: FC<IProps> = ({ theme, data, meta }) => {
  return (
    <div
      className="text-gray-600 body-font"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <div className="container mx-auto">
        <div className="space-y-4 p-8">
          <h2 className="font-bold text-2xl md:text-3xl text-center">
            {meta.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.cards?.map((card: any, index: number) => {
              if (!card.heading && !card.subheading) {
                return false;
              }

              return (
                <div key={index} className="space-y-4 rounded shadow-lg">
                  <div
                    style={{
                      backgroundImage: `url(${card.image})`,
                    }}
                    className="bg-gray-100 object-contain rounded-t h-64 w-full bg-center bg-cover bg-no-repeat"
                  ></div>
                  <div className="p-4 space-y-4">
                    <p className="font-bold">{card.heading}</p>
                    <p>{card.subHeading}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesLayoutThree;
