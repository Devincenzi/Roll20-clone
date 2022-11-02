import type { NextPage } from 'next';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './WhatsappButton.module.css';

const WhatsappButton : NextPage = () => {
    return (
        <>  
            <a href='https://wa.me/5551991672281' target='_blank' className={`text-decoration-none text-reset ${styles.whatsappButtonParent}`}>
                <FaWhatsapp className={styles.whatsappButton} fill='white'/>
            </a>
        </>
    );
}

export default WhatsappButton;