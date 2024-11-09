import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../styles/adminStyles/items.css';
const AdminKidItem = () => {
    const [imgFile, setImgFile] = useState(null);
    const [kidItems, setKidItem] = useState([]);
    const [selectedImage, setSecectedImage] = useState(null);
    const [kName, setKname] = useState("");
    const [kPrice, setKprice] = useState("");
    const [kQty, setKQuantity] = useState("");
    const [kDescription, setKdescription] = useState("");
    const navigate = useNavigate();
    //fetching images from the backend
    useEffect(() => {
      const fetchKidItem = async () =>{
        try{
          const response = await axios.get('http://localhost:3000/api/Kids')
          setKidItem(response.data);
        }catch(error){
          console.error('Error fetching Women items',error);
        };
      }
      fetchKidItem();
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
          formdata.append("name", kName);
          formdata.append("price", kPrice);
          formdata.append("quantity", kQty);
          formdata.append("description", kDescription);
          //send images to the backend
          try{
            const response = await axios.post("http://localhost:3000/api/Kids",formdata,{
              headers:{
                'content-type':'multipart/form-data'
              },
            });
            alert('Item Uploades successfully');
            setImgFile(null);
            setSecectedImage(null);
            setKname("");
            setKprice("");
            setKQuantity("");
            setKdescription("");
          }catch(error){
            console.error("Error uploading Kid Item",error);
          }
      } catch (error) {
        console.error("Error uploading Item", error);
      }
    };
  
    //handle image delete
    const handleDelete = async (id) => {
      try{
        const response = await axios.delete(`http://localhost:3000/api/Kids/${id}`);
        if(response.data.success){
          //remove the deleted item from the state
          setKidItem(kidItems.filter((item)=> item.id !== id));
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
        <h2>Manage Kid's Items</h2>
        <button className="home-button" onClick={() => navigate("/AdminDashboard")}>
        Go to Dashboard
        </button>
  
        <div className="form-section">
          <form onSubmit={handleFormSubmit} >
            <label className="upload-label">
              Add New Kid Item Image:
              <input type="file" name="image"  onChange={handleFileChange}/>
            </label>
            <label>
              Product Name:
              <input type="text" name="name"  value={kName} onChange={(e)=>setKname(e.target.value)}/>
            </label>
            <label>
              Product Price:
              <input type="number" name="price" value={kPrice} onChange={(e)=>setKprice(e.target.value)}/>
            </label>
            <label>
              Product Quantity:
              <input type="number" name="quantity" value={kQty} onChange={(e)=>setKQuantity(e.target.value)}/>
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={kDescription}
                rows="3"
                onChange={(e)=>setKdescription(e.target.value)}
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
            {kidItems.map((kid) => (
              <tr key={kid.id}>
                <td>
                  <img
                    src={kid.data}
                    alt={`Item ${kid.id}`}
                    className="ad-image"
                  />
                </td>
                <td>{kid.name}</td>
                <td>${kid.price}</td>
                <td>{kid.quantity}</td>
                <td className="item-description">{kid.description}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(kid.id)}
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
export default AdminKidItem;
