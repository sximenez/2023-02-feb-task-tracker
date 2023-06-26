import * as document from "./controllers.js";

// App routes
const routes = {
  "#/": document.main,
  "#/create": document.create,
  "#/update": document.update,
  "#/delete": document.remove,
};

export function router() {
  window.addEventListener("hashchange", () => {
    const route = window.location.hash;
    const callback = routes[route];
    if (callback) {
      callback();
    } else {
      // handle invalid routes
    }
  });
}
