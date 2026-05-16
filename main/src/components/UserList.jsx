import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';
import './UserList.css';

const UserList = ({ users, onUserClick, selectedUserId }) => {
  return (
    <div className="user-list">
      <h2>Employee Directory ({users.length} employees)</h2>
      <div className="users-grid">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onUserClick={onUserClick}
            isSelected={selectedUserId === user.id}
          />
        ))}
      </div>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  onUserClick: PropTypes.func.isRequired,
  selectedUserId: PropTypes.number
};

export default UserList;