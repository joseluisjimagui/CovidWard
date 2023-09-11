import React, { Component } from 'react'
import axios from 'axios'

export default class 
Today extends Component {

  state = {
    currentState : ''
  }

  async componentDidMount(){
    const res = await axios.get(' https://api.covidtracking.com/v1/states/current.json')
    console.log(res.data[0])



  }

  

  render() {
    return (
      <div>
        Today
      </div>
    )
  }
}
