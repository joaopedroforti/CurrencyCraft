# CurrencyCraft: Simple Currency Converter

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js Badge"/>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React Badge"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript Badge"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS Badge"/>
</p>

## 🌟 Overview

**CurrencyCraft** is a minimal, fast, and responsive currency converter application built with the modern web stack. It serves as an excellent starting point for developers looking to showcase their skills in **Next.js**, **React Hooks**, and **external API consumption**.

The project is intentionally kept simple, focusing on core functionality and clean code structure, making it an ideal portfolio piece for demonstrating fundamental frontend development practices.

## ✨ Features

*   **Real-time Conversion:** Fetches the latest exchange rates from a reliable, free API.
*   **Responsive Design:** Built with Tailwind CSS for a clean and mobile-friendly interface.
*   **Clean Architecture:** Uses a custom React Hook (`useExchangeRates`) to separate data fetching logic from the UI components.
*   **TypeScript:** Ensures type safety and improves code maintainability.
*   **No API Key Required:** Utilizes the public and free [Frankfurter API](https://www.frankfurter.app/) for exchange rate data.

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | Next.js (App Router) | React framework for production-ready applications. |
| **Language** | TypeScript | Statically typed superset of JavaScript. |
| **Styling** | Tailwind CSS | Utility-first CSS framework for rapid UI development. |
| **Data Source** | Frankfurter API | Free and open-source API for real-time exchange rates. |

## 🚀 Getting Started

Follow these steps to get a copy of the project up and running on your local machine.

### Prerequisites

You will need the following software installed on your system:

*   [Node.js](https://nodejs.org/) (version 18.x or higher)
*   [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation and Setup

1.  **Clone the repository:**
    \`\`\`bash
    git clone https://github.com/your-username/currency-craft.git
    cd currency-craft
    \`\`\`

2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`

3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    \`\`\`

4.  **Open in your browser:**
    The application will be running at [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

The project follows a standard Next.js structure, with a focus on modularity:

\`\`\`
currency-craft/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles using Tailwind CSS
│   │   ├── layout.tsx       # Root layout component
│   │   └── page.tsx         # Main Currency Converter component (Client Component)
│   ├── hooks/
│   │   └── useExchangeRates.ts # Custom hook for API data fetching
│   └── components/          # (Optional) For future reusable components
├── public/
├── next.config.js
├── package.json
└── README.md
\`\`\`

## 💡 Key Implementation Details

### Data Fetching with Custom Hook

The core logic for fetching data is encapsulated in `src/hooks/useExchangeRates.ts`. This hook handles the asynchronous API call, manages loading and error states, and ensures the data is only fetched when the `base` currency changes.

This approach keeps the main `page.tsx` component clean and focused solely on the presentation and user interaction logic.

### API Endpoint

The application uses the following endpoint from the Frankfurter API:

\`\`\`
https://api.frankfurter.dev/latest?base=[FROM_CURRENCY]
\`\`\`

This endpoint returns the latest exchange rates relative to the specified base currency, which is then used to calculate the converted amount.

## 🤝 Contributing

This is a simple study project, but feel free to fork the repository and implement new features, such as:

*   Adding a list of all available currencies from the API.
*   Implementing a chart to show historical rates.
*   Adding a dark mode toggle.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
*Built with simplicity and craft by João Pedro Forti
*
\`\`\`
