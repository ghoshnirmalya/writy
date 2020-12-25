import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
  meta: any;
}

const FeaturesLayoutOne: FC<IProps> = ({ theme, data, meta }) => {
  return (
    <div
      className="border-b border-solid border-gray-300 p-24"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.textColor,
      }}
    >
      <div className="space-y-24">
        <h2 className="font-bold text-4xl text-center">{meta.heading}</h2>
        <div className="flex space-x-16">
          {data.cards.map((card: any, index: number) => {
            if (!card.heading && !card.subheading) {
              return false;
            }

            return (
              <div key={index} className="space-y-4">
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

export default FeaturesLayoutOne;
