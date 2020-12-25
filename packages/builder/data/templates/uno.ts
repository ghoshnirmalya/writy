import Image1 from "public/images/section-placeholders/1.jpg";
import Image2 from "public/images/section-placeholders/2.jpg";
import Image3 from "public/images/section-placeholders/3.jpg";
import Image4 from "public/images/section-placeholders/4.jpg";

const uno = {
  meta: {},
  sections: [
    {
      meta: {
        type: "navbar",
        layout: "one",
      },
      theme: {
        backgroundColor: "#ffffff",
        textColor: "#555555",
      },
      data: {
        links: [
          {
            label: "Home",
            link: "/",
          },
          {
            label: "History",
            link: "/history",
          },
          {
            label: "Join the team",
            link: "/join",
          },
          {
            label: "Press",
            link: "/press",
          },
        ],
      },
    },
    {
      meta: {
        type: "hero",
        layout: "one",
        heading: "Photos for everyone",
        subHeading:
          "Over 2 million free high-resolution images brought to you by the world’s most generous community of photographers.",
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
            label: "Start browsing",
            link: "/start",
            variant: "solid",
          },
          {
            label: "Become a contributor",
            link: "/become",
            variant: "outline",
          },
        ],
      },
    },
    {
      meta: {
        type: "features",
        layout: "one",
        heading: "Unsplash is internet’s source of freely usable images.",
      },
      theme: {
        backgroundColor: "#ffffff",
        textColor: "#555555",
      },
      data: {
        cards: [
          {
            image: Image2,
            heading: "Over one million curated photos",
            subHeading:
              "We hand-select every photo and accept only the best, so that no matter what you need—you’ll find exactly what you’re looking for on Unsplash.",
          },
          {
            image: Image3,
            heading: "A community of 211,166 photographers",
            subHeading:
              "Unsplash is home to a growing community of photographers—from hobbyists, professionals, emerging brands and everyone in between.",
          },
          {
            image: Image4,
            heading: "Fuelling your favourite platforms",
            subHeading:
              "With partners like BuzzFeed, Squarespace and Trello being powered by our API, the Unsplash library is more widely accessible than ever.",
          },
        ],
      },
    },
  ],
};

export default uno;
