import React from 'react';
import PropTypes from 'prop-types';
import './UserCard.css';

const UserCard = ({ user, onUserClick }) => {
  const formatSalary = (salary) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(salary);
  };

  return (
    <div className="user-card" onClick={() => onUserClick(user)}>
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <div className="user-info">
        <h3 className="user-name">{user.name}</h3>
        <p className="user-role">{user.role}</p>
        <p className="user-company">{user.company}</p>
        <p className="user-salary">{formatSalary(user.salary)}</p>
      </div>
    </div>
  );
};

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
  onUserClick: PropTypes.func.isRequired
};

export default UserCard;