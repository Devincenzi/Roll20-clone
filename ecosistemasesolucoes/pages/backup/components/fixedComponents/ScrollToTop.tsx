import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { Fade } from 'react-bootstrap';
import styles from './scrollToTop.module.css';

const ScrollToTop : NextPage = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(showButton);
            if(window.pageYOffset > 300)
                setShowButton(true);
            else
                setShowButton(false);
        });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behaviour: 'smooth'
        });
      }

    return (
        <>
            <Fade in={showButton}>
                <FaAngleUp className={styles.toTopBtn} onClick={() => scrollToTop()} />
            </Fade>
        </>
    );
}

export default ScrollToTop;