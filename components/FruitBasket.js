const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter filter={props.filters} handleChange={props.handleFilterChange} />
      <FilteredFruitList fruit={props.filteredFruit} />
    </div>
  );
}

FruitBasket.defaultProps = {
  filters: [],
  fruit: [],
  currentFilter: 'all',
  updateFilterCallback: null
}

module.exports = FruitBasket;
