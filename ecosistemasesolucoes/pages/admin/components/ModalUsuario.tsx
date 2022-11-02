import React, { useState, useEffect } from 'react';
import { Modal, Row, Col, Form, Button } from 'react-bootstrap';

interface ModalUsuarioProps{
    idusuario?: any,
    titulo?: string,
    show: boolean,
    showPassword: boolean,
    showOthers: boolean,
    fechar: () => void,
    salvar?: () => void
}

export default function ModalUsuario(props: ModalUsuarioProps){
    const [idusuario, setIdUsuario] = useState();

    const [nome, setNome] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    
    const [showOthers, setShowOthers] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [senhaConfirmada, setSenhaConfirmada] = useState(false);
    const [firstTimeLoad, setFirstTimeLoad] = useState(false);

    useEffect(() => {
        setIdUsuario(props.idusuario);
        setShowPassword(props.showPassword);
        setShowOthers(props.showOthers);

        async function getPageData(){
            if(firstTimeLoad || !props.show)
                return;

            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `SELECT * FROM usuarios WHERE idusuario='${idusuario}'`,
                    singleRegister: true
                })
            };

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();

            if(props.show && !res.results){
                setDefaultStates();
            }else{
                setNome(res.results.nome);
                setLogin(res.results.login);
            }

            setFirstTimeLoad(true);
        }

        getPageData();
    }, [props.show, firstTimeLoad, idusuario]);

    async function handleSubmit(){
        props.fechar();

        let action = 'insert';

        if(idusuario && showPassword)
            action = 'updatePassword'
        if(idusuario && !showPassword && showOthers)
            action = 'update'

        const apiUrlEndpoint = 'http://localhost:3000/api/handleUser';
        const postData = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                action: action,
                idusuario: idusuario,
                nome: nome,
                usuario: login,
                password: senha,
            })
        }

        // const response = await fetch(apiUrlEndpoint, postData);
        await fetch(apiUrlEndpoint, postData);

        // const res = await response.json();
        setIdUsuario(null);
        setDefaultStates();
    }

    function setDefaultStates(){
        setNome('');
        setLogin('');
        setSenha('');
        setSenhaConfirmada(false);
        setShowPassword(false);
        setShowOthers(false);
        setConfirmSenha('');
    }

    function fecharModal(){
        setFirstTimeLoad(false);
        setIdUsuario(null);
        setDefaultStates();
        props.fechar();
    }

    return (
        <Modal show={props.show} size='lg' onHide={() => fecharModal()}>
            <Modal.Header closeButton>
                <Modal.Title>{props.titulo ? props.titulo : 'Usuário'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    {showOthers ? (
                    <>
                    <Col xs={12}>
                        <Form.Group>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type='text' placeholder='João da Silva Sauro' value={nome} onChange={e => setNome(e.target.value)} />
                        </Form.Group>
                    </Col>
                    <Col xs={12}>
                        <Form.Group>
                            <Form.Label>Login</Form.Label>
                            <Form.Control type='text' placeholder='joao' value={login} onChange={e => setLogin(e.target.value)} />
                        </Form.Group>
                    </Col>
                    </>
                    ) : '' }
                    {showPassword ? (
                    <Col xs={12}>
                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type='password' placeholder='***' value={senha} onChange={e => setSenha(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Confirmar Senha</Form.Label>
                            <Form.Control type='password' placeholder='***' value={confirmSenha} onChange={e => setConfirmSenha(e.target.value)} />
                        </Form.Group>
                    </Col>) : ''}
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => fecharModal()}>
                    Fechar
                </Button>
                <Button disabled={(showPassword && (senha !== confirmSenha)) || (!showPassword && showOthers)} variant="primary" onClick={() => handleSubmit()}>
                    Salvar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}