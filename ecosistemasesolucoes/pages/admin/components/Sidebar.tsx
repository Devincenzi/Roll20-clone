import type { NextPage } from 'next';
import { Row, Col, Container } from 'react-bootstrap';
import { useAuth } from '../../api/AuthContext';
import styles from './dashboard.module.css';

const Sidebar : NextPage = () => {
    const { logout } = useAuth();

    return (
        <>
        <div className={`flex-column w-100 bg-dark ${styles.sidebar}`}>
            <a href="#" className='d-flex justify-content-center py-2' role='button'><img src="/imgs/logosm.png" width={48} height={48}/></a>
            <hr/>
            <a href="/admin/conteudos" className={`mb-2 ${styles.sidebarLink}`}>Conteúdos</a>
            <a href="/admin/politicaeprivacidade" className={`mb-2 ${styles.sidebarLink}`}>Politica e Privacidade</a>
            <a href="/admin/usuarios " className={`mb-2 ${styles.sidebarLink}`}>Usuários</a>
            <a href="#" onClick={logout} className={`mb-2 ${styles.sidebarLink}`}>Sair</a>
        </div>
        </>
    );
}

export default Sidebar;