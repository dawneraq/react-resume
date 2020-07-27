export default {
  fonts: {
    body:
      "Karla, system-ui, Helvetica Neue, Segoe UI, Helvetica, Arial, sans-serif",
    // heading: "Times New Roman, serif !important", // TODO Why doesn't setting this work here?
  },
  styles: {
    h1: {
      mt: 4,
    },
  },
  colors: {
    primary: "#843ff3",
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      "&:hover": {
        bg: "text",
      },
    },
  },
}
