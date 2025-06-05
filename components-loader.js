function loadComponent(selector, file) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#upcoming-tasks-container", "upcoming-tasks.html");
  loadComponent("#weekly-summary-container", "weekly-summary.html");
  loadComponent("#team-progress-container", "team-progress.html");
});
