const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      filters: [],
      fruit: [],
      filteredFruit: [],
      selectedFilter: null
    }

    this.filterChange = this.filterChange.bind(this)
  }

  fetchFruits(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit, filteredItems: fruit}));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  componentWillMount() {
    this.fetchFruits()
    this.fetchFilters()
  }

  filterChange(e){
    this.setState({ selectedFilter: e.target.value });
    this.state.selectedFilter !== null ?
      filtering = this.state.fruit.filter(fruit => fruit.fruit_type === this.state.selectedFilter) :
      filtering = this.state.fruit
    this.setState({filteredFruits: filtering})
  }

  render(){
    return (<FruitBasket filters={this.state.filters} filteredFruit = {this.state.filteredFruit} handleFilterChange={this.filterChange} />)
  }
}

module.exports = App;
