# ProjectTracker
# 📅 Project Tracker

This is a dynamic, responsive Project Tracker web application built using HTML, Bootstrap, jQuery, and Day.js. It allows users to add, view, and delete projects with due dates — making it easy to manage tasks in a visual, color-coded table.

---

## 🚀 Features

- 🕒 **Live Date & Time Display** (updates every second using Day.js)
- 📋 **Bootstrap Form Modal** to add project details:
  - Project Name
  - Project Type (Web App, Mobile App, etc.)
  - Due Date (via native `input[type="date"]`)
- 📌 **Persistent Data** using `localStorage`
- 📊 **Project Table** with:
  - Color-coded rows:
    - 🔴 Red = Past Due
    - 🟡 Yellow = Due Today
  - ❌ Delete button to remove projects from the table and storage
- 💡 Fully responsive layout using Bootstrap 5

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (via Bootstrap 5)
- JavaScript (ES6+)
- jQuery
- Day.js (for date formatting)
- Bootstrap Modal and Table Components

---


---

## 🧪 How to Use

1. Open the app in your browser (`index.html`)
2. Click **"Add Project"** to open the modal form
3. Enter a project name, type, and due date
4. Submit to add it to the table
5. Use the **Delete** button to remove any project
6. Projects are saved to `localStorage` so they'll stay after refreshing the page


## 💡 Future Enhancements

- Edit existing projects
- Search/filter functionality
- Date sorting (upcoming first)
- Notifications for due dates

---

## 👨‍💻 Author

**Darnell Adams II**  
[GitHub Profile](https://github.com/Dadams11)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).


