import type { NextPage } from 'next';
import { useEffect, useState, ReactNode } from 'react';
import { Navbar, Container, Collapse } from 'react-bootstrap';

interface Props{
    needHide: boolean,
    children: ReactNode
}

const NavClient : NextPage<Props> = (props) => {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        if(!props.needHide){
            setShowNav(true);
            return;
        }

        window.addEventListener('scroll', () => {
            if(window.pageYOffset > 300)
                setShowNav(true);
            else
                setShowNav(false);
        });
    }, [])

    return (
        <Collapse in={showNav}>
            <Navbar bg='dark' expand="lg" variant='dark' fixed='top' className='px-5'>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <img src="/imgs/logosm.png" width={36} height={36} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='navbarScroll' />
                    <Navbar.Collapse id='navbarScroll'>
                        {props.children}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Collapse>
    )
}

export default NavClient;