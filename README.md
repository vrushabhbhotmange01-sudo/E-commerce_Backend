🛒 E-Commerce Backend API

A scalable and secure backend built with Node.js, Express, and MongoDB, designed for managing users, products, carts, and orders.
Includes JWT authentication, bcrypt-based password hashing, and role-based route protection.

---

## ⚙️ Tech Stack

Backend: Node.js, Express.js
Database: MongoDB (Mongoose ODM)
Authentication: JWT, bcrypt
Environment Management: dotenv
Testing Tool: Postman

---

## 🚀 Live Demo
🔗 [Live API](https://e-commerce-backend-eu4b.onrender.com)

🧪 [Postman Collection](https://vrushabhbhotmange01-5159632.postman.co/workspace/Vrushabh-Bhotmange's-Workspace~af3d36d0-36b4-4bf2-8033-3f2374248426/request/49645752-12d0dd39-6df2-4050-a3cf-25cb12e0760b?action=share&creator=49645752&ctx=documentation)

---

## 🧱 Features

👤 User Authentication & Authorization using JWT
🛍️ Product CRUD Operations (create, read, update, delete)
🛒 Cart System – add, update quantity, remove items
📦 Order Management with automatic total calculation
🔐 Role-Based Access (admin vs user)
🧠 Clean MVC (Model–View–Controller) architecture 

---

## 📚 Endpoints Summary

👤 Authentication
| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| `POST` | `/api/users/register` | Register new user   |
| `POST` | `/api/users/login`    | Login and get token |
| Method   | Endpoint            | Description

🛍️ Products        |
| -------- | ------------------- | ----------------------------- |
| `GET`    | `/api/products`     | Get all products              |
| `GET`    | `/api/products/:id` | Get product by ID             |
| `POST`   | `/api/products`     | Create product *(Admin only)* |
| `PATCH`  | `/api/products/:id` | Update product *(Admin only)* |
| `DELETE` | `/api/products/:id` | Delete product *(Admin only)* |

🛒 Cart
| Method   | Endpoint            | Description                |
| -------- | ------------------- | -------------------------- |
| `POST`   | `/api/cart`         | Add product to cart        |
| `GET`    | `/api/cart/:userId` | Get cart for specific user |
| `DELETE` | `/api/cart/:id`     | Remove item from cart      |

📦 Orders
| Method | Endpoint      | Description                   |
| ------ | ------------- | ----------------------------- |
| `POST` | `/api/orders` | Create new order              |
| `GET`  | `/api/orders` | Get all orders *(Admin only)* |

---

## 🧩 Folder Structure
/config         → Database configuration
/controllers    → Business logic for routes
/models         → MongoDB schemas
/routes         → Route definitions
/middleware     → Authentication & authorization middlewares
server.js       → Entry point


---

## 🧰 How to Run Locally
```bash
git clone https://github.com/yourusername/ecommerce-backend.git
cd ecommerce-backend
npm install
npm start

Create .env:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
PORT=5000
