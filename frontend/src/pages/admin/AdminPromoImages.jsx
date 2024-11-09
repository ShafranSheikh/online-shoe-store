import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/adminStyles/ads.css'
const AdminPromoImages = () => {
    const [image, setImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const [images, setImages] = useState([]);
    
    //fetch images on component mount
    useEffect(()=>{
        const fetchImages = async () =>{
            try{
                const response = await axios.get('http://localhost:3000/api/Ads');
                setImages(response.data);
            }catch(error){
                console.error('Error fetching images:',error);
            }
        };
        fetchImages();
    },[])
    // Handle image upload
    const handleIMageChange =(e) =>{
        setImage(e.target.files[0]);
    }
    const handleImageUpload = async (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image',image);

        try{
            const response = await axios.post('http://localhost:3000/api/Ads',formData,{
                headers:{
                    'Content-Type': 'multipart/form-data'
                },
            });
            alert('Image Uploaded Successfully');
        }catch (error){
            console.error('Error uploading image:',error);
        }
    };
    //Handle image delete
    const handleDelete = async (id) =>{
        try{
            await axios.delete(`http://localhost:3000/api/Ads/${id}`);
            setImages(images.filter(image => image.id !== id));
        }catch (error){
            console.log('Error Deleting IMage',error);
        }
    }
    return (
        <div className="ad-panel">
            <h2>Manage Ads</h2>
            <button className="home-button" onClick={() => navigate('/AdminDashboard')}>Go to Dashboard</button>
            <div className="form-section">
                <form onSubmit={handleImageUpload}>
                    <label className="upload-label">
                        Add New Ad Image:
                        <input type="file" name="image" onChange={handleIMageChange} />
                    </label>
                    <label className="upload-label">
                        <input className='home-button' type="submit" value="Upload Image" />
                    </label>
                </form>

                {selectedImage && (
                    <div className="preview">
                        <h4>Preview:</h4>
                        <img src={selectedImage} alt="Selected" />
                    </div>
                )}
            </div>
            <table className="ads-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {images.map((img) => (
                  <tr key={img.id}>
                    <td>
                      <img src={img.data} alt={img.name} className="ad-image" />
                    </td>
                    <td>
                      <button className="delete-button" onClick={() => handleDelete(img.id)}>
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
export default AdminPromoImages;
