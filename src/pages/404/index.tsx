import React, { useCallback } from 'react';
import { Alert, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Container, SpotError } from './styles';


const RegisterBrand: React.FC = () => {

    const history = useHistory();


    const handleReturn = useCallback(()=>{
        history.push('/');
    },[history]);

    return ( <Container>

        <SpotError>
            <Alert variant="danger">
            <Alert.Heading>something went wrong...</Alert.Heading>
            <p>This page does not exist!</p>
            <hr />
            <p>Click here to return to Geo Weather Find!</p>
            </Alert>
            <Button size="lg" variant="success" onClick={handleReturn} className="btn mb-4 ">retornar</Button>
        </SpotError>

 

    </Container>)           
}

export default RegisterBrand;
