import React, { Component } from 'react'
import { Chart } from 'chart.js'
import axios from 'axios'

export default class
  Today extends Component {

  state = {
    currentState: ''
  }

  async componentDidMount() {
    const res = await axios.get(' https://api.covidtracking.com/v1/states/current.json')
    this.checkRes(res.data[0])

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  checkRes(res) {
    this.state.currentState = res.state
    delete res.state
    delete res.dateChecked
    delete res.dateModified
    delete res.date
    delete res.hash
    console.log(res)

  }

  render() {
    return (
      <div>
        <canvas id="myChart"></canvas>
      </div>

      
    )
  }
}
