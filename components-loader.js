function loadComponent(selector, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${file}`);
      return res.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
    })
    .catch(err => {
      console.error(err);
      document.querySelector(selector).innerHTML = `<p>Error loading ${file}</p>`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("#upcoming-tasks-container", "upcoming-tasks.html");
  loadComponent("#weekly-summary-container", "weekly-summary.html");
  loadComponent("#team-progress-container", "team-progress.html");
  loadComponent("#calendar-container", "calendar.html");
  loadComponent("#recent-tasks-created-container", "recent-tasks-created.html");
});
