import './App.css';
import React from 'react';
import axios from 'axios'

class App extends React.Component {

  constructor (){
    super()
    this.state = {
      a: "",
      b: "",
      sum: {
        a: "",
        b: "",
        c: ""
      },
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
 }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('https://breadboard-challenge-api.herokuapp.com/summation', {
      a: this.state.a,
      b: this.state.b
    })
    .then(res => {
      this.setState({sum: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render (){
    if(this.state.sum.c !== ""){
      return(
        <div className="App">
          <form>
            <label>Submit two numbers to receive their summation</label>
            <input type="text" name="a" value={this.state.a} onChange={this.handleChange}></input>
            <input type="text" name="b" value={this.state.b} onChange={this.handleChange}></input>
            <input type="button" value="Submit" onClick={this.handleSubmit}></input>
          </form>
          <div> 
            <p> Result </p>
            <p>{this.state.sum.a} + {this.state.sum.b} = {this.state.sum.c}</p>
          </div>
        </div>
      )} else {
        return(
          <div className="App">
            <form>
              <label>Submit two numbers to receive their summation</label>
              <input type="text" name="a" value={this.state.a} onChange={this.handleChange}></input>
              <input type="text" name="b" value={this.state.b} onChange={this.handleChange}></input>
              <input type="button" value="Submit" onClick={this.handleSubmit}></input>
            </form>
          </div>
        )}
}}

export default App;
