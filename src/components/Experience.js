import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const { experience } = portfolioData;

  const renderExperienceCard = (expData, type) => (
    <div key={type} className="experience-card">
      <div className="experience-header">
        <h3 className="experience-title">{expData.title}</h3>
        <p className="experience-company">{expData.company}</p>
        <p className="experience-duration">{expData.duration}</p>
      </div>
      
      <div className="tech-stack">
        {expData.techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      
      <p className="experience-description">{expData.description}</p>
      
      <ul className="experience-highlights">
        {expData.highlights.map((highlight, index) => (
          <li key={index}>{highlight}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-grid">
          {renderExperienceCard(experience.currentJob, 'current')}
          {renderExperienceCard(experience.internship, 'internship')}
        </div>
      </div>
    </section>
  );
};

export default Experience;
