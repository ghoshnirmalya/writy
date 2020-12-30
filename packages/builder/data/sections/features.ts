import { Image2, Image3, Image4 } from "@writy/sections";

const featuresSectionData = (mode: "light" | "dark") => ({
  meta: {
    type: "features",
    layout: "one",
    heading: "Capture and generate reports to grow your online presence",
  },
  theme: {
    backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
    textColor: mode === "dark" ? "#ffffff" : "#000000",
  },
  data: {
    cards: [
      {
        image: Image2,
        heading: "Capture reports",
        subHeading:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis commodo enim. Morbi eleifend lacinia massa, id elementum lorem lacinia in.",
      },
      {
        image: Image3,
        heading: "Analyze your online presence",
        subHeading:
          "Proin mauris nisl, scelerisque quis ante non, scelerisque tempor dui. In sit amet dui blandit nunc consequat volutpat. In euismod felis sed velit sodales finibus.",
      },
      {
        image: Image4,
        heading: "Increase your profits",
        subHeading:
          "In et augue eget ipsum congue suscipit at in urna. Integer non nibh vitae purus maximus bibendum nec eu metus. Nulla facilisi.",
      },
    ],
  },
});

export default featuresSectionData;
