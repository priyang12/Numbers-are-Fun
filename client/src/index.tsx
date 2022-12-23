import React from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider } from "react-query";
import App from "./App";
import { queryClient } from "./Query";
import * as serviceWorkerRegistration from "./serviceWokerRegister";

import "./Styles/Global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.serviceWorkerRegister();
