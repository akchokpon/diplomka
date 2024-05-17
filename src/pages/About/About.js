import React from 'react';
import './About.css'; // Импортируем файл стилей

function About() {
  return (
    <section className="About">
      <div className="container">
        <div className="About_in flex">
          <div className="About_img img_wrap">
            {/* Вставьте содержимое изображения здесь */}
          </div>
          <div className="About_txt">
            <h3 className='About_tit'>Apple cuts greenhouse gas emissions in half</h3>
            <p>
              <b>Innovations in clean energy, materials, and recycling are driving progress toward Apple’s ambitious environmental goals.</b>
              Apple has reduced its overall greenhouse gas emissions by more than 55 percent since 2015, the company shared today in its 2024 Environmental Progress Report. The milestone marks important progress on the journey toward Apple 2030, the company’s ambitious goal to become carbon neutral across its entire value chain by the end of this decade.
            </p>
          </div>
        </div>
        <div className="About_bot">
          <p>“The proof of Apple’s commitment to climate action is in our progress: We’ve slashed emissions by more than half, all while serving more users than ever before,” said Lisa Jackson, Apple’s vice president of Environment, Policy, and Social Initiatives. “More hard work is ahead of us, and we’re focused on harnessing the power of innovation and collaboration to maximize our impact.”</p>
          <p>Teams across Apple and its global supply chain have contributed to Apple 2030 and the company’s environmental efforts, driving innovations in clean energy and energy efficiency, materials, carbon removal, water stewardship, zero waste, and recycling. As Apple celebrates Earth Day with its customers around the world — including through curated environment-focused collections on podcasts, books, and more — here’s a look at 10 innovations, partnerships, and activities engaging customers and advancing global climate and environmental progress.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
