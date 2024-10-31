import React, { useEffect, useState } from 'react'
import '../styles/men.css'
const Men = ()=>{
    const [menItem, setMenItem] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/api/Mens")
            .then((response) => response.json())
            .then((data) => setMenItem(data))
            .catch((err) => console.error("Error getting Data", err));
    },[]);

    return(
            <div className="menItem-container">
                <div className="promo-container">
                    <img src="https://placehold.co/1200x250" alt="" />
                </div>
                <div className="Itemcard-container">
                {menItem.map((mItem, index)=>(
                    <div className="Itemcard" key={mItem.id || index}>
                        <img src={mItem.image} alt="" />
                        <div className="content-container">
                            <h2>{mItem.name}</h2>
                            <h5>price: ${mItem.price}</h5>
                            <div className="description-container">
                                <p>{mItem.description}</p>
                            </div>
                            
                            <div className="card-buttonContainer">
                                <button>View Product</button>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

    );
}
export default Men;