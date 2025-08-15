# Task-Scheduler-App

Task Scheduler App
Overview
The Task Scheduler App is a web-based application designed to help users organize and manage tasks efficiently. Built with HTML, CSS, and JavaScript, it features a clean and responsive interface powered by Tailwind CSS and Font Awesome icons. Users can add, edit, delete, and mark tasks as complete, set priorities, due dates, and reminders, and sort or filter tasks. The app supports light and dark themes and uses localStorage for persistent data storage.
Features

Task Management: Add, edit, delete, and mark tasks as complete.
Priorities and Due Dates: Assign tasks high, medium, or low priority and set due dates.
Reminders: Set reminders for tasks with customizable time intervals (5 minutes to 1 day).
Sorting and Filtering: Sort tasks by due date, priority, or creation date; filter by all, today, upcoming, or completed tasks.
Responsive Design: Optimized for both desktop and mobile devices using Tailwind CSS.
Dark/Light Mode: Toggle between light and dark themes, with preferences saved in localStorage.
Notifications: Display success messages for actions like adding or updating tasks.
Stats Dashboard: View total, completed, and overdue task counts.

Prerequisites

A modern web browser (e.g., Chrome, Firefox, Edge).
An internet connection to load Tailwind CSS and Font Awesome via CDNs.
A local web server (e.g., Python's http.server, Node.js http-server, or VS Code Live Server) to serve the app and enable localStorage functionality.

Setup Instructions

Clone the Repository:
git clone https://github.com/your-username/task-scheduler-app.git
cd task-scheduler-app


File Structure:Ensure the following files are in the project directory:

index.html: The main HTML file containing the app's structure.
styles.css: Custom CSS styles for task priorities and animations.
script.js: JavaScript logic for task management, UI interactions, and localStorage.


Serve the Application:Since the app uses localStorage and external CDNs, it must be served via a local web server:

Using Python:python -m http.server 8000

Open http://localhost:8000 in your browser.
Using Node.js http-server:npm install -g http-server
http-server

Open http://localhost:8080.
Using VS Code Live Server:Install the "Live Server" extension, right-click index.html, and select "Open with Live Server".


Dependencies:The app uses the following external dependencies, loaded via CDNs in index.html:

Tailwind CSS for styling.
Font Awesome 6.4.0 for icons.



Usage

Add a Task:

Fill in the task form with a title, optional description, due date, priority, and reminder.
Click "Add Task" to save the task. A success notification will appear.


Manage Tasks:

Complete: Click the circle icon next to a task to mark it as complete/incomplete.
Edit: Click the pencil icon to open the edit modal, update details, and save changes.
Delete: Click the trash icon and confirm to delete a task.


Sort and Filter:

Use the "Sort by" dropdown to sort tasks by due date, priority, or creation date.
Use the "Filter by" dropdown to show all, today, upcoming, or completed tasks.


Toggle Theme:

Click the moon/sun icon in the header to switch between light and dark modes.


View Stats:

The stats section displays the total number of tasks, completed tasks, and overdue tasks.


Reminders:

Set a reminder when adding/editing a task. A notification will appear when the reminder time is reached (checked every minute).



File Structure
task-scheduler-app/
├── index.html        # Main HTML file
├── styles.css        # Custom CSS styles
└── script.js         # JavaScript logic

Notes

LocalStorage: Tasks and theme preferences are stored in the browser's localStorage, persisting across page reloads.
Reminders: Reminders are checked every minute and trigger notifications within a 1-minute window of the set reminder time.
CDN Dependency: Ensure an internet connection for Tailwind CSS and Font Awesome. For offline use, download these resources and update index.html with local paths.
Browser Compatibility: Tested on modern browsers. Use a local server to avoid issues with file:// URLs.

Troubleshooting

Blank Page or Missing Styles/Icons:
Check your internet connection for CDN loading.
Verify CDN URLs in index.html.
Serve the app via a local web server.


JavaScript Errors:
Open the browser console (F12 > Console) to check for errors.
Ensure script.js and styles.css are correctly linked.


Tasks Not Saving:
Ensure the app is served via http:// or https://, as localStorage may not work with file://.


Dark Mode Issues:
Confirm the Tailwind config (tailwind.config) is included in script.js.



Contributing
Contributions are welcome! Please:

Fork the repository.
Create a feature branch (git checkout -b feature/your-feature).
Commit changes (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a pull request.

License
This project is licensed under the MIT License.
