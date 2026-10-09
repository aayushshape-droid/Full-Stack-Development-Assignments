# 🎓 MCA Student Result Management System

## 👨‍🎓 Student Details
* **Name:** Aayush Shape
* **Roll No:** 47
* **Course:** M.C.A
* **University:** ITM Skills University
* **Subject:** Full Stack Application
* **Faculty:** Sneha Gavas

## 📝 Project Overview
The **MCA Student Result Management System** is a dynamic, fully responsive, and intuitive web application designed specifically for the Master of Computer Applications (MCA) department[cite: 2]. It allows users to register student details along with their core subject marks, instantly calculates their performance, and securely stores the data in the browser[cite: 2].

This project is built from scratch without any external CSS frameworks (like Bootstrap or Tailwind) to demonstrate strong foundational knowledge in web technologies[cite: 2].

## ✨ Key Features
* **📊 Real-time Calculations:** Automatically calculates Total Marks, Percentage, and Pass/Fail status as soon as the form is submitted[cite: 2].
* **🧠 MCA Passing Logic:** Implements strict passing criteria[cite: 2]. A student is marked as "Pass" only if they secure a minimum of **40% overall** AND at least **40 marks in each individual subject** (Data Structures, Java, DBMS)[cite: 2].
* **💾 Data Persistence (LocalStorage):** New student entries are saved in the browser's `localStorage`[cite: 2]. The data remains intact even if the page is refreshed or closed[cite: 2].
* **🌐 Asynchronous Data Fetching:** Uses the JS `fetch()` API to load 20 predefined student records from a local `data.json` file on page load, showcasing data handling capabilities[cite: 2].
* **🛡️ Form Validation:** Built-in validation prevents users from entering invalid marks (accepts only values between 0 and 100)[cite: 2].
* **📱 Responsive Design:** The UI is clean, modern, and perfectly adapts to desktops, tablets, and mobile screens[cite: 2].

## 🛠️ Technologies Used
* **Frontend:** HTML5, CSS3 (Custom styling, Flexbox)[cite: 2]
* **Scripting & Logic:** Vanilla JavaScript (ES6+, DOM Manipulation, Event Listeners)[cite: 2]
* **Data Format:** JSON[cite: 2]
* **Storage:** Web Storage API (`localStorage`)[cite: 2]

## 📂 Project Structure
* `📦 MCA-Result-System`[cite: 2]
* `┣ 📜 index.html` - The main structural file containing the form and table layout[cite: 2].
* `┣ 📜 style.css` - Contains all the custom styles, hover effects, and responsive queries[cite: 2].
* `┣ 📜 script.js` - Handles logic, calculations, DOM updates, and local storage[cite: 2].
* `┣ 📜 data.json` - A mock database containing 20 predefined MCA student entries[cite: 2].
* `┗ 📜 README.md` - Project documentation (This file)[cite: 2].

## 🚀 How to Run the Project Locally
Because this project uses the `fetch()` API to read the `data.json` file, simply double-clicking the `index.html` file might cause a CORS (Cross-Origin Resource Sharing) error in modern web browsers[cite: 2]. 

**Follow these steps to run it smoothly:**

1. **Clone this repository** to your local machine[cite: 2]:
   `git clone https://github.com/your-username/mca-result-system.git`
2. **Open the project folder** in your code editor (e.g., VS Code)[cite: 2].
3. **Start a Local Server:**
   * If you are using **VS Code**, install the Live Server extension[cite: 2].
   * Right-click on the `index.html` file and select **"Open with Live Server"**[cite: 2].
4. The application will automatically open in your default browser, fully loaded with the 20 pre-existing records[cite: 2]!

## 📸 Interface Details
* **Registration Form:** Input fields for Roll No, Name, Semester (Sem 1 to Sem 4), and subject marks[cite: 2].
* **Results Table:** Displays all entered and fetched data dynamically with color-coded "Pass" (Green) and "Fail" (Red) indicators for easy readability[cite: 2].

## 👨‍💻 Author
Designed and developed as a comprehensive academic web development project[cite: 2]. Feel free to explore the code, fork the repository, and use it for your learning[cite: 2]!