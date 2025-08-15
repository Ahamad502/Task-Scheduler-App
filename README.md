# 📋 Task Scheduler App

A modern, responsive task management application built with vanilla JavaScript, HTML5, and CSS3. Features a beautiful dark/light theme toggle, priority-based task organization, smart reminders, and intuitive task management capabilities.

![Task Scheduler App](https://img.shields.io/badge/Task-Scheduler%20App-blue?style=for-the-badge&logo=check-square)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

### 🎯 **Core Task Management**
- **Task Creation** - Add tasks with title, description, due date, and priority
- **Priority Levels** - High, Medium, and Low priority with color-coded indicators
- **Due Date Tracking** - Set specific due dates and times for tasks
- **Task Completion** - Mark tasks as complete with visual feedback
- **Task Editing** - Modify existing tasks with an intuitive modal interface
- **Task Deletion** - Remove tasks with confirmation prompts

### 🔔 **Smart Reminders & Notifications**
- **Customizable Reminders** - Set reminders 5 minutes to 1 day before due date
- **Real-time Notifications** - Browser notifications for upcoming deadlines
- **Overdue Detection** - Automatic identification and highlighting of overdue tasks
- **Reminder History** - Track which reminders have been shown

### 🎨 **User Experience & Design**
- **Dark/Light Theme Toggle** - Switch between themes with persistent preferences
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Real-time Clock** - Live date and time display
- **Smooth Animations** - Hover effects and transitions for better interactivity
- **Priority Visual Indicators** - Color-coded borders for quick priority recognition

### 📊 **Organization & Analytics**
- **Task Filtering** - Filter by All, Today, Upcoming, or Completed tasks
- **Smart Sorting** - Sort by Due Date, Priority, or Creation Date
- **Statistics Dashboard** - Real-time counts for Total, Completed, and Overdue tasks
- **Empty State Handling** - Friendly messages when no tasks exist

### 💾 **Data Persistence**
- **Local Storage** - Tasks and preferences saved locally in the browser
- **Theme Persistence** - Theme choice remembered across sessions
- **Reminder State** - Reminder history preserved to prevent duplicates

## 🚀 Live Demo

[Try the Task Scheduler App Online](https://your-demo-link.com)

## 📁 Project Structure

```
task_app/
├── index.html          # Main HTML structure and layout
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality and logic
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Tailwind CSS (CDN) for utility-first styling
- **Icons**: Font Awesome 6.4.0 for beautiful icons
- **Storage**: Local Storage API for data persistence
- **Design**: Custom CSS with dark/light theme support
- **Responsiveness**: Mobile-first responsive design

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser
- No additional dependencies to install

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/task-scheduler-app.git
   cd task-scheduler-app
   ```

2. **Open the application**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js
     npx serve .
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Start managing your tasks!**

## 🎯 Usage Guide

### Getting Started
1. **Add Your First Task**
   - Fill in the task title (required)
   - Add an optional description
   - Set a due date and time
   - Choose priority level (Low, Medium, High)
   - Optionally set a reminder
   - Click "Add Task"

2. **Manage Your Tasks**
   - View all tasks in the main list
   - Mark tasks as complete by clicking the circle icon
   - Edit tasks by clicking the edit button
   - Delete tasks by clicking the trash button

3. **Stay Organized**
   - Use filters to view specific task categories
   - Sort tasks by different criteria
   - Monitor your progress with the statistics dashboard

### Priority System
- **🔴 High Priority** - Red border, highest importance
- **🟡 Medium Priority** - Yellow border, balanced importance
- **🟢 Low Priority** - Green border, lower importance

### Reminder System
- **5 minutes** - For immediate tasks
- **15 minutes** - For short-term planning
- **30 minutes** - For medium-term planning
- **1 hour** - For longer-term planning
- **1 day** - For advance planning

### Theme Switching
- Click the moon/sun icon in the header
- Theme preference is automatically saved
- Works across browser sessions

## 🔧 Customization

### Adding New Features
The modular structure makes it easy to extend functionality:

- **New Task Types** - Add different categories or templates
- **Additional Reminder Options** - Custom reminder intervals
- **Export/Import** - Add data backup functionality
- **Categories/Tags** - Implement task categorization
- **Collaboration** - Add sharing capabilities

### Styling Changes
- **Color Scheme** - Modify the indigo theme colors in `styles.css`
- **Animations** - Adjust transition timings and effects
- **Layout** - Use Tailwind CSS classes for responsive design
- **Theme Colors** - Customize dark/light mode color palettes

## 🌟 Key Features Explained

### Smart Task Management
The app automatically handles task states, due dates, and priorities with intelligent sorting and filtering capabilities.

### Intelligent Reminders
The reminder system checks every minute and only shows notifications once per task to avoid spam, while maintaining a history of shown reminders.

### Responsive Design
Built with Tailwind CSS for a mobile-first approach that adapts perfectly to all screen sizes and devices.

### Data Persistence
All data is stored locally in the browser's Local Storage, ensuring your tasks are never lost and the app works offline.

## 🚀 Performance Features

- **Efficient DOM Updates** - Minimal DOM manipulation for better performance
- **Optimized Animations** - CSS transitions for smooth, performant animations
- **Smart Rendering** - Only re-renders when necessary
- **Local Storage** - Fast data access without network requests
- **Responsive Images** - Optimized icon usage with Font Awesome

## 🔮 Future Enhancements

- [ ] **Cloud Sync** - Sync tasks across devices with cloud storage
- [ ] **Task Templates** - Pre-defined task templates for common activities
- [ ] **Recurring Tasks** - Set up daily, weekly, or monthly recurring tasks
- [ ] **Time Tracking** - Track time spent on tasks
- [ ] **Progress Analytics** - Detailed productivity insights and charts
- [ ] **Task Dependencies** - Link related tasks together
- [ ] **Calendar Integration** - Sync with Google Calendar or Outlook
- [ ] **Mobile App** - Native mobile applications
- [ ] **Team Collaboration** - Share tasks and projects with team members
- [ ] **API Integration** - Connect with other productivity tools

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Contribution Guidelines
- Follow the existing code style and structure
- Add comprehensive comments for complex logic
- Test your changes across different browsers and devices
- Update documentation for any new features
- Ensure responsive design works on all screen sizes

## 🐛 Bug Reports

If you find a bug, please create an issue with:
- **Description** of the problem
- **Steps to reproduce** the issue
- **Expected vs actual behavior**
- **Browser and OS information**
- **Screenshots** if applicable
- **Console errors** if any

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Tailwind CSS** - For the excellent utility-first CSS framework
- **Font Awesome** - For the beautiful and consistent icon set
- **Local Storage API** - For reliable client-side data persistence
- **Open Source Community** - For inspiration and continuous improvement

## 📞 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/your-username/task-scheduler-app/issues)
- **Email**: your-email@example.com
- **Discord**: Join our community server

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=your-username/task-scheduler-app&type=Date)](https://star-history.com/#your-username/task-scheduler-app&Date)

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

- **No Data Collection** - All data stays on your device
- **No Tracking** - No analytics or user tracking
- **Local Storage** - Data never leaves your browser
- **Offline Capable** - Works without internet connection

---

<div align="center">
  <p>Made with ❤️ by [Your Name]</p>
  <p>If this project helps you stay organized, please give it a ⭐️!</p>
</div>
