import React, { useState, useEffect } from 'react';
import UserList from './../../components/UserList';
import SearchFilter from '../../components/SearchFilter';
import UserDetails from './../../components/UserDetails';
import usersData from './user.json';
import './App.css';

function Activity3() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect #1: Load JSON data
  useEffect(() => {
    const loadUsers = async () => {
      try {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUsers(usersData);
        setFilteredUsers(usersData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load users data');
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  // useEffect #2: Filter users based on search and role
  useEffect(() => {
    const filtered = users.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           user.company.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesRole = selectedRole === 'all' || user.role === selectedRole;
      
      return matchesSearch && matchesRole;
    });
    
    setFilteredUsers(filtered);
  }, [searchTerm, selectedRole, users]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleRoleFilter = (role) => {
    setSelectedRole(role);
  };

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading users data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>{error}</h2>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>🏢 Employee Management System</h1>
        <p>Manage and explore employee data with React Hooks</p>
      </header>

      <main className="app-main">
        <div className="content-wrapper">
          <SearchFilter 
            onSearch={handleSearch}
            onFilter={handleRoleFilter}
          />
          
          <div className="main-content">
            <UserList
              users={filteredUsers}
              onUserClick={handleUserClick}
              selectedUserId={selectedUser?.id}
            />
            
            {selectedUser && (
              <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Activity3;