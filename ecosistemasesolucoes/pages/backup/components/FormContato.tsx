import { NextPage } from "next";
import { Form, Button } from "react-bootstrap";

const FormContato : NextPage = () => {
    return (
        // <div style={{position: 'absolute', top: '15%', right: '20px'}} className={`bg-white bg-opacity-50 text-dark rounded-4 w-25 m-2`}>
        <div className={`w-75 bg-dark bg-opacity-50 text-light rounded-4`}>
            <div className='text-center pt-3'>ENTRE EM CONTATO</div>
            <hr/>
            <div className='w-100 px-2'>
            <Form.Group className='mb-3'>
                <Form.Label>Nome</Form.Label>
                <Form.Control type='text' placeholder='seu nome'></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='fulano@gmail.com'></Form.Control>
            </Form.Group>
            
            <Form.Group className='mb-3'>
                <Form.Label>Telefone</Form.Label>
                <Form.Control type='text' placeholder='51999106606'></Form.Control>
            </Form.Group>

            <Form.Group className='mb-3'>
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as='textarea' placeholder='Tenho interesse no serviço'></Form.Control>
            </Form.Group>

            <div className='w-100 text-end px-2 pb-2'>
                <Button variant='primary'>Enviar</Button>
            </div>
        </div>
        </div>
    )
}

export default FormContato;