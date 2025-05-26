import axios from "axios";
import { useState } from "react";
import {message} from "antd"
import '@ant-design/v5-patch-for-react-19';

const AddProduct = () => {
  const [input, setInput] = useState({});
  const [image, setImage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("name", input.name);
    formdata.append("description", input.description);
    formdata.append("brand", input.brand);
    formdata.append("category", input.category);
    formdata.append("price", input.price);
    formdata.append("image", image);

    try {
      const api = "http://localhost:8080/admin/product";
      const response = await axios.post(api, formdata);
      console.log(response.data);
      message.success("Product Added")
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="add-product-container">
      <h2>Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <label>Product Name</label>
        <input type="text" name="name" onChange={handleInput} placeholder="Enter product name" />

        <label>Description</label>
        <input type="text" name="description" onChange={handleInput} placeholder="Enter product description" />

        <label>Brand Name</label>
        <select name="brand" onChange={handleInput}>
          <option>Choose Brand</option>
          <option value="Rolex">Rolex</option>
          <option value="Audemars Piguet">Audemars Piguet</option>
          <option value="Patek Philippe">Patek Philippe</option>
          <option value="Richard Mille">Richard Mille</option>
          <option value="Longines">Longines</option>
          <option value="Vacheron Constantin">Vacheron Constantin</option>
          <option value="Timex">Timex</option>
          <option value="Titne">Titne</option>
          <option value="Sonata">Sonata</option>
        </select>

        <label>Category</label>
        <select name="category" onChange={handleInput}>
          <option>Choose Category</option>
          <option value="Luxury">Luxury</option>
          <option value="Sports">Sports</option>
          <option value="Casual">Casual</option>
          <option value="Chronograph Watches">Chronograph Watches</option>
          <option value="Hybrid Watches">Hybrid Watches</option>
        </select>

        <label>Price</label>
        <input type="number" name="price" onChange={handleInput} placeholder="Enter price in ₹" />

        <label>Choose Image</label>
        <input type="file" name="image" onChange={handleImage} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
