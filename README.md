# Nexus Wallet

Nexus Wallet is a personal finance application built with React and Redux that helps users track expenses, analyze spending behavior, and receive AI-like insights with a human-in-the-loop review system.

---

A hybrid AI + human decision system inspired by real-world "human-in-the-loop" workflows.

## Features

- Expense tracking:
  - Add, edit, and delete expenses
- Custom categories support
  - Add your own categories, additionally to the pre-existing ones
- Currency conversion
  - RON → selected currency (USD, EUR, RUB)
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
- Shows the percentage from total expense for each analysis

### Human-in-the-Loop Review
Each AI suggestion can be accepted/ rejected and commented on by the user. This AI output validation by the user simulates the human-in-the-loop system.

This simulates real-world AI-assisted decision systems, which reflects my own work experience.

### Nexus Insights
Provides a summary for:
- Total spending
- Percentage per category

---

## Design Decisions

- Analysis is stateless: running analysis recalculates insights based on current data.
- Comments are tied to specific suggestions using stable IDs.
- Clear separation between (simple, but efficient, for better UX):
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

### Main UI, Analysis and insights panel in action:

![Main UI Working](./Wireframe/Main%20UI%20working.png)

---

## Tests
- Unit tests for reducers and utility functions
- Analysis logic tested
- UI rendering & interaction tested

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

Built by **C0DREA**, as my final learning project.
GitHub: https://github.com/C0DREA