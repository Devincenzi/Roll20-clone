import { useState } from 'react';
import CharacterSheets from './CharacterSheets';
import MyInputGroup from './MyInputGroup';
import Message from './Message';
import { Navbar, Container, Nav } from '../../../node_modules/react-bootstrap/esm/index';
import styles from './Sidebar.module.css';

export default function Sidebar(){
    const [comando, setComando] = useState<string>();
    const [chatMessages, setChatMessages] = useState<{headMessage: string, bodyMessage: string}[]>([
        {headMessage: '', bodyMessage: 'primeira mensagem'}
    ]);

    const [showSideBar, setShowSideBar] = useState<"chat"|"CharacterSheets"|"3"|"4">("chat");

    function renderSideBar(){
        switch(showSideBar){
            case 'chat':
                return (
                <>
                <div className={`h-75 scroll`}>
                    {chatMessages.map((msg, index) => <Message bodyMessage={msg.bodyMessage} key={index} />)}
                </div>
                <div className="bottom-fixed">
                    <MyInputGroup label='#' name='newMessageChat' value={comando} hasButton={true} onclick={() => setChatMessages((prevChatMessages) => [...prevChatMessages, {headMessage: '', bodyMessage: comando}] )} onchange={e => setComando(e.target.value)}/>
                </div>
                </>
            );
            break;
            case 'CharacterSheets':
                    return ( <CharacterSheets/> );
            break;
        }
    }

    return (
        <>
        <div className={`h-100 ${styles.sidebar}`}>
            <Navbar bg="light" expand="sm" onSelect={(selectedSession) => setShowSideBar(selectedSession)}>
                <Container>
                    <Nav className="w-100 justify-content-around me-auto">
                        <Nav.Link eventKey={'chat'}>Chat</Nav.Link>
                        <Nav.Link eventKey={'CharacterSheets'}>PJs</Nav.Link>
                        <Nav.Link eventKey={'3'}>3</Nav.Link>
                        <Nav.Link eventKey={'4'}>4</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            {renderSideBar()}
        </div>
        </>
    )
}