import Typography from "typography"

const typography = new Typography({
  googleFonts: [
    {
      name: "Rubik",
      styles: ["700"],
    },
    {
      name: "Karla",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
  headerFontFamily: [
    "Rubik",
    "system-ui",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  // bodyFontFamily: ["Karla", "sans-serif"], // TODO Why doesn't setting this work here?
})

export default typography
