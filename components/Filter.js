const React = require('react');
const { Component } = require('react');

const Filter = (props) =>{
  return (
    <select onChange={props.handleChange} defaultValue={null}>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: null
}

module.exports = Filter;
