import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box-component';


class App extends Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  handleChange = (e)=>{
    // console.log(this)
    this.setState({searchField: e.target.value})
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({
          robots: users
        })
      })
  }
  render(){
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot => 
      robot.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    )
    return (
      <div className="App">
        <h1>Robots Rolodex</h1>
        <SearchBox placeholder='search robot' handleChange={this.handleChange} />
        <CardList robots={filteredRobots}/>
      </div>
    );
  }
}

// function App() {
//   const [robots, setRobot] = useState( [] );
  
//   useLayoutEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => {
//          console.log("$$$$$$$$$$")

//         setRobot(users)
//       }, robots)
//   })

//   return (
//     <div className="App">
//       <CardList robots={robots}/>
//     </div>
//   );
// }

export default App;
