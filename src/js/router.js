export function initRouter(onNavigate) {
  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.view;
      navigate(v);
      if (onNavigate) onNavigate(v);
    });
  });
}

export function navigate(viewName) {
  document.querySelectorAll(".view").forEach((el) => el.classList.remove("view--active"));
  const target = document.getElementById("view-" + viewName);
  if (target) target.classList.add("view--active");
  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.classList.toggle("nav-link--active", btn.dataset.view === viewName);
  });
}