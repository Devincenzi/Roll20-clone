import React, { useState } from "react";
import styles from './Message.module.css';
import { rolarDados } from '../../core/Funcoes';

interface MessageProps{
    headMessage?: string,
    bodyMessage: string,
}

export default function Message(props: MessageProps){
    function processBodyMessage(){
        if(!props.bodyMessage.includes("/r"))
            return props.bodyMessage;
        
        let textoRetorno = "";
        let regex = /(\d{1,3}[dD]\d{1,4}(\s?[+-]\s?\d{1,3}\W?)?)/g;

        const rexegedMessage = props.bodyMessage.match(regex);
        
        const resultados = rexegedMessage.map(currentRoll => processRolls(currentRoll));

        return resultados;
    }

    function processRolls(currentRoll: string){
        const rollParams = currentRoll.split('d');
        const qntRoll = parseInt(rollParams[0]);
        const rangeRoll = parseInt(rollParams[1]);

        let finalResult = [<span>Resultado: </span>];

        for(let i = 1; i <= qntRoll; i++){
            const currentResult = rolarDados(rangeRoll);

            finalResult[i] = 
                <span className={`${styles.diceResult} ${currentResult === rangeRoll ? 'text-success' : ''} ${currentResult === 1 ? 'text-danger' : ''}`}>
                    {currentResult}&nbsp;
                </span>
        }

        return finalResult;
    }

    return (
        <>
            <div className={styles.message}>
                {props.headMessage ? <div className={styles.titulo}>{props.headMessage}</div> : ""}
                <div className={styles.conteudo}>{processBodyMessage()}</div>
            </div>
        </>
    )
}