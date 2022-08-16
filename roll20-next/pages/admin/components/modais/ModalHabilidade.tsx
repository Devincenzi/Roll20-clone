import React, { useState, useEffect } from 'react';
import { Modal, Row, Col, Form, Button } from 'react-bootstrap';

interface ModalHabilidadeProps{
    idhabilidade?: any,
    titulo?: string,
    idclasse: any,
    show: boolean,
    fechar: () => void,
    salvar: () => void
}

export default function ModalHabilidade(props: ModalHabilidadeProps){
    const [idhabilidade, setIdHabilidade] = useState();

    const [nome, setNome] = useState('');
    const [idClasse, setIdClasse] = useState();
    const [categoria, setCategoria] = useState('');
    const [nivel, setNivel] = useState(1);
    const [descricao, setDescricao] = useState('');

    const [firstTimeLoad, setFirstTimeLoad] = useState(false);

    useEffect(() => {
        setIdClasse(props.idclasse);
        setIdHabilidade(props.idhabilidade);

        async function getPageData(){
            if(firstTimeLoad || !props.show)
                return;

            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `SELECT * FROM classes_habilidades WHERE idclasse_habilidade='${idhabilidade}'`,
                    singleRegister: true
                })
            };

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();

            if(props.show && !res.results){
                setNome('');
                setNivel(1);
                setNivel('sm');
                setDescricao('');
            }else{
                setNome(res.results.nome);
                setNivel(res.results.nivel);
                setCategoria(res.results.categoria);
                setDescricao(res.results.descricao);
            }

            setFirstTimeLoad(true);
        }

        getPageData();
    }, [props.show, firstTimeLoad, idhabilidade]);

    async function handleSubmit(){
        props.fechar();
        setFirstTimeLoad(false);
        let sqlquery = '';

        const clausula =    `idclasse='${idClasse}'
                            ,nivel='${nivel}'
                            ,categoria='${categoria}'
                            ,nome='${nome}'
                            ,descricao='${descricao}'`;
        
        if(idhabilidade){
            sqlquery = `UPDATE classes_habilidades SET ${clausula} WHERE idclasse_habilidade=${idhabilidade}`;
        }else{
            sqlquery = `INSERT INTO classes_habilidades SET ${clausula}`;
        }

        const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
        const postData = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: sqlquery
            })
        }

        console.log(`query: ${sqlquery}`);

        const response = await fetch(apiUrlEndpoint, postData);

        const res = await response.json();
        setIdHabilidade('');
    }

    function fecharModal(){
        setFirstTimeLoad(false);
        setIdHabilidade('');
        props.fechar();
    }

    return (
        <Modal show={props.show} size='lg' onHide={() => fecharModal()}>
            <Modal.Header closeButton>
                <Modal.Title>{props.titulo ? props.titulo : 'Habilidade de Classe'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={6}>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type='text' placeholder='Destruir o mal' value={nome} onChange={e => setNome(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col xs={4}>
                        <Form.Group>
                            <Form.Label>Categoria</Form.Label>
                            <Form.Select defaultValue={categoria} onChange={e => setCategoria(e.target.value)} >
                                <option value='sm'>Similar à magia</option>
                                <option value='sob'>Sobrenatural</option>
                                <option value='ext'>Extraordinária</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col xs={2}>
                        <Form.Group>
                            <Form.Label>Nível</Form.Label>
                            <Form.Control type='number' min={1} max={99} value={nivel} onChange={e => setNivel(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col xs={12} className='pt-3'>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as='textarea' rows={3} placeholder='1/dia o paladino pode usar esta habilidade etc...' value={descricao} onChange={e => setDescricao(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => fecharModal()}>
                    Fechar
                </Button>
                <Button variant="primary" onClick={() => handleSubmit()}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}