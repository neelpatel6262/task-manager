# ✅ Task Manager

> Your personal productivity assistant — minimalist, fast, and entirely browser-based.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://task-manager-eight-wheat-77.vercel.app/)

**Live Demo:** [task-manager-eight-wheat-77.vercel.app](https://task-manager-eight-wheat-77.vercel.app/)

---

## 1. Project Title

**Task Manager** – A minimalist, feature-rich task management application built with vanilla HTML, CSS, and JavaScript.

---

## 2. Description

Task Manager is a lightweight, browser-based productivity tool for users who want simplicity without sacrificing functionality. It runs entirely in your browser with **zero server dependencies** — all tasks are stored locally via `localStorage`, ensuring complete privacy and persistence across sessions.

No sign-ups. No installs. No noise. Just focus.

---

## 3. Features

**Core Functionality**
- ✅ **Add Tasks** – Create new tasks with a single click or keyboard shortcut.
- 🔴🟡🟢 **Priority Levels** – Assign High, Medium, or Low priority to any task.
- ☑️ **Task Completion** – Mark tasks as done with clear visual feedback.
- 🗑️ **Delete Tasks** – Remove individual tasks with a smooth animation.
- 🧹 **Clear All** – Bulk delete all tasks with a confirmation prompt.

**Data & Storage**
- 💾 **Persistent Storage** – Tasks saved automatically to `localStorage`.
- 🔒 **Privacy-First** – All data stays local; nothing is sent to a server.
- ♻️ **Data Longevity** – Tasks persist until manually deleted or browser data cleared.

**User Experience**
- 🎨 **Modern Design** – Clean, minimalist interface inspired by the Matter app.
- 📱 **Fully Responsive** – Works seamlessly on desktop, tablet, and mobile.
- ⚡ **Fast & Lightweight** – No dependencies, instant load times.
- 🎯 **Task Counter** – Real-time count of remaining tasks.
- 📖 **Built-in Documentation** – Collapsible help section with usage guide.

**Accessibility**
- ♿ **Keyboard Navigation** – Full keyboard support for all interactions.
- 🎤 **Screen Reader Support** – ARIA labels and semantic HTML throughout.
- 🖱️ **Mouse & Touch Friendly** – Optimized for all input methods.

---

## 4. Technologies

| Category       | Technology                                      |
|----------------|-------------------------------------------------|
| Markup         | HTML5 (semantic)                                |
| Styling        | CSS3 – Flexbox & CSS Grid                       |
| Logic          | Vanilla JavaScript (ES6+)                       |
| Storage        | Browser `localStorage` API                      |
| Fonts          | Google Fonts (DM Mono)                          |
| Icons          | Unicode Emoji                                   |
| Deployment     | [Vercel](https://vercel.com/)                   |

---

## 5. Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- No Node.js, npm, or any installation required!

---

## 6. Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/neelpatel6262/task-manager.git
   cd task-manager
   ```

2. **Open the project**

   ```bash
   # Option 1: Open directly in browser
   open index.html

   # Option 2: Use a local server (recommended)
   python -m http.server 8000
   # Visit http://localhost:8000
   ```

3. **Deploy to Vercel** *(optional)*

   ```bash
   npm install -g vercel
   vercel
   ```

---

## 7. Usage

1. Type a task in the input field.
2. Select a priority level (High / Medium / Low).
3. Click **Add Task** or press `Enter`.
4. Tasks are saved automatically — no manual save needed.
5. Mark tasks complete by clicking the checkbox.
6. Delete individual tasks or use **Clear All** to reset.
7. Collapse/expand the built-in help section for a quick usage guide.

---

## 8. Keyboard Shortcuts

| Shortcut                       | Action                                |
|--------------------------------|---------------------------------------|
| `Enter`                        | Add task (when input is focused)      |
| `Ctrl+Enter` / `Cmd+Enter`     | Focus input / add task from anywhere  |
| `Escape`                       | Clear input field and unfocus         |
| `Space` or `Enter` on checkbox | Toggle task completion                |

---

## 9. Project Structure

```text
task-manager/
├── index.html          # Main HTML file with UI structure
├── style.css           # Styling and responsive design
├── script.js           # Core JavaScript functionality
├── Assets/             # Images and icons
│   └── circle-check-big.svg
└── README.md           # Project documentation
```

---

## 10. Development Process

- **Phase 1 – Planning & Design:** Analyzed existing task managers (inspired by Matter app). Defined core features: add, complete, delete, and priority system. Designed a minimalist UI with planned `localStorage` support.
- **Phase 2 – Core Development:** Built semantic HTML structure, implemented JavaScript task management logic, and developed CSS styling with modern design patterns including responsive layouts.
- **Phase 3 – Feature Enhancement:** Integrated the priority system with visual indicators, added keyboard shortcuts for power users, and built the collapsible documentation section.
- **Phase 4 – Testing & Optimization:** Cross-browser testing (Chrome, Firefox, Safari, Edge), mobile responsiveness testing, performance optimization, and accessibility audit (ARIA labels, keyboard navigation).
- **Phase 5 – Deployment:** Configured Vercel deployment, set up GitHub repository, and implemented a CI/CD pipeline for automatic deployments from GitHub.

---

## 11. What I Learned

**Technical Skills**
- **DOM Manipulation** – Advanced element creation, event handling, and dynamic updates.
- **LocalStorage API** – Data persistence, JSON serialization, and error handling.
- **CSS Animations** – Smooth transitions, keyframe animations, and visual feedback.
- **Responsive Design** – Mobile-first approach, media queries, and flexible layouts.
- **Accessibility Standards** – ARIA roles, semantic HTML, and keyboard navigation.
- **Git & GitHub** – Version control, merge conflict resolution, and collaboration workflows.
- **Vercel Deployment** – Continuous integration and automatic deployments from GitHub.

**Design Principles**
- Minimalism: remove unnecessary UI elements and let content breathe.
- Providing clear visual feedback for every user action.
- Designing mobile-first, then progressively enhancing for larger screens.

**Problem-Solving**
- Debugging `localStorage` persistence edge cases.
- Resolving CSS layout conflicts with Flexbox.
- Implementing smooth animations without performance degradation.
- Managing application state without a framework.

---

## 12. Overall Growth

| Aspect              | Before                   | After                        |
|---------------------|--------------------------|------------------------------|
| Data Persistence    | None                     | Automatic `localStorage`     |
| Mobile Experience   | Basic                    | Fully responsive             |
| Accessibility       | Limited                  | WCAG compliant               |
| Keyboard Support    | Enter key only           | Full keyboard shortcuts       |
| Documentation       | None                     | Built-in collapsible help    |
| Deployment          | Local only               | Live on Vercel               |
| Code Quality        | Inline styles            | Separated HTML / CSS / JS    |

From a simple add/delete list → to a full-featured, accessible, deployed productivity app.

---

## 13. Future Enhancements

- [ ] 📅 **Due Dates & Reminders** – Set deadlines for tasks.
- [ ] 🏷️ **Categories & Tags** – Organize tasks by project or area.
- [ ] 🔍 **Search & Filter** – Find tasks quickly by keyword.
- [ ] 📊 **Analytics** – View productivity stats and trends.
- [ ] ☁️ **Cloud Sync** – Optional cross-device sync via a backend.
- [ ] 🌙 **Dark Mode** – Easy on the eyes for night use.
- [ ] 🔔 **Push Notifications** – Reminders for important tasks.
- [ ] 📱 **Mobile App** – Native iOS/Android wrapper.

---

## 14. Known Issues / Limitations

- Tasks are only available on the same browser and device — no cross-device sync.
- No built-in export or backup functionality.
- Clearing browser cache will permanently delete all tasks.
- Maximum task length is 100 characters (by design).

---

## 15. Contributing

Contributions are welcome!

1. **Fork** the repository.
2. **Create** a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit** your changes and push:

   ```bash
   git commit -m "Add: your feature description"
   git push origin feature/your-feature-name
   ```

4. **Open a Pull Request** describing your changes.

You can also report bugs or suggest features by opening an issue.

---

## 16. License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Free to use for personal or commercial projects.

---

## 17. Contact

- **Name:** Neel Patel
- **GitHub:** [@neelpatel6262](https://github.com/neelpatel6262)
- **Live Demo:** [task-manager-eight-wheat-77.vercel.app](https://task-manager-eight-wheat-77.vercel.app/)

---

## 18. Acknowledgments

- Inspired by the [Matter](https://hihayk.github.io/matter/) task management app philosophy.
- Built with vanilla web technologies for maximum compatibility and zero overhead.
- Designed with accessibility and user experience as first-class priorities.

---

## 19. Footer

| Field          | Info                      |
|----------------|---------------------------|
| Project Status | Active / Portfolio-ready  |
| Version        | 1.0.0                     |
| Deployment     | Vercel                    |

---

## 20. Checklist

- [x] HTML5 semantic structure
- [x] CSS3 responsive layout (Flexbox + Grid)
- [x] Vanilla JS task logic (add, complete, delete)
- [x] Priority levels with visual indicators
- [x] `localStorage` persistence
- [x] Keyboard shortcuts
- [x] Built-in collapsible help / documentation
- [x] Accessibility (ARIA labels, keyboard nav)
- [x] Cross-browser testing
- [x] Deployed to Vercel
- [ ] Due dates & reminders
- [ ] Search & filter
- [ ] Dark mode
- [ ] Cloud sync / backend integration
