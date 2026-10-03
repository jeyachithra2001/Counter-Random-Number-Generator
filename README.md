⚛️ React Counter & Random Number Generator 🎲

A simple and beginner-friendly React project containing two interactive pages: a Counter Application and a Random Number Generator.

This project was created to practice fundamental React concepts such as Components, useState, Props, Conditional Rendering, and Event Handling.


---

✨ Features

🔢 Counter Application

➕ Increment — Increases the counter by 1

➖ Decrement — Decreases the counter by 1

🔄 Reset — Resets the counter to 0

🚫 Prevents the counter from going below 0

⚠️ Displays "Minimum limit reached" when the counter is 0


🎲 Random Number Generator

🔢 Generates a random number between 1 and 100

⚛️ Uses useState to manage the generated number

💬 Displays "No number generated yet" before generating a number

🔄 Generates a new random number when the button is clicked



---

🧭 Navigation

The project includes a simple navigation bar:

🏠 Counter

🎲 Random Number Generator


The pages are navigated using basic React.


---

🛠️ Technologies Used

Technology	Purpose

⚛️ React	Building the user interface
🟨 JavaScript	Application logic
🌐 HTML	Page structure
🎨 CSS	Styling
🔄 useState	Managing component state
📦 Props	Passing data between components
🔀 Conditional Rendering	Displaying content based on state



---

📚 React Concepts Practiced

🔄 useState

Used to manage the counter value and generated random number.

const [count, setCount] = useState(0);

📦 Props

Props are used to pass data or functionality between components.

🔀 Conditional Rendering

Conditional rendering is used to display messages based on the current state.

{count === 0 && <p>Minimum limit reached</p>}


---

📂 Project Structure

📁 src
 ┣ 📁 components
 ┃ ┗ 📄 nav.jsx
 ┃ ┗ 📄 counterBtn.jsx
 ┣ 📁 pages
 ┃ ┣ 📄 counter.jsx
 ┃ ┗ 📄 randomNum.jsx
 ┣ 📄 App.jsx
 ┣ 📄 main.jsx
 ┗ 🎨 index.css


---

🚀 Getting Started

1️⃣ Clone the repository

git clone [(https://github.com/jeyachithra2001/Counter-Random-Number-Generator.git)]

2️⃣ Navigate to the project

cd counter-app

3️⃣ Install dependencies

npm install

4️⃣ Start the development server

npm run dev


---

🎯 Project Objective

The main objective of this project is to understand how to build a simple interactive React application using:

⚛️ React Components

🔄 useState

📦 Props

🖱️ Event Handling

🔀 Conditional Rendering

🧭 Basic Page Navigation



---

🔮 Future Improvements

🎨 Improve the UI design

📱 Make the application fully responsive

✨ Add animations

🎲 Allow users to enter custom minimum and maximum numbers

🔢 Add more counter options

🌙 Add Dark Mode



---

👩‍💻 Author

Jeya Chithra

💻 Full stack / React Learner
🌱 Learning and building projects with React


---

⭐ If you like this project, feel free to star the repository! ⭐