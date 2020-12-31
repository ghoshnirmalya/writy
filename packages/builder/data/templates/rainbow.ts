import { Image1, Image2, Image3 } from "@writy/sections";

const rainbow = (mode: "light" | "dark") => ({
  meta: {
    id: "rainbow",
  },
  sections: [
    {
      meta: {
        type: "navbar",
        layout: "two",
        siteName: "Writy",
      },
      theme: {
        backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
        linkColor: mode === "dark" ? "#ffffff" : "#000000",
      },
      data: {
        links: [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "About us",
            link: "/about-us",
          },
        ],
      },
    },
    {
      meta: {
        type: "features",
        layout: "two",
        heading: "Capture and generate reports to grow your online presence",
      },
      theme: {
        backgroundColor: "#ffffff",
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
        ],
      },
    },
    {
      meta: {
        type: "hero",
        layout: "two",
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
            link: "/read-more",
          },
          {
            label: "Contact us",
            link: "/contact-us",
          },
        ],
      },
    },
    {
      meta: {
        type: "footer",
        layout: "one",
      },
      theme: {
        backgroundColor: mode === "dark" ? "#000000" : "#f2f2f2",
        linkColor: mode === "dark" ? "#ffffff" : "#000000",
      },
      data: {
        links: [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "About us",
            link: "/about-us",
          },
        ],
      },
    },
  ],
});

export default rainbow;
