import React, { useState } from "react";
import Col from "../../../node_modules/react-bootstrap/esm/Col";
import Row from "../../../node_modules/react-bootstrap/esm/Row";
import Form from "../../../node_modules/react-bootstrap/esm/Form";

export default function Attributes(){
    return (
        <>
        <div className="border border-dark p-2 w-100 h-100">
            <Row>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Jogador</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Raça</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Tipo</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group></Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Classe</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>NEP</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>XP</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Tamanho</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Gênero</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Alinhamento</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Divindade</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Idade</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Altura</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Peso</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Olhos</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Form.Group>
                        <Form.Label>Cabelos</Form.Label>
                        <Form.Control size="sm" type='text' name='jogador' readOnly/>
                    </Form.Group>
                </Col>
            </Row>
          </div>
        </>
    )
}