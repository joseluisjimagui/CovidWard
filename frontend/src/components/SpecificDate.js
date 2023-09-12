import React, { Component } from 'react'
import axios from 'axios'
import { Bar } from 'react-chartjs-2';
import OptionPicker from './OptionPicker'
import DatePicker from './DatePicker'
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

var propList = []


export default class
    Today extends Component {

    state = {
        resList: [],
    }

    beneficios = [56886, 0, 0, 0, 1731628, 33, 1293, 0, 0, 2, 0, 0, 305, 1293, 0, 1731628, 68693, 1660758, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56886, 0, 56886, 0, 0, 0, 0, 0, 0, 0, 0]
    meses = ['positive', 'probableCases', 'negative', 'pending', 'totalTestResults', 'hospitalizedCurrently', 'hospitalizedCumulative', 'inIcuCurrently', 'inIcuCumulative', 'onVentilatorCurrently', 'onVentilatorCumulative', 'recovered', 'death', 'hospitalized', 'hospitalizedDischarged', 'totalTestsViral', 'positiveTestsViral', 'negativeTestsViral', 'positiveCasesViral', 'deathConfirmed', 'deathProbable', 'totalTestEncountersViral', 'totalTestsPeopleViral', 'totalTestsAntibody', 'positiveTestsAntibody', 'negativeTestsAntibody', 'totalTestsPeopleAntibody', 'positiveTestsPeopleAntibody', 'negativeTestsPeopleAntibody', 'totalTestsPeopleAntigen', 'positiveTestsPeopleAntigen', 'totalTestsAntigen', 'positiveTestsAntigen', 'positiveIncrease', 'negativeIncrease', 'total', 'totalTestResultsIncrease', 'posNeg', 'dataQualityGrade', 'deathIncrease', 'hospitalizedIncrease', 'commercialScore', 'negativeRegularScore', 'negativeScore', 'positiveScore', 'score']

    misoptions = {
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

    midata = {
        labels: this.meses,
        datasets: [
            {
                label: 'Beneficios',
                data: this.beneficios,
                backgroundColor: 'rgba(0, 220, 195, 0.5)'
            }
        ]
    };

    async componentDidMount() {
        const res = await axios.get(' https://api.covidtracking.com/v1/states/current.json')
        this.state.resList = res.data



        //console.log('Mounting...')
        this.state.resList.forEach(function (element) {
            //propList.push(element.state)
            propList.push(element)
        })
        //console.log(propList)

    };

    check() {

        /*//console.log(Object.keys(this.state.resList));
        this.myLabel = Object.keys(this.state.resList)
        //console.log(this.myLabel)
        
        //console.log(Object.values(this.state.resList));   
        this.values = Object.values(this.state.resList)   
        //console.log(this.myData)
        */
        //this.state.myData
    }

    render() {
        return (
            <div>
                <h1>Date</h1>
                <DatePicker />
                <OptionPicker list={propList} />
                <Button onClick={() => { this.check() }} variant="contained" color="primary">
                    Check it
                </Button>
                <canvas id="myChart"></canvas>
                <Bar data={this.midata} options={this.misoptions} />
            </div>
        )
    }
}