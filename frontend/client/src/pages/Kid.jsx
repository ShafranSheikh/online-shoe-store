import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/men.css'
const Kid = ()=>{
    const [kidItem, setKidItem] = useState([]);
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchKidItem = async () =>{
            try{
                const response = await axios.get('http://localhost:3000/api/Kids')
                setKidItem(response.data);

            }catch(error){
                console.error('Error fetching Kid items',error);
            };
        }
        fetchKidItem();
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
                    <img src={image} alt="" className={`fade-in ${loading ? ' loaded' : ''}`} />
                </div>
                <div className="Itemcard-container">
                {kidItem.map((kid)=>(
                    <div className="Itemcard" key={kid.id}>
                        <img src={kid.data} alt="" />
                        <div className="content-container">
                            <h2>{kid.name}</h2>
                            <h5>price: ${kid.price}</h5>
                            <div className="card-buttonContainer">
                                <button onClick={() => navigate(`/MensShoeDetails/${kid.id}`, {state:kid} )}>View Product</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

    );
}
export default Kid;