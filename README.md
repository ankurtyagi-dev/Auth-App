# Auth-App

A REST API for user authentication built with **Node.js**, **Express.js**, and **MongoDB**.  
Supports registration, login, protected routes, and token-based authentication.

## 🚀 Features

- User signup (register)
- User login with JWT
- Password hashing with bcrypt
- Protected routes with authentication middleware
- MongoDB for data persistence

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Environment:** dotenv

## 📁 Project Structure

```
Auth-App/
├── Controllers/
│   └── Auth.js
├── Modals/
│   └── User.js
├── Routes/
│   └── user.js
├── config/
│   └── database.js
├── middlewares/
│   └── auth.js
├── index.js
├── package.json
├── README.md
└── .env (create this file)
```

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/ankurtyagi-dev/Auth-App.git
   cd Auth-App
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file in the root directory and add the following:**

   ```env
   PORT=5000
   DATABASE_URL=mongodb://localhost:27017/authapp
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the server**

   ```bash
   npm run dev
   ```

   The server will run at `http://localhost:5000`.

## 📡 API Endpoints

**Base URL:** `http://localhost:5000/api/v1/auth`

| Method | Endpoint   | Description              |
|--------|------------|--------------------------|
| POST   | /register  | Register a new user      |
| POST   | /login     | Login user and get token |
| GET    | /profile   | Get logged-in user profile |

## 🧠 Example Requests

### Register User

```http
POST /api/v1/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "strongpassword123"
}
```

### Login User

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "strongpassword123"
}
```

### Protected Route (Example)

Include the JWT token in the Authorization header:

```http
GET /api/v1/auth/profile
Authorization: Bearer <token>
```

## 🧪 Response Examples

### Success (Login)

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Error (Invalid Credentials)

```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

## 🤝 Contributing

1. Fork the project
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to your branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📜 License

This project is open source and available under the [MIT License](LICENSE).
