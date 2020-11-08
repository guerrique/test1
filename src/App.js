import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {

  state = {
    users: [
      {name: 'Roberto'}
    ]
  }

  changeNameHandler = (event) => {
    this.setState({
      users: [
        { name: event.target.value }
      ]
    }
    )
  }

  render() {
    return (
      <div className='App'>
        <h1>First Assignment</h1>
        <UserInput
          name={this.state.users.[0].name}
          input={this.changeNameHandler}/>
        <UserOutput
          name='Francis'/>
        <UserOutput
          name={this.state.users[0].name}/>

      </div>

    );
  }

}

export default App;
