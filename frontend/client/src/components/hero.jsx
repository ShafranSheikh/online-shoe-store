import React, {useState, useEffect}  from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../styles/hero.css";
function Hero() {
    const [image, setImage] = useState(null);

    useEffect(()=>{
      const fetchAdImage = async () =>{
        try{
          const response = await axios.get('http://localhost:3000/api/Ads/random');
          setImage(response.data.imgSrc);
        }catch(error){
          console.error("Error fetching image", error);
        }
      }
      fetchAdImage();
    },[])
  return (
    <div className="container">
      <div className="content-box">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
export default Hero;
