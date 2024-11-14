import React,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/banner.css';
import axios from 'axios';
function Banner(){
    const [menBannerItems , setMenBannerItems] = useState([]);
    const [kidBannerItems , setKidBannerItems] = useState([]);
    const [womenBannerItems , setWomenBannerItems] = useState([]);
    const [price, setPrice] = useState(null);
    const navigate = useNavigate();
    const handleClick = () => {
        alert('clicked');
    }
    useEffect(()=>{
        const fetchrandomMenImage = async () => {
            try{
                const response = await axios.get("http://localhost:3000/api/Mens/random/menitems");
                setMenBannerItems(response.data);
                setPrice(response.data.price); // Set price from the response
            }catch(error){
                console.error('error fetching images',error);
            }   
        }
        fetchrandomMenImage();
    },[]);
    useEffect(()=>{
        const fetchrandomKidImage = async () => {
            try{
                const response = await axios.get("http://localhost:3000/api/Kids/random/kiditems");
                setKidBannerItems(response.data);
                setPrice(response.data.price); // Set price from the response
            }catch(error){
                console.error('error fetching images',error);
            }   
        }
        fetchrandomKidImage();
    },[]);
    useEffect(()=>{
        const fetchrandomWomenImage = async () => {
            try{
                const response = await axios.get("http://localhost:3000/api/Womens/random/womenitems");
                setWomenBannerItems(response.data);
                setPrice(response.data.price); // Set price from the response
            }catch(error){
                console.error('error fetching images',error);
            }   
        }
        fetchrandomWomenImage();
    },[]);
    
    return(
        <div className="banner-container">
            {menBannerItems.length > 0 ? (
                menBannerItems.map((men, index) => (
                    <div key={index} className="bannercard-container">
                        <img src={men.data} alt={men.name} onClick={() => navigate(`/MensShoeDetails/${men.id}`, {state:men} )} />
                        <h3>Price: ${men.price || 'N/A'}</h3>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            {kidBannerItems.length > 0 ? (
                kidBannerItems.map((item, index) => (
                    <div key={index} className="bannercard-container">
                        <img src={item.imgSrc} alt={item.name} onClick={() => handleClick(item.name)} />
                        <h3>Price: ${item.price || 'N/A'}</h3>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
            {womenBannerItems.length > 0 ? (
                womenBannerItems.map((item, index) => (
                    <div key={index} className="bannercard-container">
                        <img src={item.imgSrc} alt={item.name} onClick={() => handleClick(item.name)} />
                        <h3>Price: ${item.price || 'N/A'}</h3>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
export default Banner;