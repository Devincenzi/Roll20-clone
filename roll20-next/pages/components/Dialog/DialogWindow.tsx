import React, { useContext, useEffect, useState } from "react";
import { faTimesCircle } from "../../../node_modules/@fortawesome/free-regular-svg-icons/index";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome/index";
import Button from "../../../node_modules/react-bootstrap/esm/Button";
import ButtonGroup from "../../../node_modules/react-bootstrap/esm/ButtonGroup";
import Col from "../../../node_modules/react-bootstrap/esm/Col";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import MyContext from '../../core/MyContext';
import Attributes from "./Attributes";
import Background from "./Background";
import styles from './DialogWindow.module.css';

export default function DialogWindow(){
  const [dialogContent, setDialogContent] = useState<'bg' | 'attributes' | 'other'>('bg');
  const [characterContent, setCharacterContent] = useState({});

  const valueContext = useContext(MyContext);

  useEffect(() => {
    async function getCharacterData(){
      const sql =  `SELECT idpersonagem, nomepersonagem FROM personagens WHERE idpersonagem = ${valueContext.state.id}`;

      const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
      const postData = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              query: sql,
              singleRegister: true
          })
      }

      const response = await fetch(apiUrlEndpoint, postData);

      const res = await response.json();

      setCharacterContent(res.results);
    }

    getCharacterData();
  }, [valueContext.state.id > 0])

  function renderContent(){
    switch (dialogContent){
      case "bg":
        return (
          <Background />
        )
      case 'attributes':
        return (
          <Attributes />
        )
    }
  }

  return (
    <>
        <MyContext.Consumer>
          {value => (
            <div className={`${styles.dialogWindow} p-2 w-75 h-75 bg-white ${value.state.display}`}>
              <Row>
                <Col xs={10}>{characterContent ? characterContent.nomepersonagem : ''}</Col>
                <Col>Editar</Col>
                <Col className="text-end">
                  <span className="cursor-pointer" onClick={() => value.changeState(0, 'd-none')}>
                    <FontAwesomeIcon icon={faTimesCircle} size='xl'/>
                  </span>
                </Col>

                <Col xs={3}>
                  <ButtonGroup>
                    <Button variant={dialogContent == 'bg' ? 'dark' : 'outline-dark'} onClick={() => setDialogContent("bg")}>Background</Button>
                    <Button variant={dialogContent == 'attributes' ? 'dark' : 'outline-dark'} onClick={() => setDialogContent("attributes")}>Attrubutes</Button>
                    <Button variant={dialogContent == 'other' ? 'dark' : 'outline-dark'} onClick={() => setDialogContent("other")}>Other</Button>
                  </ButtonGroup>
                </Col>
                <Col xs={12}>
                  {renderContent()}
                </Col>
              </Row>
            </div> 
          )}
        </MyContext.Consumer>
    </>
  )
}