import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/men.css'
const Men = ()=>{
    const [menItem, setMenItem] = useState([]);
    const [image, setImage] = useState(null);
    const navigate = useNavigate();


    const fetchRandomImage = async ()=>{
        try{
            const response = await axios.get('http://localhost:3000/api/Ads/random');
            setImage(response.data.imgsrc);
        }catch(error){
            console.error("Error Fetching Images", error);
        }
    };
    
    useEffect(()=>{
        fetchRandomImage();

        const interval = setInterval(()=>{
            fetchRandomImage();
        },15000);
        return () => clearInterval(interval); //cleanup interval on component unmount
    })
    
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

    return(
            <div className="menItem-container">
                <div className="promo-container">
                    <img src={image} alt="" />
                </div>
                <div className="Itemcard-container">
                {menItem.map((men)=>(
                    <div className="Itemcard" key={men.id}>
                        <img src={men.data} alt="" />
                        <div className="content-container">
                            <h2>{men.name}</h2>
                            <h5>price: ${men.price}</h5>
                            <div className="card-buttonContainer">
                                <button onClick={() => navigate(`/MensShoeDetails/${men.id}`, {state:men} )}>View Product</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

    );
}
export default Men;