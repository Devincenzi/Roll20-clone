import React, { useEffect, useState } from "react";
import Link from "next/link";
import NavBarAdmin from "./components/NavBarAdmin";
import ModalClasse from './components/modais/ModalClasse';
import { Button, Modal, Table, Container } from 'react-bootstrap';
import Icon from './components/Icon';

export default function Classes(){
    const [classesToDisplay, setClassesToDisplay] = useState([]);

    const [show, setShow] = useState(false);
    const [classeToModal, setClasseToModal] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModalWarning, setShowModalWarning] = useState(false);

    useEffect(() => {
        async function GetPageData(){
            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: "SELECT id, nome FROM classes"
                })
            }

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();
            setClassesToDisplay(res.results);
        }

        GetPageData();
    });

    function perguntarExcluirClasse(idclasse, nomeclasse){
        if(confirm(`Tem certeza que deseja remover permanentemente a classe ${nomeclasse}?`)){
            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
            const postData = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    query: `DELETE FROM classes WHERE id=${idclasse}`
                })
            }
            fetch(apiUrlEndpoint, postData);
        }
    }

    return (
        <>
        <NavBarAdmin />

        <Container>
            <Table>
                <thead>
                    <tr>
                        <th colSpan={4}>Classe</th>
                    </tr>
                </thead>
                <tbody>
                    {classesToDisplay ? classesToDisplay.map(classe => {
                        return (
                            <tr key={classe.id}>
                                <td width='80%'>{classe.nome}</td>
                                <Link href={`classes/${classe.nome}`}>
                                    <td className='cursor-pointer' width='5%'><Icon nameIcon="eye" width={20}/></td>
                                </Link>
                                <td className='cursor-pointer' width='5%' onClick={() => {handleShow(); setClasseToModal(classe.id)}}><Icon nameIcon="pen"/></td>
                                <td className='cursor-pointer' width='5%' onClick={() => perguntarExcluirClasse(classe.id, classe.nome)}><Icon nameIcon="close" color="red"/></td>
                            </tr>
                            )
                        }) : ''
                    }
                </tbody>
            </Table>
        </Container>

        <Modal size='lg' show={show} onHide={handleClose}>
            <ModalClasse idclasse={classeToModal} fechar={handleClose}/>
        </Modal>
        </>
    )
}