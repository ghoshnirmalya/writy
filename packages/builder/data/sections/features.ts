import { Image2, Image3, Image4 } from "@writy/sections";

const featuresSectionData = (mode: "light" | "dark") => ({
  meta: {
    type: "features",
    layout: "one",
    heading: "We've developed and shipped over 500 products",
  },
  theme: {
    backgroundColor: mode === "dark" ? "#000000" : "#f2f2f2",
    textColor: mode === "dark" ? "#ffffff" : "#000000",
  },
  data: {
    cards: [
      {
        image: Image2,
        heading: "E-commerce application",
        subHeading:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis commodo enim. Morbi eleifend lacinia massa, id elementum lorem lacinia in.",
      },
      {
        image: Image3,
        heading: "Booking application",
        subHeading:
          "Proin mauris nisl, scelerisque quis ante non, scelerisque tempor dui. In sit amet dui blandit nunc consequat volutpat. In euismod felis sed velit sodales finibus.",
      },
      {
        image: Image4,
        heading: "Learning management system",
        subHeading:
          "In et augue eget ipsum congue suscipit at in urna. Integer non nibh vitae purus maximus bibendum nec eu metus. Nulla facilisi.",
      },
    ],
  },
});

export default featuresSectionData;
