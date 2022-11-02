import type { NextPage } from 'next';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './dashboard.module.css';
import Sidebar from './Sidebar';

interface Props{
    title: string,
    children?: any
}

const Dashboard : NextPage<Props> = (props) => {

    return (
        <>
        <Row className={styles.content}>
            <Col xs={4} md={2}>
                <Sidebar />
            </Col>
            <Col xs={8} md={10}>
                <Row>
                    <Col xs={12}>
                        <div className={`border-bottom border-dark d-flex align-items-center text-dark px-5 py-3 ${styles.topbar}`}>
                            <h1>{props.title}</h1>
                        </div>
                    </Col>
                    <Col xs={12}>
                        <Container className='my-3'>
                            {props.children}
                        </Container>
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    );
}

export default Dashboard;