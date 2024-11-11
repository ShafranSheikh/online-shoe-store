import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/men.css'

function Women(){
    const [womenItem, setWomenItem] = useState([]);
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
    return(
        <div className="menItem-container">
            <div className="promo-container">
                <img src="https://placehold.co/1200x250" alt="" />
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