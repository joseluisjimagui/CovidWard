import React, { Component } from 'react'
import axios from 'axios'
import LineChart from './LineChart';
import OptionPicker from './OptionPicker'
import Button from '@material-ui/core/Button';

var propList = []
var currentState = '';
var myInfo = []


export default class Today extends Component {

  state = {
    resList: []    
  }

  myData = [10]
  myLabel = ["oilo"]
  

  

  async componentDidMount() {
    const res = await axios.get(' https://api.covidtracking.com/v1/states/current.json')
    this.state.resList = res.data    
    
    ////console.log(res.data[0].state)
    currentState = res.data[0].state
    
    ////console.log('Mounting...')
    this.state.resList.forEach(function (element) {            
      //propList.push(element.state)
      propList.push(element)
    })
    ////console.log(propList)        
    
    await this.check()

  };

  checkRes(res) {    
    //delete res.state
    delete res.dateChecked
    delete res.dateModified
    delete res.date
    delete res.hash
    delete res.state
    delete res.totalTestResultsSource
    delete res.lastUpdateEt
    delete res.checkTimeEt
    delete res.fips
    delete res.grade
    ////console.log(res)

  };  

  check() {
    
    this.checkRes(this.state.resList[0])
    this.myLabel = Object.keys(this.state.resList[0])
    ////console.log(this.myLabel)
        
    var list = this.state.resList[0]
    Object.keys(list).forEach(function(key) {
      if(list[key] === null) {
        list[key] = 0
      }
  })
     
    this.myData = Object.values(this.state.resList[0])   
    ////console.log(this.myData)

    myInfo = this.myData
    


    ////console.log(myInfo)

    //this.state.myData
  }


  render() {
    return (
      <div>
        <h1>Today in </h1>              
        <h1>{currentState}</h1>  
        <OptionPicker list={propList}/>
        <Button onClick={() => { this.check() }} variant="contained" color="primary">
          Check it
        </Button>
        <LineChart list={propList}/>
        
      </div>
    )
  }
}