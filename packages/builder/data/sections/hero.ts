import { Image1 } from "@writy/sections";

const heroSectionData = {
  meta: {
    type: "hero",
    layout: "one",
    heading: "Welcome to our website",
    subHeading:
      "Building products is hard. We've been building applications for over two decades. Let us help you.",
    image: Image1,
  },
  theme: {
    backgroundColor: "#f2f2f2",
    textColor: "#555555",
    buttonBackgroundColor: "#555555",
    buttonTextColor: "#ffffff",
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
};

export default heroSectionData;
