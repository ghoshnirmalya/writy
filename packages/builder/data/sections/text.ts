const textSectionData = (mode: "light" | "dark") => ({
  meta: {
    type: "text",
    layout: "one",
    heading: "Campaigns to grow your community online",
    subHeading:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu mattis leo. Nulla eu orci metus. Integer cursus tincidunt elit at ullamcorper.",
  },
  theme: {
    backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
    textColor: mode === "dark" ? "#ffffff" : "#000000",
  },
  data: {},
});

export default textSectionData;
