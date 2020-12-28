import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
  meta: any;
}

const FeaturesLayoutTwo: FC<IProps> = ({ theme, data, meta }) => {
  return (
    <div
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <div className="container mx-auto space-y-8 p-8">
        <h2 className="font-bold text-2xl md:text-3xl text-center">
          {meta.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.cards?.map((card: any, index: number) => {
            if (!card.heading && !card.subheading) {
              return false;
            }

            return (
              <div key={index} className="space-y-4">
                <div
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                  className="bg-gray-100 object-contain rounded h-64 w-full bg-center bg-cover bg-no-repeat"
                />
                <p className="font-bold">{card.heading}</p>
                <p>{card.subHeading}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturesLayoutTwo;
