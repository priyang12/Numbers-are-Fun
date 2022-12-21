import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// import * as serviceWorkerRegistration from "./serviceWokerRegister";

import "./Styles/Global.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// serviceWorkerRegistration.register({
//   onUpdate: (registration: any) => {
//     alert("New version available!  Ready to update?");
//     if (registration && registration.waiting) {
//       registration.waiting.postMessage({ type: "SKIP_WAITING" });
//     }
//     window.location.reload();
//   },
// });
