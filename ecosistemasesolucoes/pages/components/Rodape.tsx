import type { NextPage } from 'next';
import { Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaFacebookSquare, FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import styles from './rodape.module.css';

const Rodape : NextPage = () => {
    const tooltipEmail = <Tooltip id='tooltipEmail'><span>comercial@ecosistemasesolucoes.com.br <hr/> Clique para copiar!</span></Tooltip>

    function copyText(textToCopy: string){
        navigator.clipboard.writeText(textToCopy);
    }

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behaviour: 'smooth'
        });
      }

    return (
        <>
            <div className={` w-100 ${styles.rodape} text-light`}>
                <Row>
                    <Col xs={4}>
                        <img src='/imgs/logo.png' className='img-fluid' width={256} height={128} />
                    </Col>
                    <Col xs={4}>
                        Eco Sistemas e Soluções - 
                        <br />CNPJ 08.951.144/0001-35
                        {/* <br/> */}
                        {/* <br/> */}
                        {/* <br/> */}
                        {/* <a href='https://www.facebook.com/ecosistemasesolucoes' title='Facebook' target='_blank' className='text-decoration-none text-reset'>
                            <FaFacebookSquare size={24}/>
                        </a>{`  `}
                        <a href='https://www.instagram.com/ecosistemas_/' title='Instagram' target='_blank' className='text-decoration-none text-reset'>
                            <FaInstagram size={24} />
                        </a>{`  `}
                        <OverlayTrigger trigger={['click', 'focus', 'hover']} placement='top' overlay={tooltipEmail}>
                            <span onClick={() => copyText('comercial@ecosistemasesoluções.com.br')} className='cursorPointer'><FaEnvelope size={24}/></span>
                        </OverlayTrigger>{`  `}
                        <a href='https://wa.me/5551991672281' target='_blank' title='Whatsapp' className='text-decoration-none text-reset'>
                            <FaWhatsapp size={24}/>
                        </a> {`  `} */}
                    </Col>
                    <Col xs={4}>
                        <span className='cursorPointer' onClick={scrollToTop}>Entre em contato conosco!</span>
                        <br/>
                        <br/>
                        <a href='https://www.facebook.com/ecosistemasesolucoes' title='Facebook' target='_blank' className='text-decoration-none text-reset'>
                            <FaFacebookSquare size={24}/>
                        </a>{`  `}
                        <a href='https://www.instagram.com/ecosistemas_/' title='Instagram' target='_blank' className='text-decoration-none text-reset'>
                            <FaInstagram size={24} />
                        </a>{`  `}
                        <OverlayTrigger trigger={['click', 'focus', 'hover']} placement='top' overlay={tooltipEmail}>
                            <span onClick={() => copyText('comercial@ecosistemasesoluções.com.br')} className='cursorPointer'><FaEnvelope size={24}/></span>
                        </OverlayTrigger>{`  `}
                        <a href='https://wa.me/5551991672281' target='_blank' title='Whatsapp' className='text-decoration-none text-reset'>
                            <FaWhatsapp size={24}/>
                        </a> {`  `}
                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Rodape;