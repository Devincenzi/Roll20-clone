import type { NextPage } from 'next';
import { Nav, NavDropdown,Container, Row, Col } from 'react-bootstrap';

import { useRef } from 'react';

import styles from './index.module.css';
import FormContato from './components/FormContato';
import NavClient from './components/NavClient';
import Rodape from './components/Rodape';
import WhatsappButton from './components/fixedComponents/WhatsappButton';

const Home: NextPage = () => {
  const topo = useRef(null);
  const vantagens = useRef(null);
  const produtos = useRef(null);
  const servicos = useRef(null);
  const empresa = useRef(null);

  const scrollToSection = (elementRef: any) => {
    if(!elementRef)
      return;

    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
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
            <NavDropdown.Item target='_blank' href='/pdfs/ebook.pdf'>E-book NFCe</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='https://anydesk.com/pt/downloads/thank-you?dv=win_exe' target='_blank'>AnyDesk</NavDropdown.Item>
            <NavDropdown.Item href='https://download.teamviewer.com/download/TeamViewer_Setup_x64.exe' target='_blank'>Team Viewer</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href='PoliticaePrivacidade'>Política e Privacidade</Nav.Link>
        </Nav>
    </NavClient>

    <WhatsappButton />
    
    <Container fluid>
      {/* <div className='h100v'> */}
        <Row ref={topo} className='h100v'>
          <video autoPlay muted loop id={styles.myVideo}>
            <source src="/videos/videoEcoHome.mp4" type="video/mp4"/>
          </video>

          <Col xs={12} md={8} className='d-flex align-items-center zIndex99'>
            <div className={`bg-dark bg-opacity-50 text-white rounded-4 w-50 p-3 m-2`}>
              <div className='text-center pt-2'>CONSULTORIA EM AUTOMAÇÃO COMERCIAL</div>
              <hr/>
              <div className='w-100 px-3'>
                A ECO Sistemas e Soluções presta serviço de consultoria em automação comercial, com destaque em sistemas e equipamentos para o comércio em geral. 
                Tem como foco a implantação e o suporte de sistemas comerciais para micro e pequenas empresas.
              </div>
            </div>
          </Col>

          <Col xs={12} md={4} className='d-flex align-items-center justify-content-cente zIndex99'>
            <FormContato />
          </Col>
        </Row>

      {/* </div> */}

      <Row>
        <Col xs={12} style={{
              backgroundImage: `url(imgs/automacao.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'auto'
            }} className={`h100v p-5 d-flex align-items-center`}>
        </Col>

        <Col ref={vantagens} xs={12} style={{
              backgroundImage: `url(imgs/vantagens2.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'auto'
            }} className={`h100v p-5 d-flex align-items-center`}>
            
            <Row>
              <Col xs={7}></Col>
              <Col xs={4} className={`bg-dark bg-opacity-75 text-light text-center rounded-4 p-4`}>
                <h3>VANTAGENS</h3>
                Os sistemas comerciais buscam armazenar informações essenciais ao negócio, 
                unificar e integrar as ferramentas de trabalho (compras, vendas, controle de estoque e faturamento), 
                gerar relatórios referente as operações anteriores e também, controlar o fluxo de caixa.
              </Col>
            </Row>
        </Col>

        <Col xs={12} style={{
              backgroundImage: `url(imgs/ECO_CONTROLE_ESTOQUE.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: 'auto'
            }} className={`h100v p-5 d-flex align-items-center justify-content-end`}>
            
            <Row>
              <Col xs={8}></Col>
              <Col xs={4} className={`bg-dark bg-opacity-75 text-light text-center rounded-4 w-75 p-4`}>
                <p>-Otimização do espaço físico</p>
                <p>-Manter o fluxo de mercadorias de alta demanda</p>
                <p>-Economia de recursos reduzindo desperdício</p>
              </Col>
            </Row>
        </Col>

        <Col ref={empresa} xs={12} style={{
              backgroundImage: `url(imgs/empresa2.png)`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'top',
              backgroundSize: 'auto'
            }} className={`h100v p-5 d-flex align-items-center`}>
            
            <Row>
              <Col xs={4}></Col>
              <Col xs={7} className={`bg-dark bg-opacity-75 text-light text-center rounded-4 p-4`}>
                <h3>EMPRESA</h3>
                {/* <p>Atuante no mercado desde 2007, a ECO Sistemas e Soluções é uma empresa especializada na consultoria em automação comercial, cujo trabalho consiste em instalar e configurar sistemas e equipamentos, dar treinamento e suporte para operadores de retaguarda e frente de caixa do comércio em geral.</p> */}
                <p>Atuante no mercado desde 2007, a Eco Sistemas e Soluções é uma empresa especializada na consultoria em automação comercial, somos especialistas na  instalação e configuração do sistema gerencial Eco Sistema, atualização tributária dos cadastros dos produtos para venda, configuração dos equipamentos para ambiente do comércio varejista, damos treinamento e suporte para operadores de retaguarda e frente de caixa do comércio em geral. Atendemos empresas das categorias: MEI, Simples Nacional e categoria do Lucro Presumido. Também desenvolvemos aplicativos para empresas do Marketing Multinivel e desenvolvemos a Plataforma Loja Online e aplicativo de venda para o comercio varejista em geral.</p>
                <p><b>Missão: </b>Promover o melhor desempenho do comercio através das tecnologias do mercado, solucionando suas necessidades em informatização primando pela ética e confiabilidade.</p>
                
                <p><b>Visão: </b>Ser referência na prestação de serviço em automação comercial através de parcerias sólidas com fábricas de software e distribuidores de equipamentos.</p>
                <p><b>Valores: </b>Honestidade e credibilidade, 
                Acessibilidade para o usuário, 
                Excelência no atendimento,
                Compromisso com o cliente,
                Oportunidade para novas gerações</p>
                {/* <br/>Honestidade e credibilidade
                <br/>Acessibilidade para o usuário
                <br/>Excelência no atendimento
                <br/>Compromisso com o cliente
                <br/>Oportunidade para novas gerações */}
              </Col>
            </Row>

        </Col>
      </Row>

    <Rodape />
    </Container>
    </>
  )
}

export default Home;
