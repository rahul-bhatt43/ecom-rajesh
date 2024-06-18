
import React, { useState } from 'react';
import './Slider.css';

const sliderImg = [
    { id: 1, image: 'https://images.vexels.com/media/users/3/194698/raw/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg' },
    { id: 2, image: 'https://static.vecteezy.com/system/resources/previews/001/222/746/non_2x/online-delivery-on-mobile-with-scooter-concept-vector.jpg' },
    { id: 3, image: 'https://th.bing.com/th/id/OIP.j2dzEytIJ0Zf_lT6RnI0CwHaEK?rs=1&pid=ImgDetMain' }
];

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImg.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + sliderImg.length) % sliderImg.length);
    };

    return (
        <div className="slider">
            <button className="slider-button prev" onClick={prevSlide}>❮</button>
            <div className="slider-images">
                {sliderImg.map((slide, index) => (
                    <img 
                        key={slide.id}
                        src={slide.image}
                        alt={`Slide ${slide.id}`}
                        className= {index === currentIndex ? 'active' : ''}
                    />
                ))}
            </div>
            <button className="slider-button next" onClick={nextSlide}>❯</button>
        </div>
    );
};

export default Slider;
