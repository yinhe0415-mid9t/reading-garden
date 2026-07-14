import { getDailyHistory } from "../data.js";

export function renderGarden() {
  var evt = getDailyHistory();
  document.getElementById("view-garden").innerHTML =
    '<svg class="fern-divider" viewBox="0 0 80 20" fill="none" stroke="#B8B0A0" stroke-width="0.7" stroke-linecap="round"><path d="M10 14 Q25 12 40 8 Q55 4 70 6"/><path d="M18 13 Q14 8 22 11"/><path d="M30 10 Q26 5 34 8"/><path d="M42 8 Q38 3 46 6"/><path d="M54 6 Q50 3 58 5"/></svg>' +
    '<div class="specimen-label">' +
    '<svg class=\"seed-icon\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#888\" stroke-width=\"1\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M12 22V6\"/><path d=\"M12 6c-3 0-5 3-5 6s2 4 5 3\"/><path d=\"M12 6c3 0 5 3 5 6s-2 4-5 3\"/></svg>' +
    '<p class="title">Garden</p>' +
    '<p class="subtitle">a seed of history</p>' +
    '</div>' +
    '<p class="event-date">' + evt.date + '</p>' +
    '<p class="event-body"><span class="event-year">' + evt.year + '</span> &middot; ' + evt.event + '</p>' +
    '<div class="event-keywords">' + evt.keywords.map(function(k){return'<span class="event-keyword">'+k+'</span>';}).join("") + '</div>';
}
