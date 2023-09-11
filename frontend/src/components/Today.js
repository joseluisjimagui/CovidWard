import React, { Component } from 'react'
import axios from 'axios'

export default class 
Today extends Component {

  async componentDidMount(){
    const res = await axios.get(' https://api.covidtracking.com/v1/states/current.json')
    //console.log(res)
  }

  render() {
    return (
      <div>
        Today
      </div>
    )
  }
}
