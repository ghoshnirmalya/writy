import { Image1 } from "@writy/sections";

const heroSectionData = (mode: "light" | "dark") => ({
  meta: {
    type: "hero",
    layout: "one",
    heading: "Welcome to our website",
    subHeading:
      "Building products is hard. We've been building applications for over two decades. Let us help you.",
    image: Image1,
  },
  theme: {
    backgroundColor: mode === "dark" ? "#000000" : "#f2f2f2",
    textColor: mode === "dark" ? "#ffffff" : "#000000",
    buttonBackgroundColor: mode === "dark" ? "#ffffff" : "#000000",
    buttonTextColor: mode === "dark" ? "#000000" : "#ffffff",
  },
  data: {
    buttons: [
      {
        label: "Read more",
        link: "/read-more",
      },
      {
        label: "Contact us",
        link: "/contact-us",
      },
    ],
  },
});

export default heroSectionData;
