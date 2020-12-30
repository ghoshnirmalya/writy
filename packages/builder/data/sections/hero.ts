import { Image1 } from "@writy/sections";

const heroSectionData = (mode: "light" | "dark") => ({
  meta: {
    type: "hero",
    layout: "one",
    heading: "Campaigns to grow your community online",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu mattis leo. Nulla eu orci metus. Integer cursus tincidunt elit at ullamcorper.",
    image: Image1,
  },
  theme: {
    backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
    textColor: mode === "dark" ? "#ffffff" : "#000000",
    buttonBackgroundColor: mode === "dark" ? "#ffffff" : "#000000",
    buttonTextColor: mode === "dark" ? "#000000" : "#ffffff",
  },
  data: {
    buttons: [
      {
        label: "Read more",
        link: "/",
      },
      {
        label: "Contact us",
        link: "/",
      },
    ],
  },
});

export default heroSectionData;
