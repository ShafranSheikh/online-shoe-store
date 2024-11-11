import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/men.css'
const Kid = ()=>{
    const [kidItem, setKidItem] = useState([]);
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

    return(
            <div className="menItem-container">
                <div className="promo-container">
                    <img src="https://placehold.co/1200x250" alt="" />
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