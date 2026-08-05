import "@mantine/core/styles.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Routes.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme/theme.ts";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
  </StrictMode>,
)
