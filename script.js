// Reference DOM elements
var projectFormEl = $('#project-form');
var projectNameEl = $('#projectName');
var projectTypeEl = $('#projectType');
var projectDueDateEl = $('#projectDueDate');
var projectTableBodyEl = $('#projectTableBody');

// Get projects from localStorage or return empty array
function getProjects() {
  var projects = localStorage.getItem('projects');
  return projects ? JSON.parse(projects) : [];
}

// Save projects to localStorage
function saveProjects(projects) {
  localStorage.setItem('projects', JSON.stringify(projects));
}

// Render projects in the table
function renderProjects() {
  var projects = getProjects();
  projectTableBodyEl.empty();

  projects.forEach(function (project, index) {
    var tr = $('<tr>').attr('data-index', index);

    var due = dayjs(project.dueDate);
    var today = dayjs().startOf('day');

    if (due.isBefore(today)) {
      tr.addClass('table-danger'); // Light red
    } else if (due.isSame(today)) {
      tr.addClass('table-warning'); // Light yellow
    }

    var tdName = $('<td>').text(project.name);
    var tdType = $('<td>').text(project.type);
    var tdDate = $('<td>').text(due.format('MMM DD, YYYY'));

    var deleteBtn = $('<button>')
      .addClass('btn btn-sm btn-danger delete-project-btn')
      .text('Delete');

    var tdDelete = $('<td>').append(deleteBtn);

    tr.append(tdName, tdType, tdDate, tdDelete);
    projectTableBodyEl.append(tr);
  });
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

  // Clear form
  projectNameEl.val('');
  projectTypeEl.val('');
  projectDueDateEl.val('');

  // Close modal
  var modal = bootstrap.Modal.getInstance(document.getElementById('projectModal'));
  modal.hide();
});

// Handle delete button click using event delegation
projectTableBodyEl.on('click', '.delete-project-btn', function () {
  var index = $(this).closest('tr').attr('data-index');
  var projects = getProjects();

  projects.splice(index, 1); // Remove project at index
  saveProjects(projects);
  renderProjects(); // Refresh table
});

// Initial render on page load
$(document).ready(function () {
  renderProjects();
});
