import React, { Component } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2';
import OptionPicker from './OptionPicker'
import Button from '@material-ui/core/Button';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

var statesList = []



export default class Today extends Component {

  state = {
    resList: [],
  }

  myData = Object.values(this.state.resList)
  myLabel = Object.keys(this.state.resList)
  

  options = {
    responsive: true,
    animation: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        min: -25,
        max: 100
      },
      x: {
        ticks: { color: 'rgba(0, 220, 195)' }
      }
    }
  };

  data = {
    labels: this.myLabel,
    datasets: [
      {
        label: 'Valores Actuales',
        data: this.myData,
        backgroundColor: 'rgba(0, 220, 195, 0.5)'
      }
    ]
  };

  async componentDidMount() {
    const res = await axios.get(' https://api.covidtracking.com/v1/states/current.json')
    this.state.resList = res.data    
    
    
    
    console.log('Mounting...')
    this.state.resList.forEach(function (element) {            
      //statesList.push(element.state)
      statesList.push(element)
    })
    console.log(statesList)    
    
  };

  checkRes(res) {
    //this.state.currentState = res.state
    //delete res.state
    delete res.dateChecked
    delete res.dateModified
    delete res.date
    delete res.hash
    console.log(res)

  };  

  check() {
    
    /*console.log(Object.keys(this.state.resList));
    this.myLabel = Object.keys(this.state.resList)
    console.log(this.myLabel)
    
    console.log(Object.values(this.state.resList));   
    this.values = Object.values(this.state.resList)   
    console.log(this.myData)
    */
    //this.state.myData
  }


  render() {
    return (
      <div>
        <h1>Today</h1>                
        <OptionPicker list={statesList}/>
        <Button onClick={() => { this.check() }} variant="contained" color="primary">
          Check it
        </Button>
        <canvas id="myChart"></canvas>
        <Bar data={this.data} options={this.options} />
      </div>
    )
  }
}