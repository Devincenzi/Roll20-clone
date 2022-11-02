import type { NextPage } from 'next';
import { useEffect, useRef } from 'react';
import { Button, Table } from 'react-bootstrap';
import { FaPen, FaImage, FaTimes } from 'react-icons/fa';
import { limitarTexto } from '../../../lib/utils';
import Dashboard from '../components/Dashboard';

const Conteudos : NextPage = () => {
    const conteudoData = useRef([]);

    useEffect(() => {
        async function getPageData(){
            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';

            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `SELECT * FROM conteudos`,
                })
            }

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();
            conteudoData.current = res.results;
       }

        getPageData();
    });

    function renderConteudos(){
        let niveis = new Array;

        if(!conteudoData.current)
            return niveis;

        conteudoData.current.map(conteudo => {
            niveis.push(
                <tr key={conteudo.idconteudo}>
                    <td width='20%'>{conteudo.titulo}</td>
                    <td width='30%'>{limitarTexto(conteudo.conteudo, 50)}</td>
                    <td width='5%' className='text-center'><FaPen /></td>
                    <td width='5%' className='text-center'><FaImage /></td>
                    <td width='5%' className='text-center'><FaTimes /></td>
                    <td></td>
                </tr>
            )
        })

        return niveis;
    }

    return (
        <Dashboard title='CONTEÚDOS'>
            <Table className='bg-light'>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Conteúdo</th>
                        <th colSpan={3}></th>
                        <th><a href='/admin/conteudos/0'><Button variant='primary'>Novo</Button></a></th>
                    </tr>
                </thead>
                <tbody>
                    {renderConteudos().map(e => e)}
                </tbody>
            </Table>
        </Dashboard>
    );
}

export default Conteudos;