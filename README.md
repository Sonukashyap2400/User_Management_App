🚀 User Management Dashboard (React + Reqres API)
A simple React-based User Management system where users can:

Login (via a fake token)

View paginated users

Edit user details

Delete users
All interactions are powered by the Reqres API, a hosted REST-API for front-end testing.

📸 Demo Preview
Here is the live link-

🛠️ Features
🔐 Login with token using Reqres test credentials

📄 Paginated users list (fetched from API)

📝 Edit users with instant update in UI

❌ Delete users from UI

🔄 Realtime feedback with loading spinners and toast messages

✅ Clean UI built using Tailwind CSS

📦 Tech Stack
⚛️ React

📦 Axios

📋 React Toastify

💨 Tailwind CSS

🧪 Reqres API (for mock backend)

🔧 Getting Started
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the App
bash
Copy
Edit
npm start
App will run on http://localhost:3000

🧪 Test Login Credentials (from Reqres)
Use the following dummy credentials to login:

bash
Copy
Edit
Email: eve.holt@reqres.in
Password: anypassword
You will receive a token which is saved in localStorage.

📡 API Endpoints Used
Function	Method	Endpoint	Description
Login	POST	/login	Logs in and returns a token
Get Users	GET	/users?page=1	Fetches paginated list of users
Update User	PUT	/users/{id}	Updates user data
Delete User	DELETE	/users/{id}	Deletes the user
All requests are made using Axios with interceptors to attach the auth token and handle errors via React Toastify.

📁 Project Structure
user-management-app/
src/
├── components/
│   ├── UserForm.jsx         # Component to edit/update user details
│   ├── UserList.jsx         # Displays list of users with Edit/Delete
│   └── Login.jsx            # Login form component
│
├── services/
│   ├── api.js               # Axios instance and API methods (login, getUsers, updateUser,  deleteUser)
│   └── auth.jsx             # Authentication context and logic (login, logout, token handling)
│
├── App.js                   # Main application component with routes
└── index.js                 # Entry point, renders the app


🔐 Auth Flow
When a user logs in, the token is saved in localStorage

Axios interceptors automatically add this token to headers:
Authorization: Bearer <token>

On logout, the token is removed

⚙️ Custom Toast & Error Handling
js
Copy
Edit
toast.success('User updated successfully');
toast.error('Failed to update user');
Handled using global Axios response interceptors.

📌 To Do / Improvements
Add user creation functionality

Improve form validation

Add role-based access control

Add dark mode toggle 🌙

🤝 Credits
Reqres API

React

Tailwind CSS

React Toastify

📄 License
This project is open source and free to use.