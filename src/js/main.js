import { initRouter } from "./router.js";
import { renderGarden } from "./views/garden.js";
import { renderSeasons } from "./views/seasons.js";
import { renderLeaves } from "./views/leaves.js";

const RENDER = { garden: renderGarden, seasons: renderSeasons, leaves: renderLeaves };
var rendered = {};

document.addEventListener("DOMContentLoaded", () => {
  var now = new Date();
  document.getElementById("header-date").textContent =
    now.toLocaleDateString("zh-CN", { year: "numeric", month: "long", day: "numeric", weekday: "long" });

  renderGarden();
  rendered.garden = true;

  initRouter((v) => {
    if (!rendered[v]) {
      var fn = RENDER[v];
      if (fn) fn();
      rendered[v] = true;
    }
  });
});