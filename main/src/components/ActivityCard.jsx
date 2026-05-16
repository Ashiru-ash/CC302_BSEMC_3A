import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ActivityCard.css';

const ActivityCard = ({ 
  title, 
  description, 
  image, 
  path, 
  features,
  gradient,
  index 
}) => {
  return (
    <motion.div 
      className="activity-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className="card-header" style={{ background: gradient }}>
        <img src={image} alt={title} className="card-image" />
        <div className="card-badge">{index + 1}</div>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <ul className="features-list">
          {features.map((feature, idx) => (
            <li key={idx} className="feature-item">
              <span className="feature-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Link to={path} className="card-button">
          Launch Activity
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

ActivityCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  features: PropTypes.array.isRequired,
  gradient: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

export default ActivityCard;