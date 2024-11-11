import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/item.css'
const AdminWomenItem = () => {
    const [imgFile, setImgFile] = useState(null);
    const [womenItems, setWomenItem] = useState([]);
    const [selectedImage, setSecectedImage] = useState(null);
    const [wName, setWname] = useState("");
    const [wPrice, setWprice] = useState("");
    const [wQty, setWQuantity] = useState("");
    const [wDescription, setWdescription] = useState("");
    const navigate = useNavigate();
    //fetching images from the backend
    useEffect(() => {
      const fetchWomenItem = async () =>{
        try{
          const response = await axios.get('http://localhost:3000/api/Womens')
          setWomenItem(response.data);
        }catch(error){
          console.error('Error fetching Women items',error);
        };
      }
      fetchWomenItem();
    }, []);
    
    //handle file selection
    const handleFileChange =(e) =>{
      const file = e.target.files[0];
      setImgFile(file);
      setSecectedImage(file);
    }
    //handle men item upload
    const handleFormSubmit = async (e) => {
      e.preventDefault();
      if(!imgFile){
        console.error("No files selected.");
        return;
      }
      try {
          const formdata = new FormData();
          formdata.append("image", imgFile);
          formdata.append("name", wName);
          formdata.append("price", wPrice);
          formdata.append("quantity", wQty);
          formdata.append("description", wDescription);
          //send images to the backend
          try{
            const response = await axios.post("http://localhost:3000/api/Womens",formdata,{
              headers:{
                'content-type':'multipart/form-data'
              },
            });
            alert('Item Uploades successfully');
            setImgFile(null);
            setSecectedImage(null);
            setWname("");
            setWprice("");
            setWQuantity("");
            setWdescription("");
          }catch(error){
            console.error("Error uploading Women Item",error);
          }
      } catch (error) {
        console.error("Error uploading Item", error);
      }
    };
  
    //handle image delete
    const handleDelete = async (id) => {
      try{
        const response = await axios.delete(`http://localhost:3000/api/Womens/${id}`);
        if(response.data.success){
          //remove the deleted item from the state
          setWomenItem(womenItems.filter((item)=> item.id !== id));
          alert('Item Deleted Successfully');
        }else{
          console.error("Error deleting image", response.data.message);
              alert(response.data.message); // Inform the user of the error
        }
      }catch (error) {
        console.error("Error deleting image.", error);
        alert('Failed to delete the item. Please try again.'); // Inform the user of the error
      }
      
    };
    return (
      <div className="mens-container">
        <h2>Manage Women's Items</h2>
        <button className="home-button" onClick={() => navigate("/AdminDashboard")}>
          Go to Dashboard
        </button>
  
        <div className="form-section">
          <form onSubmit={handleFormSubmit} >
            <label className="upload-label">
              Add New Women Item Image:
              <input type="file" name="image"  onChange={handleFileChange}/>
            </label>
            <label>
              Product Name:
              <input type="text" name="name"  value={wName} onChange={(e)=>setWname(e.target.value)}/>
            </label>
            <label>
              Product Price:
              <input type="number" name="price" value={wPrice} onChange={(e)=>setWprice(e.target.value)}/>
            </label>
            <label>
              Product Quantity:
              <input type="number" name="quantity" value={wQty} onChange={(e)=>setWQuantity(e.target.value)}/>
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={wDescription}
                rows="3"
                onChange={(e)=>setWdescription(e.target.value)}
              />
            </label>
            <button type="submit" className="submit-button">
              Add Item
            </button>
          </form>
  
          {selectedImage && (
            <div className="preview">
              <h4>Preview:</h4>
              <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
            </div>
          )}
        </div>
  
        <table className="ads-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {womenItems.map((women) => (
              <tr key={women.id}>
                <td>
                  <img
                    src={women.data}
                    alt={`Item ${women.id}`}
                    className="ad-image"
                  />
                </td>
                <td>{women.name}</td>
                <td>${women.price}</td>
                <td>{women.quantity}</td>
                <td className="item-description">{women.description}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(women.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export  default AdminWomenItem;