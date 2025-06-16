// Store references to form elements
var projectFormEl = $('#project-form');
var projectNameEl = $('#projectName');
var projectTypeEl = $('#projectType');
var projectDueDateEl = $('#projectDueDate');
var projectTableBodyEl = $('#projectTableBody');

// Read projects from localStorage or return empty array
function getProjects() {
  var projects = localStorage.getItem('projects');
  return projects ? JSON.parse(projects) : [];
}

// Save updated projects array to localStorage
function saveProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Handle form submit
projectFormEl.on('submit', function (event) {
  event.preventDefault();

  var name = projectNameEl.val().trim();
  var type = projectTypeEl.val();
  var dueDate = projectDueDateEl.val();

  if (!name || !type || !dueDate) {
    alert("Please fill in all fields.");
    return;
  }

  var newProject = {
    name: name,
    type: type,
    dueDate: dueDate
  };

  var projects = getProjects();
  projects.push(newProject);
  saveProjects(projects);
  renderProjects();

  // Clear form fields
  projectNameEl.val('');
  projectTypeEl.val('');
  projectDueDateEl.val('');

  // Close modal
  var modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
  modal.hide();
});

// Render projects to table
function renderProjects() {
  var projects = getProjects();
  projectTableBodyEl.empty(); // Clear table body

  projects.forEach(function (project) {
    var tr = $('<tr>');

    var due = dayjs(project.dueDate);
    var today = dayjs().startOf('day');

    if (due.isBefore(today)) {
      tr.addClass('table-danger'); // Light red for past due
    } else if (due.isSame(today)) {
      tr.addClass('table-warning'); // Light yellow for today
    }

    var tdName = $('<td>').text(project.name);
    var tdType = $('<td>').text(project.type);
    var tdDate = $('<td>').text(due.format('MMM DD, YYYY'));

    tr.append(tdName, tdType, tdDate);
    projectTableBodyEl.append(tr);
  });
}

// Initial render on page load
$(document).ready(function () {
  renderProjects();
});
