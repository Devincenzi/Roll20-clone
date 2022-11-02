import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import Dashboard from '../components/Dashboard';


const Conteudo : NextPage = () => {
    const router = useRouter();
    const { conteudo } = router.query;
    const conteudoData = useRef();
    
    const [titulo, setTitulo] = useState<string>('');
    const [texto, setTexto] = useState<string>('');

    useEffect(() => {
        async function getPageData(){
            if(parseInt(conteudo) < 1)
                return;

            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';

            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `SELECT * FROM conteudos WHERE idconteudo='${conteudo}'`,
                })
            }

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();
            // conteudoData.current = res.results;
            setTitulo(res.results.titulo);
            // setEditorState(res.results.conteudo);
       }

        getPageData();
    });

    return (
        <>
        <Dashboard title='CONTEÚDO'>
            <Row>
                <Col xs={6}>
                    <Form.Group>
                        <Form.Label>Título</Form.Label>
                        <Form.Control type='text' value={titulo} onChange={e => setTitulo(e.target.value)} />
                    </Form.Group>
                </Col>

                <Col xs={6}>
                    <Form.Group>
                        <Form.Label>Fundo</Form.Label>
                        <Form.Control type='file' />
                    </Form.Group>
                </Col>

                <Col xs={12}>
                    <Form.Group>
                        <Form.Label>Texto</Form.Label>
                        <Form.Control as='textarea' value={texto} onChange={e => setTexto(e.target.value)}></Form.Control>
                    </Form.Group>
                </Col>

            </Row>
        </Dashboard>
        </>
    );
}

export default Conteudo;