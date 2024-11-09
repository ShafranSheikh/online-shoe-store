import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../../styles/adminStyles/items.css'
const AdminMenItem = () => {
    const [imgFile, setImgFile] = useState(null);
    const [menItems, setMenItem] = useState([]);
    const [selectedImage, setSecectedImage] = useState(null);
    const [mName, setMname] = useState("");
    const [mPrice, setMprice] = useState("");
    const [mQty, setMQuantity] = useState("");
    const [mDescription, setMdescription] = useState("");
    const navigate = useNavigate();
    //fetching images from the backend
    useEffect(() => {
      const fetchMenItem = async () =>{
        try{
          const response = await axios.get('http://localhost:3000/api/Mens')
          setMenItem(response.data);
        }catch(error){
          console.error('Error fetching Men items',error);
        };
      }
      fetchMenItem();
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
          formdata.append("name", mName);
          formdata.append("price", mPrice);
          formdata.append("quantity", mQty);
          formdata.append("description", mDescription);
          //send images to the backend
          try{
            const response = await axios.post("http://localhost:3000/api/Mens",formdata,{
              headers:{
                'content-type':'multipart/form-data'
              },
            });
            alert('Item Uploades successfully');
            setImgFile(null);
            setSecectedImage(null);
            setMname("");
            setMprice("");
            setMQuantity("");
            setMdescription("");
          }catch(error){
            console.error("Error uploading Men Item",error);
          }
      } catch (error) {
        console.error("Error uploading Item", error);
      }
    };
  
    //handle image delete
    const handleDelete = async (id) => {
      try{
        const response = await axios.delete(`http://localhost:3000/api/Mens/${id}`);
        if(response.data.success){
          //remove the deleted item from the state
          setMenItem(menItems.filter((item)=> item.id !== id));
          alert('ItemDeleted Successfully');
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
        <h2>Manage Men's Items</h2>
        <button className="home-button" onClick={() => navigate("/AdminDashboard")}>
        Go to Dashboard
        </button>
  
        <div className="form-section">
          <form onSubmit={handleFormSubmit} >
            <label className="upload-label">
              Add New Men Item Image:
              <input type="file" name="image"  onChange={handleFileChange}/>
            </label>
            <label>
              Product Name:
              <input type="text" name="name"  value={mName} onChange={(e)=>setMname(e.target.value)}/>
            </label>
            <label>
              Product Price:
              <input type="number" name="price" value={mPrice} onChange={(e)=>setMprice(e.target.value)}/>
            </label>
            <label>
              Product Quantity:
              <input type="number" name="quantity" value={mQty} onChange={(e)=>setMQuantity(e.target.value)}/>
            </label>
            <label>
              Description:
              <textarea
                name="description"
                value={mDescription}
                rows="3"
                onChange={(e)=>setMdescription(e.target.value)}
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
            {menItems.map((men) => (
              <tr key={men.id}>
                <td>
                  <img
                    src={men.data}
                    alt={`Item ${men.id}`}
                    className="ad-image"
                  />
                </td>
                <td>{men.name}</td>
                <td>${men.price}</td>
                <td>{men.quantity}</td>
                <td className="item-description">{men.description}</td>
                <td>
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(men.id)}
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

export default AdminMenItem;
