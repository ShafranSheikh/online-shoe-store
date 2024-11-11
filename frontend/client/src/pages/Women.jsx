import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/men.css'

function Women(){
    const [womenItem, setWomenItem] = useState([]);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
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
    const fetchRandomImage = async ()=>{
        try{
            setLoading(false); // Start with loading as false
            const response = await axios.get('http://localhost:3000/api/Ads/random');
            setImage(response.data.imgSrc);
            setLoading(true); // Trigger the animation after loading
        }catch(error){
            console.error("Error Fetching Images", error);
        }
    };
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            fetchRandomImage();
        },6000);
        return () => clearInterval(interval); //cleanup interval on component unmount
    },[]);
    return(
        <div className="menItem-container">
            <div className="promo-container">
                <img src={image} alt="" className={`fade-in ${loading ? ' loaded' : ''}`} />
            </div>
            <div className="Itemcard-container">
            {womenItem.map((women)=>(
                <div className="Itemcard" key={women.id}>
                    <img src={women.data} alt="" />
                    <div className="content-container">
                        <h2>{women.name}</h2>
                        <h5>price: ${women.price}</h5>
                        <div className="card-buttonContainer">
                            <button onClick={() => navigate(`/WomensShoeDetails/${women.id}`, {state:women} )}>View Product</button>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}
export default Women;