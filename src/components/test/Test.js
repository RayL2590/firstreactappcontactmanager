import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    body: ''
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }));
  }
  /* componentWillUpdate(){
    console.log('component will update...')
  }
  componentDidUpdate(){
    console.log('component did update...')
  } */
  //componentWillReceiveProps(nextProps, nextState){
    //utilisé ac redux souvent
  //}
  /* componentWillMount(){
    console.log('component Will mount...')
  } */

  /* static getDerivedStateFromPropos(nextProps, prevState){
    return null;
  }
  static getSnapshotBeforeUpdate(nextProps, prevState){
    console.log('get snapshot before update')
  }
 */
  render() {
    const {title, body } = this.state
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test