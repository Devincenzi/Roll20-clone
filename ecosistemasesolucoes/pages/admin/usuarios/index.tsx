import type { NextPage } from 'next';
import { useState, useEffect, useRef } from 'react';
import { Table, Modal, Button, Form } from 'react-bootstrap';
import { FaKey, FaPen, FaTimes } from 'react-icons/fa';
import ModalUsuario from '../components/ModalUsuario';
import Dashboard from '../components/Dashboard';

const Usuarios : NextPage = () => {
    const usersToDisplay = useRef([]);
    const [show, setShow] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [modalUser, setModalUser] = useState<number | null>(null);

    function modalFields(others: boolean, password: boolean, iduser?: number){
        setShowOthers(others);
        setShowPassword(password);
        setModalUser(iduser);

        setShow(true);
    }

    useEffect(() => {
        async function getPageData(){

            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `SELECT * FROM usuarios`
                })
            };

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();
            usersToDisplay.current = res.results;
        }

        getPageData();
    });

    async function perguntaConfirmaExcluir(idusuario: number, nome: string){
        if(confirm(`Deseja exlcuir o usuário ${nome} permanentemente?`)){

            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `DELETE FROM usuarios WHERE idusuario='${idusuario}'`
                })
            };

            fetch(apiUrlEndpoint, postData);
        }
    }

    return (
        <>
        <Dashboard title='USUÁRIOS'>
            <Table className='bg-light'>
                <thead>
                    <tr>
                        <th className='align-middle'>Nome</th>
                        <th className='align-middle'>Usuário</th>
                        <th className='align-middle' colSpan={3}>Ações</th>
                        <th className='text-end'>
                            <Button variant='primary' onClick={() => modalFields(true, true)}>NOVO</Button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {usersToDisplay.current.length > 0 ? usersToDisplay.current.map(user => {
                        return (
                            <tr key={user.idusuario}>
                                <td width={'38%'}>{user.nome}</td>
                                <td width={'38%'}>{user.login}</td>
                                <td width={'3%'}><FaPen className='cursorPointer' onClick={() => modalFields(true, false, user.idusuario)}/></td>
                                <td width={'3%'}><FaKey className='cursorPointer' onClick={() => modalFields(false, true, user.idusuario)}/></td>
                                <td width={'3%'}><FaTimes className='cursorPointer' onClick={() => perguntaConfirmaExcluir(user.idusuario, user.nome)}/></td>
                                <td></td>
                            </tr>
                        )
                    }) : ''}
                </tbody>
            </Table>
        </Dashboard>

        <ModalUsuario show={show} fechar={() => setShow(false)} idusuario={modalUser} showPassword={showPassword} showOthers={showOthers} />
        </>
    )
}

export default Usuarios;