/* eslint-disable no-restricted-globals */

import { clientsClaim } from "workbox-core";
import { ExpirationPlugin } from "workbox-expiration";
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

clientsClaim();

precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp("/[^/?]+\\.[^/]+$");
registerRoute(({ request, url }) => {
  // If this isn't a navigation, skip.
  if (request.mode !== "navigate") {
    return false;
  } // If this is a URL that starts with /_, skip.

  if (url.pathname.startsWith("/_")) {
    return false;
  } // If this looks like a URL for a resource, because it contains // a file extension, skip.

  if (url.pathname.match(fileExtensionRegexp)) {
    return false;
  } // Return true to signal that we want to use the handler.

  return true;
}, createHandlerBoundToURL(process.env.PUBLIC_URL + "/index.html"));

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    (url.origin === self.location.origin && url.pathname.endsWith(".png")) ||
    url.pathname.endsWith(".webp") ||
    url.pathname.endsWith(".svg"),
  new StaleWhileRevalidate({
    cacheName: "images",
    plugins: [
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
