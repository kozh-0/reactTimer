import React, {Component} from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      comments: [],
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({posts: data, loading: false}))

      this.timerId = setInterval(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
          .then(response => response.json())
          .then(data => this.setState({comments: data}))
      }, 5000)
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div className="App">
        <h5>Hello from React</h5>
        <div>
          {this.state.loading ? <h3>loading...</h3> : <h3>{this.state.posts.length} was loaded</h3>}
        </div>
      </div>
    );
  } 
}

