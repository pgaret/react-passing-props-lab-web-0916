const React = require('react');
const { Component } = require('react');

const FilteredFruitList = (props) => {
  var fruit = props.fruit
  if (props.filter !== 'all' && props.filter != null) {
    fruit = props.fruit.filter(fr=>fr.fruit_type === props.filter)
  }
  return (
    <ul className="fruit-list">
      {fruit.map((i,idx) => <li key={idx}>{i.char}</li>)}
    </ul>
  );
}

FilteredFruitList.defaultProps = {
  filteredFruit: [],
  fruit: [],
  filter: null
}

module.exports = FilteredFruitList;
