import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/men.css'
const Men = ()=>{
    const [menItem, setMenItem] = useState([]);
    const navigate = useNavigate();
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
                    <img src="https://placehold.co/1200x250" alt="" />
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