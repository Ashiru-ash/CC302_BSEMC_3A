import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchFilter.css';

const SearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRole, setSelectedRole] = useState('all');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  const handleRoleFilter = (e) => {
    const role = e.target.value;
    setSelectedRole(role);
    onFilter(role);
  };

  return (
    <div className="search-filter">
      <div className="search-input-group">
        <input
          type="text"
          placeholder="Search by name, email, or company..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      
      <div className="filter-group">
        <select 
          value={selectedRole} 
          onChange={handleRoleFilter}
          className="filter-select"
        >
          <option value="all">All Roles</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Product Manager">Product Manager</option>
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Data Analyst">Data Analyst</option>
          <option value="DevOps Engineer">DevOps Engineer</option>
        </select>
      </div>
    </div>
  );
};

SearchFilter.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onFilter: PropTypes.func.isRequired
};

export default SearchFilter;