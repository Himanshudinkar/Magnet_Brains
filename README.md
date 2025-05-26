E-commerce MERN Stack Application

This is a fully functional E-commerce web application built using the MERN Stack – MongoDB, Express.js, React.js, and Node.js. The application allows admin users to add products, view all orders, and customers to browse items, add to cart, and proceed to checkout using Stripe.

Tech Stack

Frontend: React.js (with Vite)  
Backend: Node.js, Express.js  
Database: MongoDB (Atlas)  
Other Tools: Axios, FormData, Multer, MongoDB Compass, Postman, Stripe

Folder Structure

ecommerce/
├── client/ (React frontend)
├── server/ (Express backend)
├── .env
├── package.json
└── README.md

Features

Admin Panel:
- Admin login
- Add product with image upload
- Choose brand and category
- View all orders with order date
- Orders sorted by latest
- Store product and order data in MongoDB

User Panel:
- View all products
- Add to cart
- Proceed to checkout using Stripe
- Order details saved in database

How to Run This Application

1. Clone the Repository
git clone https://github.com/Himanshudinkar/Magnet_Brains
cd ecommerce

2. Setup Backend
cd server
npm install

Create a `.env` file inside /server with the following:

PORT=8080  
MONGO_URL= find in.env fil
STRIPE_SECRET_KEY= find in.env fil

Start the backend
npm start

3. Setup Frontend
cd ../client
npm install
npm run dev

Frontend runs on: http://localhost:5173  
Backend runs on: http://localhost:8080

Stripe Payment Setup

- Stripe integrated with `react-stripe-checkout` or custom form
- Uses secret key from environment
- On successful payment, order data is stored with:
  - Product info
  - Customer name
  - Email
  - Total price
  - Order date

Image Upload Setup

- Uses Multer for file uploads
- Ensure /uploads folder exists in backend
- Serve images using:
  app.use('/uploads', express.static('uploads'));

API Endpoints

POST    /admin/adminlogin           (Admin login)  
POST    /admin/product              (Add product with image)  
GET     /ecommerce/displayproduct   (Display all products)  
POST    /create-checkout-session    (Stripe session)  
POST    /saveorder                  (Save order after payment)  
GET     /admin/orders               (Get all orders with current date)


