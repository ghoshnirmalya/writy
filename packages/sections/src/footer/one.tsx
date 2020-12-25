import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
}

const FooterLayoutOne: FC<IProps> = ({ theme, data }) => {
  return (
    <div
      className="py-4 px-24"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.linkColor,
      }}
    >
      <div className="flex justify-end font-semibold">
        <div className="space-x-8">
          {data.links.map((link: any, index: number) => {
            return (
              <a key={index} href={link.link}>
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FooterLayoutOne;
