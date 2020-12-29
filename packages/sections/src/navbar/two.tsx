import React, { FC } from "react";

interface IProps {
  theme: any;
  data: any;
  meta: any;
}

const NavbarLayoutTwo: FC<IProps> = ({ theme, data, meta }) => {
  return (
    <div
      className="py-4"
      style={{
        backgroundColor: theme?.backgroundColor,
        color: theme?.linkColor,
      }}
    >
      <div className="container mx-auto px-8 flex justify-start font-semibold space-x-8">
        <a href="/">{meta.siteName}</a>
        {data.links?.map((link: any, index: number) => {
          return (
            <a key={index} href={link.link}>
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavbarLayoutTwo;
