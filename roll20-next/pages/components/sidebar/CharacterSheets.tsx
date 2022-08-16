import React, { useEffect, useState } from "react";
import { useContext } from "react";
import MyContext from "../../core/MyContext";
import Collapse from "../../../node_modules/react-bootstrap/esm/Collapse";

export default function CharacterSheets(){
    const [charactersToDisplay, setCharactersToDisplay] = useState([]);
    const [openChar, setOpenChar] = useState(false);
    const [openNPC, setOpenNPC] = useState(false);

    const value = useContext(MyContext);

    useEffect(() => {
        async function getPageData(){
            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: "SELECT idpersonagem, nomepersonagem FROM personagens"
                })
            }

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();
            setCharactersToDisplay(res.results);
        }

        getPageData();
    });

    return (
        <>
            <div className="bg-dark scroll">
                <ul className="h-75 text-white text-start">
                    <div className="mb-2 font-bold cursor-pointer" onClick={() => setOpenChar(!openChar)} aria-controls="caracters" aria-expanded={openChar}>Personagens</div>
                    <Collapse in={openChar}>
                        <div id="example-collapse-text">
                            <ul>
                                {charactersToDisplay ? charactersToDisplay.map(char => {
                                    return <li key={char.idpersonagem} onClick={() => value.changeState(char.idpersonagem, '')} className="cursor-pointer">{char.nomepersonagem}</li>
                                }) : ''}
                            </ul>
                        </div>
                    </Collapse>
                    <div className="mb-2 font-bold cursor-pointer" onClick={() => setOpenNPC(!openNPC)} aria-controls="caracters" aria-expanded={openNPC}>NPCS</div>
                    <Collapse in={openNPC}>
                        <div id="example-collapse-text">
                            <ul>
                                <li>Valwulf</li>
                                <li>Braska</li>
                                <li>Tepartoaomeio</li>
                                <li>Roderik</li>
                            </ul>
                        </div>
                    </Collapse>
                </ul>
            </div>
        </>
    )
}