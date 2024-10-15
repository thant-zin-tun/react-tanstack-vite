import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import "@mantine/core/styles.css";

import { generateColors } from "@mantine/colors-generator";
import {
  createTheme,
  localStorageColorSchemeManager,
  MantineProvider,
  rem,
} from "@mantine/core";
import App from "./App";

const theme = createTheme({
  colors: {
    primary: generateColors("#14ae17"),
  },
  primaryColor: "primary",
  headings: {
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },
  fontFamily: "Roboto, sans-serif",
});

const colorSchemeManager = localStorageColorSchemeManager({
  key: "phirice-webapp-color-scheme",
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="light"
    >
      <App />
    </MantineProvider>
  </StrictMode>
);
