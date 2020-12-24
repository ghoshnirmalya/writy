import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
}

const FeaturesLayoutOne: FC<IProps> = ({ theme, data }) => {
  return (
    <div
      className="border-b border-solid border-gray-300 p-24"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.linkColor,
      }}
    >
      <div className="space-y-24">
        <h2 className="font-bold text-4xl text-center">
          Unsplash is internet’s source of freely usable images.
        </h2>
        <div className="flex">
          <div className="space-y-4">
            <p className="font-bold">Over one million curated photos</p>
            <p>
              We hand-select every photo and accept only the best, so that no
              matter what you need—you’ll find exactly what you’re looking for
              on Unsplash.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-bold">A community of 211,166 photographers</p>
            <p>
              Unsplash is home to a growing community of photographers—from
              hobbyists, professionals, emerging brands and everyone in between.
            </p>
          </div>
          <div className="space-y-4">
            <p className="font-bold">Fuelling your favourite platforms</p>
            <p>
              With partners like BuzzFeed, Squarespace and Trello being powered
              by our API, the Unsplash library is more widely accessible than
              ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesLayoutOne;
