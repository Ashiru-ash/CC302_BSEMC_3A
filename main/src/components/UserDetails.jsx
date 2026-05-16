import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';

const UserDetails = ({ user, onClose }) => {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(salary);
  };

  const formatPhone = (phone) => {
    return phone.replace(/(\d{1})(\d{3})(\d{4})/, '($1) $2-$3');
  };

  return (
    <div className="user-details-overlay" onClick={onClose}>
      <div className="user-details-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="user-details-content">
          <img src={user.avatar} alt={user.name} className="details-avatar" />
          
          <div className="details-info">
            <h2>{user.name}</h2>
            <div className="details-grid">
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{user.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{formatPhone(user.phone)}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Company:</span>
                <span className="detail-value">{user.company}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Role:</span>
                <span className="detail-value">{user.role}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Salary:</span>
                <span className="detail-value">{formatSalary(user.salary)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UserDetails.propTypes = {
  user: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired
};

export default UserDetails;