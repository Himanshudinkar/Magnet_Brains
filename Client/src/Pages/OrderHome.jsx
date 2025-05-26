


//css

1.AddProduct.css


.add-product-container {
    background-color: white;
    padding: 40px;
    max-width: 500px;
    margin: 50px auto;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
  }
  
  .add-product-container h2 {
    text-align: center;
    color: #333;
    margin-bottom: 30px;
  }
  
  .add-product-form {
    display: flex;
    flex-direction: column;
  }
  
  .add-product-form label {
    margin-bottom: 6px;
    font-weight: 500;
    color: #444;
  }
  
  .add-product-form input[type="text"],
  .add-product-form input[type="number"],
  .add-product-form select,
  .add-product-form input[type="file"] {
    padding: 10px;
    margin-bottom: 20px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
  }
  
  .add-product-form input[type="file"] {
    background-color: #f9f9f9;
    padding: 8px;
  }
  
  .add-product-form select {
    background-color: #fff;
  }
  
  .add-product-form button {
    background-color: #007bff;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .add-product-form button:hover {
    background-color: #0056b3;
  }
  

2.AdminLogin.css

.admin-login-container {
    background-color: #0d1b24;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-box {
    background-color: #11232b;
    padding: 40px 30px;
    border-radius: 16px;
    box-shadow: 0 0 15px rgba(0, 255, 255, 0.1);
    width: 320px;
  }
  
  .login-title {
    text-align: center;
    color: #66ccff;
    margin-bottom: 30px;
    font-size: 24px;
  }
  
  .login-icon {
    font-size: 30px;
    margin-right: 8px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  
  .form-group label {
    color: #b0bec5;
    margin-bottom: 5px;
    font-size: 14px;
  }
  
  .form-group input {
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #1c2e38;
    color: #ffffff;
    outline: none;
  }
  
  .form-group input::placeholder {
    color: #888;
  }
  
  .submit-btn {
    background-color: #00bcd4;
    color: #fff;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .submit-btn:hover {
    background-color: #00e5ff;
    color: #000;
  }
  
  .btn-icon {
    margin-right: 8px;
  }
  

3.CartData.css

/* CartData.css */

.cart-container {
    padding: 30px;
    background-color: #11232b;
    color: #ffffff;
    min-height: 100vh;
    font-family: 'Segoe UI', sans-serif;
  }
  
  .cart-heading {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
    color: #00ffff;
  }
  
  .cart-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 40px;
  }
  
  .cart-table th,
  .cart-table td {
    padding: 15px;
    border-bottom: 1px solid #3d4d5c;
    text-align: center;
  }
  
  .cart-table th {
    background-color: #1e2f3a;
    color: #00ffff;
    font-size: 18px;
  }
  
  .cart-table td img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 255, 255, 0.4);
  }
  
  .icon-btn {
    font-size: 18px;
    color: #00ffff;
    margin: 0 8px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .icon-btn:hover {
    transform: scale(1.2);
    color: #00e6e6;
  }
  
  .total-amount {
    font-size: 24px;
    font-weight: bold;
    color: white;
    text-align: right;
    margin-bottom: 20px;
  }
  
  .checkout-btn {
    display: block;
    margin-left: auto;
    margin-right: 0;
    padding: 12px 24px;
    background-color: #f0ad4e;
    color: #11232b;
    font-size: 18px;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  .checkout-btn:hover {
    background-color: #f0ad4e;
  }
  

4.Home.css

.home-container {
    background-color: #0d1b24;
    min-height: 100vh;
    padding-bottom: 40px;
    color: #e8f0f2;
  }
  
  /* Cover Section */
  .cover-section {
    text-align: center;
    padding: 60px 20px 40px;
    background: linear-gradient(to right, #00394d, #002633);
    border-bottom: 2px solid #00607a;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }
  
  .cover-icon {
    font-size: 60px;
    color: #66ccff;
    margin-bottom: 10px;
  }
  
  .cover-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
  }
  
  .cover-subtitle {
    font-size: 18px;
    color: #d9d9d9;
  }
  
  /* Card Section */
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: center;
    padding: 40px 20px 0;
  }
  
  .product-card {
    width: 260px;
    background-color: #11232b;
    border: none;
    border-radius: 16px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.4);
    transition: transform 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
  }
  
  .product-img {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    height: 220px;
    object-fit: cover;
  }
  
  .product-name {
    font-size: 20px;
    font-weight: bold;
    color: #66ccff;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .star-icon {
    color: #facc15;
    font-size: 16px;
  }
  
  .product-desc {
    font-size: 14px;
    color: #c0c0c0;
    min-height: 50px;
  }
  
  .product-meta p {
    margin: 2px 0;
    font-size: 14px;
  }
  
  .add-btn {
    width: 100%;
    margin-top: 10px;
    background-color: #f0ad4e;
    border: none;
  }
  
  .add-btn:hover {
    background-color: #f0ad4e;
    color: black;
  }
  

5.TopNav.css


6.Footer.css
.footer {
    background-color: #0c1f2c;
    color: #ffffff;
    text-align: center;
    padding: 30px 20px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-top: 10px;
}

.footer-content h3 {
    margin-bottom: 10px;
    font-size: 24px;
    color: #f0ad4e;
}

.footer-content p {
    margin: 5px 0;
    font-size: 14px;
}

.footer-link {
    font-weight: bold;
    color: #ffffff;
    text-decoration: underline;
}

.footer-bottom {
    margin-top: 20px;
    font-size: 12px;
    color: #bbbbbb;
    border-top: 1px solid #444;
    padding-top: 10px;
}



