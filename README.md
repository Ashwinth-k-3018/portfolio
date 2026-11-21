# Ashwinth K - Java Full Stack Developer & Database Specialist Portfolio

A modern, high-performance portfolio website built for **Ashwinth K**, currently placed at **Stackly** as a **Java Full Stack Developer**.

Designed specifically to attract HR managers, engineering directors, and high-paying freelance clients.

---

## 🌟 Key Highlights & Features

- **Updated Stackly Experience:** Highlights Ashwinth's placement at **Stackly** (May 2025 &ndash; Present) focusing on Spring Boot microservices, REST APIs, and MySQL optimization.
- **13+ Production-Grade Projects:**
  - **Spring Boot Backend:** *Libraries Book Management System*, *Vehicle Rent Management System*, *Mobile Recharge Application*.
  - **JDBC & Advanced Java:** *Banking Management System (ACID transactions)*, *Online Food Ordering System*, *Library Management System (MVC)*.
  - **Core Java:** *Hospital Appointment System (Multithreading/Collections)*, *Student Management System (File I/O Serialization)*.
  - **MySQL Database Architecture:** *Banking Scenario (Stored Procedures & Triggers)*, *Customer Order DB (3NF & Joins)*, *Hotel Management DB*, *Railway Reservation System DB*.
  - **Modern Web / Frontend:** *Responsive E-Commerce Platform*.
- **Interactive Project Deep Dive Modal:** Click on any project card to view architectural diagrams, execution flows, schema tables, and concurrency challenge solutions.
- **Working Contact Form (Direct to Email):**
  - Sends submissions straight to **`ashwinthkumar003@gmail.com`** using FormSubmit AJAX API.
  - Features real-time validation, loading spinner, success toast, and direct `mailto:` / WhatsApp fallback.
- **Interactive Developer Terminal:** Visitors can run interactive commands (`about`, `stackly`, `skills`, `projects`, `freelance`, `contact`, `hire`, `clear`).
- **Freelance Client Magnet Section:** Tailored offerings for startups and clients (REST API development, MySQL query tuning, full-stack MVPs, legacy modernization).
- **Printable ATS Resume (`resume.html`):** One-click printable PDF view formatted for A4 standard.
- **100% Cross-Device Responsive:** Meticulously styled for mobile devices, tablets, laptops, and ultra-wide screens.

---

## 📂 Project Directory Structure

```text
portfolio_ashwin/
├── index.html              # Main single-page portfolio application
├── resume.html             # Printable, ATS-friendly A4 resume view
├── README.md               # Documentation & deployment guide
├── css/
│   └── style.css           # Modern Cyber/Glassmorphism responsive stylesheet
└── js/
    ├── projects-data.js    # Data source with architecture & schema for all 13+ projects
    └── main.js             # Terminal logic, contact form AJAX, modal dialogs, animations
```

---

## 📸 Adding Your Professional Photo

A dedicated photo frame has been added to both your **Hero section**, **About Spotlight card**, and **Resume**.

### How to add your photo:
1. Simply copy your photo into the folder:
   ```text
   assets/images/profile.jpg
   ```
   *(Or if it is a PNG, save it as `assets/images/profile.jpg` or update the filename to `profile.png` in `index.html`)*.
2. If no photo is added yet, a futuristic developer cyber avatar (`profile-placeholder.svg`) displays automatically with zero broken image errors!

---

## 🚀 How to Run Locally

You don't need any complex build tools. You can view the site immediately:

1. **Option 1: Direct Browser**
   - Simply double-click `index.html` to open it in Chrome, Edge, or Firefox.

2. **Option 2: VS Code Live Server**
   - Right-click `index.html` in VS Code and select **"Open with Live Server"**.

3. **Option 3: Quick Local Node / Python Server**
   ```bash
   # Using Node (npx)
   npx serve .

   # Or using Python 3
   python -m http.server 3000
   ```
   Open `http://localhost:3000` in your browser.

---

## 📬 Working Contact Form Details

The contact form is hooked to:
```javascript
https://formsubmit.co/ajax/ashwinthkumar003@gmail.com
```
- **First-time setup note:** The first time a message is submitted through FormSubmit, FormSubmit sends a single one-click activation link to `ashwinthkumar003@gmail.com`. Click that link once to confirm your email, and all subsequent messages will land straight in your inbox with formatted tables and details!
- In case the visitor is offline or has strict firewalls, the contact form includes an automated fallback to launch the visitor's email app with all details pre-filled.

---

## 🌐 Free 2-Minute Deployment Options

### 1. GitHub Pages (Recommended)
1. Initialize git in this directory:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio"
   ```
2. Create a repository on GitHub named `portfolio` or `Ashwinth-k-3018.github.io`.
3. Push your repository:
   ```bash
   git remote add origin https://github.com/Ashwinth-k-3018/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. On GitHub, go to **Settings > Pages** and select the `main` branch. Your site will be live at `https://Ashwinth-k-3018.github.io/portfolio`!

### 2. Vercel / Netlify
- Drag and drop the `portfolio_ashwin` folder directly into [netlify.com/drop](https://app.netlify.com/drop) or import from GitHub on [vercel.com](https://vercel.com). It will deploy instantaneously with SSL.

---

## 👤 Contact & Profile Information

- **Name:** Ashwinth K
- **Role:** Java Full Stack Developer
- **Current Company:** Stackly (Chennai, India)
- **GitHub Profile:** [https://github.com/Ashwinth-k-3018](https://github.com/Ashwinth-k-3018)
- **LinkedIn Profile:** [https://www.linkedin.com/in/ashwinth-k-91616529b](https://www.linkedin.com/in/ashwinth-k-91616529b)
- **Java & MySQL Projects Repo:** [https://github.com/Ashwinth-k-3018/Java_Stackly](https://github.com/Ashwinth-k-3018/Java_Stackly)
- **Email:** [ashwinthkumar003@gmail.com](mailto:ashwinthkumar003@gmail.com)
- **Education:** B.E. Computer Science and Engineering (Salem College of Engineering & Technology, CGPA: 8.3)
