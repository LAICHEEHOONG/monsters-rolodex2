// import logo from './logo.svg';
import React from 'react';

import { CardList } from './components/card-list/card-list.component.jsx';

import { SearchBox } from './components/search-box/search-box.component.jsx';

import './App.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monster: [],
      searchField: '',
      searchMonster: []
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(arr => {
        this.setState({ monster: arr });
        this.setState({ searchMonster: this.state.monster })
      })
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value })
  }
  



  render() {

    const filteredMonster = this.state.monster.filter(obj => {
      return obj.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

 
    



    return (



      <div className="App">
        <h1>MONSTERS ROLODEX 2</h1>

        <SearchBox 
          PLACEHOLDER='search monsters'
          HANDLECHANGE={this.handleChange}
        />

        <CardList monsters={filteredMonster} />


      </div>
    )
  }
}


export default App;















