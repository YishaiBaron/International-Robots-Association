import React,{Component} from "react";
//import logo from "./logo.svg";
import "./App.css";
import {CardList} from './components/card-list/card-list.component'
import monsters from './usersdata.json';
import {SearchBox} from './components/search-box/search-box-compoment'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters,
      searchField: ''
    
    };
  }

/*
  componentDidMount(){
  
      console.log("try")

      fetch('./usersdata.json')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
    
  
  }*/
  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  } 
  render() {
    const {monsters,searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()) );

    return (
      <div className = "App">
     <h1> International Robots Association
     </h1>
     <SearchBox

     placeholder='Filter Search' 
     handleChange= {this.handleChange}
     
     />
      <CardList monsters={filteredMonsters}/>

        </div>
    );
  }
}



export default App;