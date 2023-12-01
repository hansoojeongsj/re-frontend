import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TodayMenuImage from '/today-menu.jpg';
import SchoolImage from '/school.jpg'; 
import { StyledCarousel } from './NavStyle';


const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 6000, 
    };

    return (
        <StyledCarousel {...settings}>
            <div>
                <img src={TodayMenuImage} className='carousel-inner' alt="Today's Menu" />
            </div>
            <div>
                <img src={SchoolImage} className='carousel-inner' alt="school" />
            </div>
        </StyledCarousel>
    )
};

export default CarouselComponent;
