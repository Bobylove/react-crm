import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {items:[]}
  }
  componentDidMount(){
    fetch ('/infos.json')
    .then( clients => clients.json())
    .then( ({clients: items}) => this.setState({items}))
  }
  update( e ) {
    this.setState({last_name: e.target.value})
  }

  render() {
    let items = this.state.items.map(item => {
      return <option id="listClient" className="item" value={item.id} key={item.last_name}>{item.last_name}</option>
    });
    let info = this.state.items.map(infos => {
      return <li id="inf" className="infu" value={infos.id +" "+ infos.last_name} >{infos.id +" "+ infos.last_name +" "+ infos.first_name}</li>
    });
    
    return (
      <div className="App">
        <h1>Clients </h1>
          <select id="listName" onClick={this.update.bind(this)} onChange={this.update.bind(this)}>
          {items}
          </select>
      <div className="infosDuClient" >

          <ul>
            {info}
          </ul>
      </div>
      
      </div>
      );
  }
}

export default App;
