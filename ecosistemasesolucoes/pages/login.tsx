import type { NextPage } from 'next';
import { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useAuth } from './api/AuthContext';

const login : NextPage = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const [formErro, setFormErro] = useState<boolean>(false);

    const { login } = useAuth();

    async function handleSubmit(e: any){
        e.preventDefault();
        const worked = await login(usuario, password);
        
        console.log(!worked);
        setFormErro(!worked);
    };

    return (
        <>
            <div className='w-100 h100v d-flex flex-column justify-content-center align-items-center bg-secondary'>
                {formErro ? <><span className='w-25 text-center text-light'><b>Usuário e/ou senha incorretos!</b></span></> : ''}
                <div className='bg-dark w-25 rounded-4 p-4 text-light'>
                    <Form onSubmit={(e) => handleSubmit(e)}>
                        <Form.Group>
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control type='text' name='usuario' value={usuario} onChange={e => setUsuario(e.target.value)} autoFocus/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Button className='mt-4 w-100' type='submit'>login</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default login;