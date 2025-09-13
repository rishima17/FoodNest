# Food-App 🍔📦

Food-App is a full-stack Food Delivery Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse restaurants, order food, make payments, and track deliveries in real-time.

---
Live Demo :- https://rishima-foodnest.vercel.app/

## Features
- **User Authentication:** Register, login, and secure sessions.
- **Browse Restaurants & Menus:** View restaurants, their cuisines, and food items.
- **Add to Cart & Place Orders:** Users can add items to a cart and place orders.
- **Payment Integration:** Secure payment gateway integrated (Stripe/PayPal).
- **Order Tracking:** Track the status of your order in real-time.
- **Responsive Design:** Works smoothly on desktop and mobile devices.

---

## Technologies Used
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Payment Gateway:** Stripe
- **File Uploads:** Multer
- **Deployment:** Vercel (frontend), Render / Heroku (backend)
- **Others:** Axios for HTTP requests, CORS for API security

---

## Installation

### Clone the repository
```bash
git clone https://github.com/rishima17/Food-app.git
Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file in backend/ with the following:

ini
Copy code
MONGO_URL=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
STRIPE_KEY=<your_stripe_key>  # if using Stripe
Start the backend server:

bash
Copy code
npm run server
Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
The app will run on http://localhost:3000

Usage
Register as a new user or login if you already have an account.

Browse restaurants and add your favorite dishes to the cart.

Make payments securely via integrated gateway.

Track your order status in real-time.

Folder Structure
pgsql
Copy code
food-app/
├─ backend/
│  ├─ controllers/
│  ├─ middlewares/
│  ├─ models/
│  ├─ routes/
│  ├─ server.js
├─ frontend/
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ context/
│  │  ├─ App.jsx
│  │  ├─ index.jsx
├─ README.md
Future Enhancements
Real-time chat support for delivery queries

Push notifications for order updates

Ratings & Reviews for restaurants

Contributing
Fork the repository

Create a new branch (git checkout -b feature-name)

Make your changes and commit (git commit -m "Add feature")

Push to the branch (git push origin feature-name)

Open a Pull Request






