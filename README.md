# Task Manager - Your Personal Productivity Assistant

A sleek, modern task management application built with HTML, CSS, and JavaScript that helps you stay organized and boost your productivity.

## Features

### 📝 Task Management
- Add new tasks with descriptive names
- Mark tasks as completed
- Delete individual tasks
- Clear all tasks at once
- Tasks persist in your browser's localStorage

### ⚡ Priority System
- Set priority levels for tasks:
  - 🔴 High Priority
  - 🟡 Medium Priority
  - 🟢 Low Priority
- Visual indicators for quick identification
- Color-coded borders for easy scanning

### 💾 Data Persistence
- All tasks are automatically saved to your browser's localStorage
- Your data persists between sessions until you clear your browser data
- No external servers or databases required

### 🎨 Modern UI/UX
- Clean, minimalist design
- Responsive layout that works on desktop and mobile devices
- Smooth animations and transitions
- Intuitive interface

## How to Use

1. **Adding a Task**
   - Type your task in the input field
   - Select a priority level (High, Medium, or Low)
   - Click "Add Task" or press Enter

2. **Managing Tasks**
   - Check the box to mark a task as completed
   - Click the "×" button to delete a task
   - Use "Clear All" to remove all tasks

3. **Priority Levels**
   - High Priority (🔴): Urgent tasks that need immediate attention
   - Medium Priority (🟡): Important tasks for near-term completion
   - Low Priority (🟢): Tasks that can be completed when time permits

## Technical Details

### Technologies Used
- HTML5
- CSS3 (Flexbox, Custom Properties)
- Vanilla JavaScript (ES6+)
- localStorage API for data persistence

### Browser Support
- Chrome 50+
- Firefox 50+
- Safari 10+
- Edge 15+

### Data Storage
All data is stored locally in your browser's localStorage. This means:
- Your tasks are private and never leave your device
- Data persists between browser sessions
- No internet connection required
- Data is cleared when you clear your browser data

## File Structure
```
task-manager/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Customization

### Changing Theme Colors
Modify the CSS custom properties in `style.css` to change the color scheme:
```css
:root {
  --primary-blue: #1e40af;
  --secondary-blue: #3b82f6;
  --success-green: #10b981;
  --warning-yellow: #f59e0b;
  --danger-red: #ef4444;
}
```

### Adjusting Layout
The container width can be adjusted by modifying the `max-width` property in `.container` class in `style.css`.

## Privacy & Security

- No data is collected or transmitted to any servers
- All tasks are stored locally on your device
- Your task data is only visible to you
- Clearing your browser data will remove all tasks

## Troubleshooting

### Tasks Not Saving
- Ensure your browser supports localStorage
- Check that you haven't disabled localStorage in browser settings
- Try refreshing the page

### Layout Issues
- Make sure you're using a modern browser
- Clear your browser cache and refresh the page
- Check that all files are in the same directory

## Contributing

This is a simple project designed for personal use. Feel free to fork and modify it to suit your needs.

## License

This project is open source and available under the MIT License.

## Author

Created with ❤️ to help you stay organized and productive.