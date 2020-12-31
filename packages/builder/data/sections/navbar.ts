const navbarSectionData = (mode: "light" | "dark") => ({
  meta: {
    type: "navbar",
    layout: "one",
    siteName: "Writy",
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

export default navbarSectionData;
