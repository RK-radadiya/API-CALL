import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       post:null
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res)=> {
      console.log(res.data);
      this.setState({
         post:res.data
      })
    }).catch((err)=>{
      console.log(err);
    })
  }
  render() {
    console.log("post",this.state.post);
    return (
      <div>
        <h1>Get App</h1>
        {
          this.state.post !== null?  this.state.post.map((data)=> {
            return(
              <ul key={data.id}>
                <li> Id: {data.id}</li>
                <li> Name: {data.name}</li>
                <li> Email: {data.email}</li>
                <li> Body: {data.body}</li>
              </ul>
            )
          }) : "" 
        }

      </div>
    )
  }
}

export default App