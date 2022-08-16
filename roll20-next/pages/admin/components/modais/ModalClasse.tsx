import React, { useEffect, useState } from 'react';
import Modal from '../../../../node_modules/react-bootstrap/esm/Modal';
import Form  from '../../../../node_modules/react-bootstrap/esm/Form';
import InputGroup  from '../../../../node_modules/react-bootstrap/esm/InputGroup';
import ToggleButton from '../../../../node_modules/react-bootstrap/esm/ToggleButton';
import Button from '../../../../node_modules/react-bootstrap/esm/Button';
import Row from '../../../../node_modules/react-bootstrap/esm/Row';
import Col from '../../../../node_modules/react-bootstrap/esm/Col';
import Table from '../../../../node_modules/react-bootstrap/esm/Table';

interface ModalClasseProps{
    idclasse?: number,
    fechar: () => {}
}

export default function ModalClasse(props: ModalClasseProps){
    const [idclasse, setIdClasse] = useState(0);
    const [nome, setNome] = useState();
    const [niveis, setNiveis] = useState();
    const [dv, setDv] = useState();
    const [fortitude, setFortitude] = useState();
    const [reflexos, setReflexos] = useState();
    const [vontade, setVontade] = useState();
    const [bba, setBba] = useState();
    const [pericia, setPericia] = useState();
    const [conjurador, setConjurador] = useState();
    const [alinhamentos, setAlinhamentos] = useState({
        'lb': 0,
        'nb': 0,
        'cb': 0,
        'ln': 0,
        'n': 0,
        'cn': 0,
        'lm': 0,
        'nm': 0,
        'cm': 0
    });

    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        async function GetDataModal(){
            if(!props.idclasse)
                return;

                const apiUrlEndpoint = 'http://localhost:3000/api/handleQuery';
                const postData = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        query: `SELECT * FROM classes WHERE id='${props.idclasse}'`,
                        singleRegister: true
                    })
                }
    
                const response = await fetch(apiUrlEndpoint, postData);
    
                const res = await response.json();
                setNome(res.results.nome);
                setNiveis(res.results.niveis);
                setDv(res.results.dv);
                setFortitude(res.results.fortitude);
                setReflexos(res.results.reflexos);
                setVontade(res.results.vontade);
                setBba(res.results.bba);
                setPericia(res.results.pericia);
                setConjurador(res.results.conjurador);

                const dataAlinhamentos = JSON.parse(res.results.alinhamentos);
                setAlinhamentos({...dataAlinhamentos});

                setDescricao(res.results.descricao)
        }

        GetDataModal();

        setIdClasse(props.idclasse);
    }, [props.idclasse]);

    function changeAligmentValue(alignment, alignmentValue){
        let newAlinhamentos = {...alinhamentos};
        let novoValor = (parseInt(alignmentValue) - 1);

        newAlinhamentos[alignment] = Math.abs(novoValor);
        
        setAlinhamentos(newAlinhamentos);
    }

    async function handleSubmit(event){
        props.fechar();
        event.preventDefault();
        
        const data = new FormData(event.target);
        let sqlquery = '';

        const id        = data.get('id');
        const nome      = data.get('nome');
        const niveis    = data.get('niveis');
        const dv        = data.get('dv');
        const fortitude = data.get('fortitude');
        const reflexos  = data.get('reflexos');
        const vontade   = data.get('vontade');
        const bba       = data.get('bba');
        let alins       = Object.entries(alinhamentos).reduce((alString, [key, value]) => {
            if(alString.length > 1)
                alString += ",";
            alString += `\"${key}\":${value}`;
            return alString;
        }, '{');

        alins += '}';
        console.log(alins);


        const descricao = data.get('descricao');

        const query =   `nome='${nome}'
                        ,niveis='${niveis}'
                        ,dv='${dv}'
                        ,fortitude='${fortitude}'
                        ,reflexos='${reflexos}'
                        ,vontade='${vontade}'
                        ,bba='${bba}'
                        ,pericia='${pericia}'
                        ,conjurador='${conjurador}'
                        ,alinhamentos='${alins}'
                        ,descricao='${descricao}'`

        if(id){
            sqlquery = `UPDATE classes SET ${query} WHERE id='${id}'`;
        }else{
            sqlquery = `INSERT INTO classes SET ${query}`;
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
        console.log(res);
    }

    return (
        <>
        <Form onSubmit={handleSubmit} method='post'>
            <input type='hidden' name='id' value={idclasse}/>

            <Modal.Header closeButton>
                <Modal.Title>{nome ? nome : 'Nova Classe'}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col className='p-2' xs={6}>
                        <InputGroup>
                            <InputGroup.Text>Nome</InputGroup.Text>
                            <Form.Control placeholder='Guerreiro' name='nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={3}>
                        <InputGroup>
                            <InputGroup.Text>Niveis</InputGroup.Text>
                            <Form.Control placeholder='20' name='niveis' value={niveis} onChange={(e) => setNiveis(e.target.value)}/>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={3}>
                        <InputGroup>
                            <InputGroup.Text>DV</InputGroup.Text>
                            <Form.Select name='dv' value={dv} onChange={(e) => setDv(e.target.value)}>
                                <option value='d4'>d4</option>
                                <option value='d6'>d6</option>
                                <option value='d8'>d8</option>
                                <option value='d10'>d10</option>
                                <option value='d12'>d12</option> 
                            </Form.Select>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={6}>
                        <InputGroup>
                            <InputGroup.Text>Conjurador</InputGroup.Text>
                            <Form.Select name='conjurador' value={conjurador} onChange={(e) => setConjurador(e.target.value)}>
                                <option value='0'>Não conjura</option> 
                                <option value='0.5'>Metade do nível</option>
                                <option value='1'>Completo</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={3}>
                        <InputGroup>
                            <InputGroup.Text>Bba</InputGroup.Text>
                            <Form.Select name='bba' value={bba} onChange={(e) => setBba(e.target.value)}>
                                <option value='1'>Bom</option> 
                                <option value='0.75'>Médio</option>
                                <option value='0.5'>Ruim</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={3}>
                        <InputGroup>
                            <InputGroup.Text>Perícia</InputGroup.Text>
                            <Form.Control placeholder='Int+' name='pericia' value={pericia} onChange={(e) => setPericia(e.target.value)}/>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={4}>
                        <InputGroup>
                            <InputGroup.Text>Fortitude</InputGroup.Text>
                            <Form.Select name='fortitude' value={fortitude} onChange={(e) => setFortitude(e.target.value)}>
                                {/* arredondadoPraBaixo(nível / 2 )+ 2 */}
                                <option value='1'>Bom</option> 
                                {/* arredondadoPraBaixo(nível / 3) */}
                                <option value='0'>Ruim</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={4}>
                        <InputGroup>
                            <InputGroup.Text>Reflexos</InputGroup.Text>
                            <Form.Select name='reflexos' value={reflexos} onChange={(e) => setReflexos(e.target.value)}>
                                {/* arredondadoPraBaixo(nível / 2 )+ 2 */}
                                <option value='1'>Bom</option> 
                                {/* arredondadoPraBaixo(nível / 3) */}
                                <option value='0'>Ruim</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>

                    <Col className='p-2' xs={4}>
                        <InputGroup>
                            <InputGroup.Text>Vontade</InputGroup.Text>
                            <Form.Select name='vontade' value={vontade} onChange={(e) => setVontade(e.target.value)}>
                                {/* arredondadoPraBaixo(nível / 2 )+ 2 */}
                                <option value='1'>Bom</option> 
                                {/* arredondadoPraBaixo(nível / 3) */}
                                <option value='0'>Ruim</option>
                            </Form.Select>
                        </InputGroup>
                    </Col>

                    <Col xs={6}>
                        <Form.Group>
                            <Table>
                                <tr><td className='text-center' colSpan={3}>Alihamentos Permitidos</td></tr>
                                <tr>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.lb === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='lb' name='lb' type='checkbox' 
                                            value={alinhamentos.lb} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>LB</ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.nb === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='nb' name='nb' type='checkbox'
                                            value={alinhamentos.nb} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>NB</ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.cb === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='cb' name='cb' type='checkbox' 
                                            value={alinhamentos.cb} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>CB</ToggleButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.ln === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='ln' name='ln' type='checkbox' 
                                            value={alinhamentos.ln} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>LN</ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.n === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='n' name='n' type='checkbox' 
                                            value={alinhamentos.n} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>N</ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.cn === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='cn' name='cn' type='checkbox'
                                            value={alinhamentos.cn} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>CN</ToggleButton>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.lm === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='lm' name='lm' type='checkbox'
                                            value={alinhamentos.lm} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>LM</ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.nm === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='nm' name='nm' type='checkbox' 
                                            value={alinhamentos.nm} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>NM</ToggleButton>
                                    </td>
                                    <td>
                                        <ToggleButton className={`w-75 ${alinhamentos.cm === 0 ? 'bg-outline-primary text-primary' : 'bg-primary'}`} id='cm' name='cm' type='checkbox' 
                                            value={alinhamentos.cm} onChange={(e) => changeAligmentValue(e.target.name, e.target.value)}>CM</ToggleButton>
                                    </td>
                                </tr>
                            </Table>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as='textarea' rows={4} name='descricao' value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        </Form.Group>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.fechar}>
                    Fechar
                </Button>
                <Button variant="primary" type='submit'>
                    Salvar
                </Button>
            </Modal.Footer>
        </Form>
        </>
    )
}