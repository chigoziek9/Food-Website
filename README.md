Chuks Kitchen – Meals Ordering Web Application

A modern and responsive Meals Ordering Web Application built using React, TypeScript, Vite, and Tailwind CSS.
The application allows users to browse meals, view details, manage cart items, and simulate checkout and payment.

📌 Project Overview

Chuks Kitchen is a frontend food ordering platform designed to simulate a real-world restaurant ordering system.

Users can:

Browse meals by category

View detailed meal information

Add meals to cart

Increase or decrease meal quantity

View cart summary

Proceed to checkout

Complete payment simulation

The project focuses on clean UI, state management, and responsive design.

🚀 Live Features

✅ Meal category filtering
✅ Dynamic routing
✅ Global cart management
✅ Quantity stepper
✅ Checkout system
✅ Payment simulation
✅ Mobile responsive layout

🛠️ Tech Stack

React

TypeScript

Vite

Tailwind CSS

React Router DOM

Context API

React Hot Toast

📁 Project Structure
src/
│
├── components/
│   ├── Navbar
│   ├── QuantityStepper
│   ├── Breadcrumb
│   └── ProceedCheckout
│
├── context/
│   └── CartContext
│
├── pages/
│   ├── Home
│   ├── Meals
│   ├── MealDetail
│   ├── Cart
│   └── Payment
│
├── types.ts
├── App.tsx
└── main.tsx
⚙️ Environment Setup

Ensure the following are installed:

Node.js (v18+)

npm

Git

VS Code (recommended)

Check installation:

node -v
npm -v
📦 Installation

Clone the repository:

git clone https://github.com/your-username/chuks-kitchen.git

Navigate into the project:

cd chuks-kitchen

Install dependencies:


npm install
▶️ Running the Project

Start development server:

npm run dev

Open in browser:

http://localhost:5173
🏗️ Build for Production

Create production build:

npm run build

Preview production build:

npm run preview
🧠 State Management

The application uses React Context API for global cart management.

Cart operations include:

Add item to cart

Remove item

Increase quantity

Decrease quantity

Calculate total price

This prevents prop drilling and keeps cart data synchronized across pages.

🌐 Routing

Implemented using React Router v6.

Routes:

/                     → Home
/meals/:categoryName  → Meals Page
/meal/:mealId         → Meal Details
/cart                 → Cart Page
/payment              → Payment Page
📱 Responsiveness

The application is fully responsive using Tailwind CSS breakpoints:

Mobile

Tablet

Desktop

Layouts automatically adjust across screen sizes.

🔮 Future Improvements

Backend integration (Node.js / Express)

Database integration

Real payment gateway (Paystack / Flutterwave)

User authentication

Order history

Admin dashboard

👨‍💻 Author

Chigoze Kingsley
Frontend Developer (React + TypeScript)
Nigeria 🇳🇬