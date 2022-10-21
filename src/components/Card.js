import React from 'react'
import "./CardStyles.css";
import { useNavigate } from "react-router-dom";

const Card = ({reds}) => {

    const navigate = useNavigate();

    return (

   
        <div className="box">{
            reds.map((cur, index) => {
                return (

                    <div className="card_item" key={index}>
                        <div className="card_inner">
                        <img
                            src={`https://api.portalmec.c3sl.ufpr.br/${cur.thumbnail}`}
                            alt="thumbnail"
                        />
                            <div className="Name">{cur.name}</div>
                            <button className="see" onClick={() => navigate(`/RED/${cur.id}`)}>VER</button>
                        </div>

                    </div>
                )
            })
            }

        </div>              

    )
}

export default Card;