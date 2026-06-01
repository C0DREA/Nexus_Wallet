# Nexus Wallet

Nexus Wallet is a personal finance application built with React and Redux that combines expense tracking with an AI-inspired analysis system and a human-in-the-loop validation workflow.

It allows users not only to monitor their spending, but also to review, validate, and comment on automated financial insights, simulating real-world AI-assisted decision systems.

---

A hybrid AI + human decision system inspired by real-world "human-in-the-loop" workflows.

## Features

- Expense tracking:
  - Add, edit, and delete expenses
- Custom categories support
  - Add custom categories alongside predefined ones
- Currency conversion
  - Real-time conversion from RON to selected currencies (USD, EUR, RUB)
- AI-powered spending analysis (Nexus AI)
  - Detect high spending
  - Identify dominant categories
  - Spot potential money leaks (small frequent expenses)
- Human-in-the-loop review system:
  - The user can accept or reject the AI insights
  - The user can add comments to decisions
- Insights dashboard (Nexus Insights):
  - Total spending
  - Category breakdown
- Responsive layout
  - Desktop, tablet and smartphone view 

---

## Tech Stack

- React
- Redux Toolkit
- Vitest/ Testing Library
- JavaScript (ES6+)
- CSS (custom styling)
- Git & GitHub

---

## How It Works

### Expense Tracking
Users can add expenses with:
- Title
- Amount (RON)
- Category (pre-existent or custom category)

### Currency Conversion
All expenses are for input and displayed initially in RON and converted live into a selected currency.

### Nexus AI (Analysis System)
When clicking "Run Nexus AI Analysis":
- The app analyzes current expenses
- Detects:
  - High total spending
  - Dominant categories
  - Potential money leaks (small frequent expenses)
- Calculates the percentage contribution of each category to total spending

### Human-in-the-Loop Review
Each AI suggestion can be accepted/ rejected and commented on by the user. This AI output validation by the user simulates the human-in-the-loop system. 

This introduces a feedback layer where users actively validate AI outputs, rather than passively consuming them.

This simulates real-world AI-assisted decision systems, which reflects my own work experience.

### Nexus Insights
Provides a summary for:
- Total spending
- Percentage per category

---

## Design Decisions

- Analysis is stateless: running analysis recalculates insights based on current data.
- Comments are tied to specific suggestions using stable IDs.
- Clear separation between (simple and efficient, improving user experience):
  - Data input (left panel)
  - AI + insights (right panel)

---

## Wireframes

### Desktop View Wireframe
![Desktop Wireframe](./Wireframe/Desktop%20view%20wireframe.png)

### Tablet View Wireframe
![Tablet Wireframe](./Wireframe/Tablet%20view%20wireframe.png)

### Smartphone View Wireframe
![Smartphone Wireframe](./Wireframe/Smartphone%20view%20wireframe.png)

---

## Project Structure

```
├── Wireframe
├── Resources
    ├── images
├── src
    ├── app
          ├── store.js
    ├── components
          ├── analysis
              ├── AnalysisPanel.jsx
              ├── AnalyzeButton.jsx
              ├── InsightsPanel.jsx
          ├── expenses
              ├── ExpenseForm.jsx
              ├── ExpenseForm.test.jsx
              ├── ExpenseList.jsx
          ├── ui
              ├── CurrencySelector.jsx
    ├── features
          ├── analysis
              ├── analysisSlice.js
              ├── analysisSlice.test.js
          ├── categories
              ├── categoriesSlice.js
          ├── currency
              ├── currencySlice.js
          ├── expenses
              ├── expensesSlice.js
              ├── expensesSlice.test.js
    ├── test
          ├── setup.js
    |
    ├── App.css
    ├── App.js
    ├── index.js
    ├── main.jsx
```

---

## Screenshots

### Desktop View
![Desktop View](./Wireframe/Desktop%20view.png)

### Tablet View
![Tablet View](./Wireframe/Tablet%20view.png)

### Smartphone View
![Smartphone View](./Wireframe/Smartphone%20view.png)

### ### Application in Action:

![Main UI Working](./Wireframe/Main%20UI%20working.png)

---

## Tests
- Unit tests for Redux reducers (expenses and analysis logic)
- Validation of AI suggestion generation and updates
- UI rendering and user interaction tests using Testing Library

---

## Live Demo
A live demo of the application is available at: [Nexus Wallet](https://c0drea.github.io/Nexus_Wallet)

---

## Future Improvements

- Editing existing expenses
- Persistent storage (localStorage or backend)
- Charts (pie / bar visualization)
- User authentication
- More advanced AI rules
- Mobile-first optimization

---

## Getting Started

```bash
npm install
npm run dev
```
---

## Author

Built by **C0DREA** as a final project in the Front-End Engineer career learning path.
GitHub: https://github.com/C0DREA