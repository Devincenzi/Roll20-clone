import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import NavBarAdmin from '../components/NavBarAdmin';
import ModalHabilidade from '../components/modais/ModalHabilidade';
import Icon from '../components/Icon';
import { Container, Row, Col, Table, Nav, Card } from 'react-bootstrap';

export default function Classe(){
    const router = useRouter();
    const { classe } = router.query;

    const [classeData, setClasseData] = useState();
    const [classeHabilidades, setClasseHabilidades] = useState([]);
    const [classeHabilidadesExtenso, setClasseHabilidadesExtenso] = useState();

    const [showModalSkill, setShowModalSkill] = useState(false);
    const [idHabilidadeModal, setIdHabilidadeModal] = useState(0);

    const handleShowModalSkill = () => setShowModalSkill(true);
    const handleCloseModalSkill = () => setShowModalSkill(false);

    useEffect(() => {
        async function getPageData(){
            const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';

            const postData = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `SELECT * FROM classes WHERE nome='${classe}'`,
                    singleRegister: true
                })
            }

            const response = await fetch(apiUrlEndpoint, postData);

            const res = await response.json();
            setClasseData(res.results);

            if(!classeData)
                return;

            const postData2 = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    query: `SELECT * FROM classes_habilidades WHERE idclasse='${classeData.id}' ORDER BY nivel ASC`,
                })
            }

            const responseSKills = await fetch(apiUrlEndpoint, postData2);

            const resSkills = await responseSKills.json();
            setClasseHabilidadesExtenso(resSkills.results);

            let niveisHabilidade = [''];

            resSkills.results.forEach(e => {
                const index = e.nivel-1;
                if(!niveisHabilidade[index])
                    niveisHabilidade[index] = '';
                else
                    niveisHabilidade[index] += ', ';

                niveisHabilidade[index] += `${e.nome}`;
            });

            setClasseHabilidades(niveisHabilidade);
       }

        getPageData();
    });

    function renderLevels(){
        let niveis = new Array;

        if(!classeData)
            return niveis;

        for(let i = 1; i <= classeData.niveis; i++){
            niveis.push(
                <tr key={i}>
                    <td width='5%' className='text-center'>{`${i}º`}</td>
                    <td width='5%' className='text-center'>{calculateLvlBba(i)}</td>
                    <td width='5%' className='text-center'>{calculateLvlTR(classeData.fortitude, i)}</td>
                    <td width='5%' className='text-center'>{calculateLvlTR(classeData.reflexos, i)}</td>
                    <td width='5%' className='text-center'>{calculateLvlTR(classeData.vontade, i)}</td>
                    <td width='20%' className='text-center'>{classeHabilidades[i-1]}</td>
                </tr>
            )
        }

        return niveis;
    }

    function calculateLvlBba(lvl){
        const classeBba = classeData.bba;
        let retornoBba = `+${Math.floor(classeBba * lvl)}`;
        let bbaRestante = Math.floor(classeBba * lvl) - 5;

        while(bbaRestante > 0){
            retornoBba += `/${bbaRestante}`;
            bbaRestante -= 5;
        }

        return retornoBba;
    }

    function calculateLvlTR(tr, lvl){
        if(tr === 1){
            return `+${Math.floor(lvl / 2) + 2}`;
        }else{
            return `+${Math.floor(lvl / 3)}`;
        }
    }

    function editarHabilidade(idhabilidade){
        setIdHabilidadeModal(idhabilidade);
        setShowModalSkill(true);
    }

    async function excluirHabilidade(idhabilidade){
        if(!confirm('Deseja excluir permanentemente a habilidade selecionada?'))
            return;

        const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
        const postData = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                query: `DELETE FROM classes_habilidades WHERE idclasse_habilidade=${idhabilidade}`
            })
        };

        const response = await fetch(apiUrlEndpoint, postData);
        const res = await response.json();
    }

    return (
        <>
            <NavBarAdmin>
                <Nav.Link href='#' disabled><div className='vr text-light h-100'></div></Nav.Link>
                <Nav.Link href='#' onClick={() => editarHabilidade(0)}>Adicionar Habilidade</Nav.Link>
            </NavBarAdmin>

            <Container>
                <Row>
                    <Col xs={12}><h1>{classe}</h1></Col>
                    <Table size='sm' striped>
                        <thead>
                            <tr>
                                <th className='text-center'>Nível</th>
                                <th className='text-center'>Bba</th>
                                <th className='text-center'>Fortitude</th>
                                <th className='text-center'>Reflexos</th>
                                <th className='text-center'>Vontade</th>
                                <th className='text-center'>Especial</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderLevels().map(e => e)}
                        </tbody>
                    </Table>
                    <h4>Habilidades de Classe</h4>
                    <Col xs={12} className='d-inline-flex flex-wrap'>
                    {classeHabilidadesExtenso ? classeHabilidadesExtenso.map(e => {
                        return (
                            // <Col xs={6} key={e.idclasse_habilidade} className='mb-2'>
                                <Card key={e.idclasse_habilidade} className='w-50 align-self-start mb-2'>
                                    <Card.Header className='bg-dark text-light d-flex justify-content-between'>
                                        <div>{`${e.nome} - (${e.categoria})`}</div>
                                        <div>
                                            <Icon nameIcon='pen' color='white' classes='m-1 cursor-pointer' click={() => editarHabilidade(e.idclasse_habilidade)}/>
                                            <Icon nameIcon='close' color='red' classes='m-1 cursor-pointer' click={() => excluirHabilidade(e.idclasse_habilidade)} />
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <Card.Text>{e.descricao}</Card.Text>
                                    </Card.Body>
                                </Card>
                            /* </Col> */
                        )
                    }) : ''}
                    </Col>
                </Row>
            </Container>

            <ModalHabilidade show={showModalSkill} fechar={handleCloseModalSkill} idclasse={classeData ? classeData.id : 0} idhabilidade={idHabilidadeModal}/>
        </>
    )
}