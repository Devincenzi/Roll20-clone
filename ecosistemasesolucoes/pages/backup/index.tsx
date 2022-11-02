import type { NextPage } from 'next';
import { Nav, Navbar, NavDropdown,Container, Form, Button, Row, Col } from 'react-bootstrap';

import { useRef } from 'react';

import styles from './index.module.css';
import FormContato from './components/FormContato';
import LeftComponent from './components/LeftComponent';
import RightComponent from './components/RightComponent';
import NavClient from './components/NavClient';
import Rodape from './components/Rodape';
import WhatsappButton from './components/fixedComponents/WhatsappButton';

const Home: NextPage = () => {
  const vantagens = useRef(null);
  const produtos = useRef(null);
  const servicos = useRef(null);
  const empresa = useRef(null);

  const scrollToSection = (elementRef) => {
    if(!elementRef)
      return;

    window.scrollTo({
      top: elementRef.current.offsetTop,
      behaviour: 'smooth'
    });
  }

  return (
    <>
    <NavClient needHide={true}>
        <Nav className='w-100 d-flex justify-content-end'>
          <Nav.Link onClick={() => scrollToSection(vantagens)} href="#">Vantagens</Nav.Link>
          <Nav.Link onClick={() => scrollToSection(produtos)} href="#">Produtos</Nav.Link>
          <Nav.Link onClick={() => scrollToSection(servicos)} href="#">Servicos</Nav.Link>
          <Nav.Link onClick={() => scrollToSection(empresa)} href="#">Empresa</Nav.Link>
          <NavDropdown title='Downloads' menuVariant='dark'>
            <NavDropdown.Item href='#ebook'>E-book NFCe</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='https://anydesk.com/pt/downloads/thank-you?dv=win_exe' target='_blank'>AnyDesk</NavDropdown.Item>
            <NavDropdown.Item href='https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe' target='_blank'>Team Viewer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='PoliticaePrivacidade'>Política e Privacidade</Nav.Link>
        </Nav>
    </NavClient>

    <WhatsappButton />

    {/* <div style={{
      backgroundImage: 'url(/imgs/homepage.png)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      width: '100%',
      height: '100vh'
      }}> */}

      <div className='h100v w-100 bg-dark'>

      <video autoPlay muted loop id={styles.myVideo}>
        <source src="/videos/videoEcoHome.mp4" type="video/mp4"/>
      </video>

      <Row className='h-100'>
        <Col xs={8} className='d-flex align-items-center zIndex99'>
          <div className={`bg-dark bg-opacity-50 text-white rounded-4 w-50 p-3 m-2`}>
            <div className='text-center pt-2'>CONSULTORIA EM AUTOMAÇÃO COMERCIAL</div>
            <hr/>
            <div className='w-100 px-3'>
              A ECO Sistemas e Soluções presta serviço de consultoria em automação comercial, com destaque em sistemas e equipamentos para o comércio em geral. 
              Tem como foco a implantação e o suporte de sistemas comerciais para micro e pequenas empresas.
            </div>
          </div>
        </Col>

        <Col xs={4} className='d-flex align-items-center justify-content-cente zIndex99'>
          <FormContato />
        </Col>

      </Row>

      </div>

    {/* </div> */}

    <Row>

      <Col ref={vantagens} xs={12}>
        <RightComponent color='bg-info' leftCol={4} rightCol={8} imagePath='/imgs/ECO_CONTROLE_ESTOQUE.png' titleContent='O que é?'
          textContent={`<h3>O QUE É?</h3>
          Automação comercial é a aplicação de métodos e ferramentas para automatizar e facilitar processos utilizando 
          softwares de automação comercial capazes coletar e gerar dados, facilitando a análise da operação como um todo, 
          busca reduzir a mão de obra e despesas e minimizar erros humanos. 
          <br/><b>Seus serviços no alcance de um clique!</b>`} />
      </Col>

      <Col xs={12}>
        <LeftComponent color='bg-primary' leftCol={8} rightCol={4} imagePath='/imgs/homepage.png' titleContent='Vantagens'
          textContent={`<h3>VANTAGENS</h3>
            Os sistemas comerciais buscam armazenar informações essenciais ao negócio, 
            unificar e integrar as ferramentas de trabalho (compras, vendas, controle de estoque e faturamento), 
            gerar relatórios referente as operações anteriores e também, controlar o fluxo de caixa.`} 
          />
      </Col>

      <Col ref={produtos} xs={12}>
        <RightComponent color='bg-primary' leftCol={4} rightCol={8} heightClass='h100v' imagePath='/imgs/homepage.png' titleContent='O que é?'
          textContent={`<h3>PRODUTOS</h3>
          Você sabe o que o número 3 significa? 
          <br/>Reunimos aqui 3 bons motivos pra você trazer seu negócio pro digital e abrir sua loja online agora mesmo. 
          <br/>1.	É a melhor oportunidade dos últimos 20 anos. O comércio eletrônico tem crescido em todas as regiões do país;
          <br/>2.	As lojas virtuais têm aumentado cada vez mais a sua participação no varejo brasileiro e possuem um alto potencial de faturamento;
          <br/>3.	O número de pessoas que compram pela internet não para de crescer, até mesmo porque comprar sem sair de casa.
          <h3>conheça nossa plataforma <a href='www.linkloja.com.br'>loja</a></h3>`} />
      </Col>

      <Col ref={servicos} xs={12}>
        <RightComponent color='bg-info' leftCol={4} rightCol={8} heightClass='h50v' imagePath='imgs/homepage.png' textContent={`
          <h3>CONSULTORIA EM AUTOMAÇÃO COMERCIAL</h3>
          A consultoria em automação comercial tem objetivo de analisar e identificar os processos de sua empresa, 
          definir e propor os melhores equipamentos e sistemas para informatização do seu negócio.  
          A mais de 10 anos no mercado prestando consultoria especializada em automação comercial para micro e 
          pequenas empresas, a ECO Sistemas e Soluções desenvolveu um método de trabalho que utiliza técnologia e 
          ferramentas atualizadas que garantem resultados de total eficiência para o projeto de automação do seu negóicio.
          `} />
      </Col>

      <Col xs={12}>
        <LeftComponent color='bg-primary' leftCol={6} rightCol={6} heightClass='h50v' imagePath='imgs/imposto.png' textContent={`
          <h3>REVISÃO E AJUSTE DE IMPOSTOS E ALIQUOTAS</h3>
          Através de um sistema de alta tecnologia, que permite consultar os impostos e alíquotas dos produtos, 
          simular cálculos de PIS e COFINS, consultar códigos de NCM e CEST, quais impostos a serem cadastrados para 
          os produtos na entrada (compra) e na saída (venda), preparando a empresa para o cumprimento da legislação fiscal.
        `} />
      </Col>

      <Col ref={empresa} xs={12}>
        <RightComponent color='bg-info' leftCol={6} rightCol={6} imagePath='/imgs/empresa.png' titleContent='Empresa' heightClass='h100v'
          textContent={`<h3>EMPRESA</h3>
            Os sistemas comerciais buscam armazenar informações essenciais ao negócio, 
            unificar e integrar as ferramentas de trabalho (compras, vendas, controle de estoque e faturamento), 
            gerar relatórios referente as operações anteriores e também, controlar o fluxo de caixa.
            <br/>

            <h5>Missão</h5>
            Promover o melhor desempenho do comercio através das tecnologias do mercado, solucionando suas necessidades em informatização primando pela ética e confiabilidade.
            <br/>

            <h5>Visão</h5>
            Ser referência na prestação de serviço em automação comercial através de parcerias sólidas com fábricas de software e distribuidores de equipamentos.
            <br/>

            <h5>Valores</h5>            
            Honestidade e credibilidade
            Acessibilidade para o usuário
            Excelência no atendimento
            Compromisso com o cliente
            Oportunidade para novas gerações`} 
          />
      </Col>
    </Row>

    <Rodape />
    </>
  )
}

export default Home;
