import { getDailyConcept, getDailyArticle } from "../data.js";

export function renderLeaves(){
  var c = getDailyConcept();
  var a = getDailyArticle();
  document.getElementById("view-leaves").innerHTML =
    '<svg class="fern-divider" viewBox="0 0 80 20" fill="none" stroke="#B8B0A0" stroke-width="0.7" stroke-linecap="round"><path d="M10 14 Q25 12 40 8 Q55 4 70 6"/><path d="M18 13 Q14 8 22 11"/><path d="M30 10 Q26 5 34 8"/><path d="M42 8 Q38 3 46 6"/><path d="M54 6 Q50 3 58 5"/></svg>' +
    '<div class="specimen-label">' +
    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22V10"/><path d="M12 10c-3 1-5 3-5 6s2 4 5 3"/><path d="M12 10c3 1 5 3 5 6s-2 4-5 3"/></svg>' +
    '<p class="title">Leaves</p>' +
    '<p class="subtitle">a thought unfolding</p>' +
    '</div>' +
    '<p class="leaf-title">' + c.name + '</p>' +
    '<p class="leaf-subtitle">' + c.nameCn + '</p>' +
    '<p class="leaf-body">' + c.explain + '</p>' +
    '<p class="leaf-rec">' + c.recs + '</p>' +
    '<div class="leaf-tags">' + c.tags.map(function(t){return'<span class="leaf-tag">'+t+'</span>';}).join("") + '</div>' +
    '<hr class="inner-divider" />' +
    '<div class="specimen-label">' +
    '<p class="title" style="margin-top:0">Seeds</p>' +
    '<p class="subtitle">worth reading</p>' +
    '</div>' +
    '<p class="article-source">' + a.source + '</p>' +
    '<p class="article-title">' + a.title + '</p>' +
    '<div class="leaf-tags">' + a.keywords.map(function(k){return'<span class="leaf-tag">'+k+'</span>';}).join("") + '</div>';
}
