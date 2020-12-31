const footerSectionData = (mode: "light" | "dark") => ({
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
        link: "index.html",
      },
      {
        label: "About",
        link: "about.html",
      },
    ],
  },
});

export default footerSectionData;
