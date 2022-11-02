import { NextPage } from "next";
import { FormEvent, useState } from 'react';
import { Form, Button } from "react-bootstrap";

const FormContato : NextPage = () => {
    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [assunto, setAssunto] = useState<string>('');
    const [mensagem, setMensagem] = useState<string>('');

    const [enviado, setEnviado] = useState<boolean>(false);

    function handleSubmit(event: any){
        event.preventDefault();

        const apiUrl = 'http://localhost:3000/api/contact';
        const postData = {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: nome,
                email: email,
                assunto: assunto,
                mensagem: mensagem
            })
        };


        fetch(apiUrl, postData)
            .then((res) => {
            console.log('Response received');

            if (res.status === 200) {
                console.log('Response succeeded!')

            setNome('');
            setEmail('');
            setAssunto('');
            setMensagem('');
            setEnviado(true);
            }
        })
    }

    return (
        // <div style={{position: 'absolute', top: '15%', right: '20px'}} className={`bg-white bg-opacity-50 text-dark rounded-4 w-25 m-2`}>
        <div className={`w-75 bg-dark bg-opacity-50 text-light rounded-4`}>
            <div className='text-center pt-3'>ENTRE EM CONTATO</div>
            <hr/>
            <div className='w-100 px-2'>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Nome</Form.Label>
                        <Form.Control type='text' placeholder='seu nome' autoFocus onChange={e => setNome(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='fulano@gmail.com' onChange={e => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Assunto</Form.Label>
                        <Form.Control type='text' placeholder='Contratação' onChange={e => setAssunto(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Mensagem</Form.Label>
                        <Form.Control as='textarea' placeholder='Tenho interesse no serviço' onChange={e => setMensagem(e.target.value)}></Form.Control>
                    </Form.Group>

                    <div className='w-100 text-end px-2 pb-2'>
                        <Button variant='primary' type='submit'>Enviar</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default FormContato;