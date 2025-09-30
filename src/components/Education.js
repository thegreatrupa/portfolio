import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section className="section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-card">
          <h3 className="education-degree">{education.degree}</h3>
          <p className="education-university">{education.university}</p>
          
          <div className="education-details">
            <div className="education-detail">
              <div className="education-detail-label">Duration</div>
              <div className="education-detail-value">{education.duration}</div>
            </div>
          </div>

          {education.additional && education.additional.length > 0 && (
            <div style={{ marginTop: '24px' }}>
              <h4 style={{ marginBottom: '12px', color: '#2d3748' }}>Other Education</h4>
              <div className="courses-grid">
                {education.additional.map((item, index) => (
                  <div key={index} className="course-item">
                    <strong>{item.school}</strong><br />
                    <span>{item.program}</span><br />
                    <span>{item.duration}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
