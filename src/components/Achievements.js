import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const { achievements } = portfolioData;

  return (
    <section className="section" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <p className="achievement-text">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
