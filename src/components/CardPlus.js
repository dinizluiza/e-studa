import React, { useEffect, useState } from 'react'
import "./CardPlusStyles.css";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const CardPlus = () => {

    const [reds, setREDs] = useState([]);
    const [tags, setTags] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    const getREDs = async () => {
        const result = await fetch("https://api.portalmec.c3sl.ufpr.br/v1/learning_objects/"+params.id);
        const APIdata = await result.json();
        setREDs(APIdata)

        const tagslist = [];

        for (let i = 0; i < reds.tags.length; i++) {
            tagslist.push(reds.tags[i].name);
        }

        setTags(tagslist.join(', '));

    }

    useEffect(() => {
        getREDs();
    }, [])


    return (
        <div className="boxPlus">{
            <div className="card_itemPlus">
                <div className="card_innerPlus">
                    <button className="back" onClick={() => navigate('/')}>VOLTAR</button>
                    <div className="NamePlus">{reds.name}</div>
                    <img className="imgPlus"
                            src={`https://api.portalmec.c3sl.ufpr.br/${reds.thumbnail}`}
                            alt="thumbnail"
                        />
                    <div className="DescriptionTitle">Descrição:</div>
                    <div className="Description">{reds.description}</div>
                    <div className="AuthorTitle">Autor(es):</div>
                    <div className="Author">{reds.author}</div>
                    <div className="CategoryTitle">Categoria:</div>
                    <div className="Category">{reds.object_type}</div>
                    <div className="TagsTitle">Palavras-chave(s): </div>
                    <div className="Tags">{tags}</div>
                    <button className="source" onClick={() => {window.open(`https://portalmec.c3sl.ufpr.br/recurso/${params.id}`,"_blank");
                    }}>FONTE</button>
                </div>
            </div>
        }
        </div>
  )
}

export default CardPlus