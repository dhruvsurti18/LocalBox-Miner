💻 LocalBox Miner
📌 Project Overview

LocalBox Miner is a React-based offline data management application that demonstrates how CRUD operations can be implemented using React state, props, and browser localStorage — without any backend or external API.

The project is designed as a learning-focused dashboard that helps users understand how real-world frontend applications manage data, handle events, and persist information locally.

🎯 Learning Objectives

This project helps learners understand:

React state and props

Component-based architecture

CRUD operations in React

localStorage integration

Event handling and argument passing

Conditional rendering

Offline-first application design

🧱 Project Structure
LocalBox-Miner/
│
├── src/
│   ├── components/
│   │   ├── RecordForm.jsx
│   │   ├── RecordList.jsx
│   │   ├── RecordRow.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│
├── public/
├── README.md
└── package.json

🧩 Component Description
🔹 RecordForm

Handles adding and updating records.

Features:

Controlled input fields

Basic form validation

Add and Edit modes

Displays validation feedback

Concepts Covered:

Controlled components

Form submission

Conditional rendering

🔹 RecordList

Displays all stored records in a table format.

Features:

Dynamic table rendering

Displays “No Records Found” when empty

Concepts Covered:

List rendering using .map()

Conditional UI rendering

🔹 RecordRow

Represents a single row inside the record table.

Features:

Edit and Delete buttons

Passes record ID to event handlers

Concepts Covered:

Event argument passing

Component communication via props

🎛️ State Management

The main application state is managed in the parent component and includes:

Records array

Edit mode status

Selected record ID

Validation and confirmation flags

State updates trigger automatic UI re-rendering and localStorage synchronization.

📦 localStorage Integration

The application uses browser localStorage for data persistence.

Workflow:

On application load, records are fetched from localStorage

On add/update/delete, state is updated

Updated data is stored back into localStorage as JSON

UI reflects changes instantly

This demonstrates an offline-first data management approach.

🎯 Event Handling

The project uses multiple React events:

onChange → Input field updates

onSubmit → Add or update record

onClick → Edit, delete, or clear records

Example:
<button onClick={() => deleteRecord(id)}>Delete</button>


This teaches safe and effective event argument passing.

🎭 Conditional Rendering

The UI dynamically changes based on state:

Displays “No Records Found” when no data exists

Switches between Add and Edit modes

Shows validation errors when needed

Confirms before clearing all records

📊 Dashboard Summary

The interface provides a live data overview including:

Total number of records

Recently added record

Record table

Edit and delete controls

Validation and confirmation messages

All updates occur instantly using React state and localStorage.

🚀 Offline-First Design

No backend required

No API calls

Works fully offline

Persistent data storage

Lightweight and fast UI

This approach is commonly used in admin dashboards and local tools.

⏳ Project Details

Estimated Duration: 1.5 – 2 Hours

Difficulty Level: Beginner to Intermediate

Total Marks: 10

📸 Required Screenshots

Include the following screenshots in your repository:

Add Record Form

Record List

Edit Mode

Delete Confirmation

localStorage view in DevTools (optional)

🧾 Requirements Checklist

▶️ How to Run the Project

Clone the repository

git clone <repository-url>


Navigate to the project folder

cd LocalBox-Miner


Install dependencies

npm install


Start the development server

npm run dev


Open the browser at:

http://localhost:5173

🧠 Conclusion

LocalBox Miner is a foundational React project that bridges the gap between basic concepts and real-world frontend application development. It provides practical exposure to state-driven UI updates, persistent storage, and clean component architecture.

<img width="2612" height="3314" alt="localhost_5173_ (1)" src="https://github.com/user-attachments/assets/32c600da-bcd0-4b6b-867d-d14b845e5386" />
