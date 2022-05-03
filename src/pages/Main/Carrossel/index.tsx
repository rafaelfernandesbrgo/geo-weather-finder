
import React from 'react';
import { CarroselBlock, DetailedForecast, ShortForeCast, Speed, Tempeture, Title,Image} from './styles';
import {  Carousel } from 'react-bootstrap';
import IForecast from '../../../dtos/IForecast';


interface IProps {
    data: IForecast[]
}

const Carrossel: React.FC<IProps> = ({data}) => {
    return (
            <Carousel  >
                {data.map(item => (
                        <Carousel.Item interval={5000} key={item.number}>
                                <CarroselBlock>
                                    <Title>{`Day ${item.number} - ${item.name}`}</Title>
                                    <Tempeture>{`${item.temperature}° ${item.temperatureUnit}`}</Tempeture>
                                    <Speed>{`Wind Speed ${item.windSpeed} going to ${item.windDirection}`}</Speed>
                                    <Image src={item.icon} alt="weather-icon" />
                                    <ShortForeCast> {`${item.shortForecast}`}</ShortForeCast>
                                    <DetailedForecast>{`${item.detailedForecast}`}</DetailedForecast>
                                </CarroselBlock>
                        </Carousel.Item >
                ))}
            </Carousel>

    )
}




export default Carrossel
;


