
import React, { useCallback, useState } from 'react';
import api from '../../services/api';
import { ButtomSpot, Container, FormBox, SpotCarrossel } from './styles';
import { Form, Button, Alert,  } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import IForecast from '../../dtos/IForecast';
import ICoordenates from '../../dtos/ICoordenates';
import { useToast } from '../../hooks/Toast';
import * as Yup from 'yup';
import { getValidationErrorsMessage } from '../../utils/getValidationErrors';
import Carousel from './Carrossel';


const Main: React.FC = () => {


    const { register, handleSubmit, reset } = useForm();
    const { addToast } = useToast();

    const [forecastsPeriods, setForeCastPeriods ]= useState<IForecast[]| undefined>();
    const [numberForeCast] = useState(14);


    
    const handleSearch = useCallback(async( form: any)=>{

      //clear to start a new search
      setForeCastPeriods(undefined);

        try {

            //valid form
            const schema = Yup.object().shape({
                street: Yup.string().required('Street is required'),
                city: Yup.string().required('City is required'),
                state: Yup.string().required('State is required'),
                zip: Yup.number().typeError('ZIP must be a number').required('ZIP is required')})
              await schema.validate(form, {
                abortEarly: false,
              });
      

            //request cordenate
            const response = await api.get( `${process.env.REACT_APP_API_GEO}/address`, {
                params: {
                    street: form.street,
                    city: form.city,
                    state: form.state,
                    zip: form.zip,
                    benchmark: 'Public_AR_Census2020',
                    format: 'json'
                }    
            } );


            //if don't get coordenate 
            if(response.data.result.addressMatches.length === 0){
                addToast({
                    type: 'error',
                    title: 'This address was not found',
                  });
                  return ;
            }


            //extract coordenate
            const cordinates: ICoordenates = {
                 longitude:  response.data.result.addressMatches[0].coordinates.x,
                 latitude: response.data.result.addressMatches[0].coordinates.y,
            }



            //take forecast
            const foreCastPoint = await api.get( `${process.env.REACT_APP_API_FORCAST}/${cordinates.latitude},${cordinates.longitude}`)
            const forecastAPi = await api.get( foreCastPoint.data.properties.forecast);
            setForeCastPeriods(forecastAPi.data.properties.periods.splice(0, numberForeCast));


            //info
            addToast({
                type: 'success',
                title: `Weather forecast found`,
              })

            
        } catch (error) {

            //form validation errors
            if (error instanceof Yup.ValidationError) {
                const errors = getValidationErrorsMessage(error);
                addToast({
                  type: 'error',
                  title: 'Address is not correct!',
                  description: errors,
                });
                return;
              }

            //unidentified errors or external apis
              addToast({
                type: 'error',
                title: 'Used servers are not working properly',
              });
        }

      
    },[addToast, numberForeCast]);


    const handleClear = useCallback(()=>{
        reset();
        setForeCastPeriods(undefined);
        addToast({
            type: 'success',
            title: `Form has been cleared!`,
          });
    },[addToast, reset]);


    return (    

        <Container>
    
          <FormBox>

                <Alert variant="success">
                        <Alert.Heading>Geo Weather Finder</Alert.Heading>
                        <hr />
                        <p>Search the address and get the weather forecast for the next days</p>
                        <p className="mb-0">Enjoy!</p>
                </Alert>
                    
                <Form onSubmit={handleSubmit(handleSearch)}>             
                    <Form.Group>
                    <Form.Label  className="text-muted "> street</Form.Label>
                    <Form.Control {...register("street")} type="street" placeholder="type the street" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label className="text-muted "> city</Form.Label>
                    <Form.Control {...register("city")} type="city" placeholder="type the city" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label className="text-muted "> state</Form.Label>
                    <Form.Control {...register("state")} type="state" placeholder="type the state" />
                    </Form.Group>
                    <Form.Group>
                    <Form.Label className="text-muted "> zip</Form.Label>
                    <Form.Control {...register("zip")} type="zip" placeholder="type the zip" />
                    </Form.Group>

                    <ButtomSpot>
                        <Button size="lg" variant="success" type="submit" className="btn mb-4 mr-4 ">search</Button>
                        <Button size="lg" variant="warning" onClick={handleClear} className="btn mb-4 ">clear</Button>
                    </ButtomSpot>
                </Form>
          </FormBox >

          {forecastsPeriods &&  forecastsPeriods.length >0  && (
              <SpotCarrossel>
                      <Carousel data={forecastsPeriods} />
              </SpotCarrossel>
          )}

        </Container >
    )
}



export default Main;



