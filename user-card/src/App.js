import React from 'react'
import User from './components/User';
import Followers from './components/Followers';
import axios from 'axios'
import './styles.css'

class App extends React.Component {
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    axios
      .get('https://api.github.com/users/mpvn30')
      .then(res => {
        this.setState({
          user: res.data
        });
        console.log(res);
      })
      .catch(err => console.log(err));

    axios
      .get('https://api.github.com/users/mpvn30/followers')
      .then(res => {
        this.setState({
          followers: res.data
        });
        console.log(res.data, `followers`);
      })
      .catch(err => console.log(err));

  }

  render() {
  return (
    <div className="App">
      <h1>Welcome to your Github followers card!</h1>
      <h2>Current user: </h2>
      <User user={this.state.user}/>
      <h2>User Followers: </h2>
      <Followers followers={this.state.followers} />
    </div>
  );
  }
}

export default App;
