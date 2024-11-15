import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';

export default function FAQ() {
  const [accordions, setAccordions] = useState([]);


  const fetchFaq = async () => {
    const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
    const data = await res.json();
    setAccordions(data);
  };

  useEffect(() => {
    fetchFaq();
  }, []);

  return (
    <section className="FAQ">
      <div className="FAQ-container">
        <div className="contact-text">
          <h3>Any questions? <br /> Check out the FAQs</h3>
          <p>Still have unanswered questions and need to get in touch?</p>
        </div>
        <div className="accordion-mobile">
          <img src="Images/FAQ logo/mobile/Background+Border.svg" alt="" />
          <img src="Images/FAQ logo/mobile/Background+Border-1.svg" alt="" />
          <img src="Images/FAQ logo/mobile/Background+Border-2.svg" alt="" />
          <img src="Images/FAQ logo/mobile/Background+Border-3.svg" alt="" />
          <img src="Images/FAQ logo/mobile/Background+Border-4.svg" alt="" />
          <img src="Images/FAQ logo/mobile/Background+Border-5.svg" alt="" />
        </div>
        <div className="btn-container">
          <button className="btn-contact">Contact us now</button>
        </div>
        <div id="call" className="contact-container">
          <img src="Images/FAQ logo/Call.svg" alt="Telefon" />
          <p>Still have questions?</p>
          <div className="contact-link">
            <a href="#">Contact us</a>
            <img src="Images/FAQ logo/Vector(1).svg" alt="Pil" />
          </div>
        </div>
        <div id="message" className="contact-container">
          <img src="Images/FAQ logo/Message.svg" alt="Skriv bubbla" />
          <p>Still have questions?</p>
          <div className="contact-link">
            <a href="#">Contact us</a>
            <img src="Images/FAQ logo/Vector(2).svg" alt="Pil" />
          </div>
        </div>
      </div>

      <div className="accordion">
        {accordions.map((item) => (
          <Accordion key={item.id} title={item.title} content={item.content} />
        ))}
      </div>
    </section>
  );
}
