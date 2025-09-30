import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
  const { personalInfo, socialLinks } = portfolioData;

  const [profileImage, setProfileImage] = useState(personalInfo.picture);

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'linkedin':
        return '🔗';
      case 'github':
        return '🐙';
      case 'codeforces':
        return '🏆';
      case 'leetcode':
        return '💻';
      default:
        return '🔗';
    }
  };

  const getSocialLabel = (platform) => {
    switch (platform) {
      case 'linkedin':
        return 'LinkedIn';
      case 'github':
        return 'GitHub';
      case 'codeforces':
        return 'Codeforces';
      case 'leetcode':
        return 'LeetCode';
      default:
        return platform;
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setProfileImage(objectUrl);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <img 
            src={profileImage} 
            alt={personalInfo.name}
            className="profile-picture"
          />

          <label style={{
            marginTop: '8px',
            background: 'rgba(255,255,255,0.15)',
            color: '#fff',
            padding: '8px 14px',
            borderRadius: '8px',
            cursor: 'pointer',
            backdropFilter: 'blur(6px)'
          }}>
            Change photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: 'none' }}
            />
          </label>

          <h1>{personalInfo.name}</h1>
          <h2>{personalInfo.title}</h2>
          <p>{personalInfo.bio}</p>
          
          <div className="social-links">
            {Object.entries(socialLinks).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span>{getSocialIcon(platform)}</span>
                <span>{getSocialLabel(platform)}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
