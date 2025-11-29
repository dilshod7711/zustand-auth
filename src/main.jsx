import { createRoot } from "react-dom/client";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";

const theme = createTheme({
  components: {
    Container: {
      defaultProps: {
        size: 1320,
      },
    },
  },
});
export const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Notifications position="top-right" />
    </MantineProvider>
  </BrowserRouter>
);
