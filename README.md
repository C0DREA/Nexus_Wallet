# THIS IS A DRAFT !!!

# Nexus Wallet

Nexus Wallet is a personal finance application built with React and Redux that helps users track expenses, analyze spending behavior, and receive AI-like insights with a human-in-the-loop review system.

---

A hybrid AI + human decision system inspired by real-world "human-in-the-loop" workflows.

## Features

- Add, edit, and delete expenses
- Custom categories support
- Currency conversion (RON → selected currency)
- AI-powered spending analysis (Nexus AI)
- Human-in-the-loop review system:
  - Accept or reject insights
  - Add comments to decisions
- Insights dashboard (Nexus Insights):
  - Total spending
  - Category breakdown
- Responsive layout (desktop-first)

---

## Tech Stack

- React
- Redux Toolkit
- JavaScript (ES6+)
- CSS (custom styling)
- Git & GitHub

---

## How It Works

### Expense Tracking
Users can add expenses with:
- Title
- Amount (RON)
- Category

### Currency Conversion
All expenses are displayed in RON and converted live into a selected currency.

### Nexus AI (Analysis System)
When clicking "Run Nexus Analysis":
- The app analyzes current expenses
- Detects:
  - High total spending
  - Dominant categories
  - Potential money leaks (small frequent expenses)

### Human-in-the-Loop Review
Each AI suggestion can be:
- Accepted
- Rejected
- Commented on

This simulates real-world AI-assisted decision systems.

### Nexus Insights
Provides a summary:
- Total spending
- Percentage per category

---

## Design Decisions

- Analysis is stateless:  
  Running analysis recalculates insights based on current data.
- Comments are tied to specific suggestions using stable IDs.
- Clear separation between:
  - Data input (left panel)
  - AI + insights (right panel)

---

## Future Improvements

- Edit existing expenses
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