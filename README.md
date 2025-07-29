# QA Engineer Challenge – REM Waste

Welcome to my solution for the QA Engineer (Automation Specialist) challenge from REM Waste. This project is based on the task provided in the evaluation email and demonstrates my ability to design and implement automated tests for a full-stack application.

---

## Objetive

Design and implement automated tests for a small web application consisting of a React frontend and a Node.js backend API. The application under test simulates a real estate listing platform.

---

## Tech Stack

- **Language:** JavaScript
- **Test Runner:** [Cypress]
- **IDE:** VSCode
- **API Testing:** Cypress + Postman (manual validation)
- **Documentation:** Swagger
- **Version Control:** Git + GitHub

---

## Covered Requirements

### 🔹 UI Automation (Cypress)
- [x] Login with valid/invalid credentials
- [x] Create a new item (registration and listing)
- [x] Edit an existing item
- [x] Delete an item (new user and new listing)
- [x] Assert expected data after actions

### 🔹 API Test Automation (Postman)
https://github.com/alvaroescoto/DelekHomes-CI-Demo/blob/main/DelekHomes-API-Collection.postman_collection.json

- [x] POST /login
- [x] GET /items
- [x] POST /items
- [x] PUT /items/:id
- [x] DELETE /items/:id

### 🔹 CI/CD
- [x] GitHub Actions to run tests on every push

---

##  How to Run the Tests Locally

### 🧱 Prerequisites
- [Node.js](https://nodejs.org/) installed
- [Git](https://git-scm.com/) installed.
- Chrome or Chromium-based browser installed

### 🚨 1. Clone the Repository
```bash
git clone git@github.com:alvaroescoto/DelekHomes-CI-Demo.git
cd DelekHomes-CI-Demo




