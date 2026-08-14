import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "blue",
  defaultRadius: "sm",
  colors: {
    brand: [
      "#edecff",
      "#d7d5fe",
      "#aca8f5",
      "#7e77ed",
      "#4f46e5",
      "#3e34e3",
      "#3127e2",
      "#231bc9",
      "#1c17b5",
      "#1112a0",
    ],
  },

  headings: {
    fontWeight: "500",
    sizes: {
      h1: { fontSize: "1.625rem" },
      h2: { fontSize: "1.375rem" },
      h3: { fontSize: "1.125rem" },
      h4: { fontSize: "1rem" },
      h5: { fontSize: "0.875rem" },
      h6: { fontSize: "0.75rem" },
    }
  },
  cursorType: "pointer"
});
