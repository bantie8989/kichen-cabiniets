import './testimonial.css'

import React from 'react';
function Testimonials () {
  const testimonials = [
    {
      id: 1,
      quote:
        'I am so happy with my new kitchen cabinets from this company! They are beautiful, functional, and made with high-quality materials. I highly recommend them to anyone looking for new cabinets.',
      name: 'Jane Doe',
      image: 'https://example.com/customer1.jpg',
    },
    {
      id: 2,
      quote:
        'These cabinets are amazing! They were easy to install and look great in my kitchen. I get compliments on them all the time. Thanks, [company name]!',
      name: 'John Doe',
      image: 'https://example.com/customer2.jpg',
    },
    {
      id: 3,
      quote:
        'I recently had [company name] install new cabinets in my kitchen and I couldn\'t be happier. The installation was quick and easy, and the cabinets look fantastic. I highly recommend them!',
      name: 'Jim Brown',
      image: 'https://example.com/customer3.jpg',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (currentTestimonial - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="testimonials">
      <h2>Hear from Our Customers</h2>
      <div className="testimonial-quote">
        <p>{testimonials[currentTestimonial].quote}</p>
        <div className="testimonial-info">
          <img src={testimonials[currentTestimonial].image} alt={testimonials[currentTestimonial].name} />
          <div>
            <h3>{testimonials[currentTestimonial].name}</h3>
            <p>- {testimonials[currentTestimonial].quote}</p>
          </div>
        </div>
      </div>
      <div className="testimonial-nav">
        <button className='btn' onClick={prevTestimonial}>Previous</button>
        <button className='btn' onClick={nextTestimonial}>Next</button>
      </div>
    </section>
  );
};

export default Testimonials;