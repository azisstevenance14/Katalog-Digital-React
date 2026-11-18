# 🚀 ASSA.dev - Digital Product Catalog

A responsive multi-page digital catalog web application built using **React.js**, **Vite**, **Bootstrap 5**, and **React Router DOM**. This project demonstrates clean UI components, modular page architecture, and seamless single-page application (SPA) navigation.

---

## 📌 Project Overview

**ASSA.dev Digital Catalog** serves as a modern showcase platform for hardware/IoT solutions and full-stack web development services. Designed with modularity and developer-friendly practices in mind, this project breaks down layouts into reusable components and dedicated page routes.

---

## ✨ Key Features & Architecture

- ⚡ **Vite + React framework**: Lightning-fast local development and lightweight builds.
- 🎨 **Bootstrap 5 & React Icons**: Modern, responsive utility UI framework integrated with custom SVG icons.
- 🧭 **Multi-Page SPA Navigation**: Handled cleanly via `react-router-dom` with 404 fallback routing (`*`).
- 🧩 **Modular Component Design**:
  - `components/Navbar.jsx` — Global navigation bar.
  - `components/Footer.jsx` — Reusable global footer.
  - `components/ProductCard.jsx` — Dynamically rendered catalog items via props.
  - `components/Kontak.jsx` — Interactive user inquiry form & contact details.
- 📁 **Dedicated Page Routes**:
  - `HomePage.jsx` — Landing hero overview + embedded inquiry form.
  - `ProductsPage.jsx` — Array mapping of available digital & hardware products.

---

## 📂 Project Directory Structure

```text
src/
├── assets/          # Static assets (images, logos)
├── components/      # Reusable UI components
│   ├── Footer.jsx
│   ├── Kontak.jsx
│   ├── Navbar.jsx
│   └── ProductCard.jsx
├── data/            # Static data stores
│   └── productsData.js
├── pages/           # Dedicated route views
│   ├── HomePage.jsx
│   └── ProductsPage.jsx
├── App.jsx          # Root layout & BrowserRouter routes setup
├── main.jsx         # Vite entry point
└── index.css        # Global custom styles & smooth scrolling