import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Testimonials(props) {

    const testimonials = [{ quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', author: 'John Doe', }, { quote: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', author: 'Jane Smith', }, { quote: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.', author: 'Bob Johnson', },];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <div>
            <Carousel responsive={responsive}>
                {testimonials.map((testimonial, index) => (
                    <div key={index}>
                        <p>{testimonial.quote}</p>
                        <p>{testimonial.author}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Testimonials;