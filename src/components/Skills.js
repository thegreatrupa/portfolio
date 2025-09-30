import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { technicalSkills } = portfolioData;

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          {Object.entries(technicalSkills).map(([categoryKey, category]) => (
            <div key={categoryKey} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
