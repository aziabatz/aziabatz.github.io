import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart, RadialLinearScale, PointElement, LineElement, Filler } from 'chart.js';
import './Radar.css'

Chart.register(RadialLinearScale, PointElement, LineElement, Filler);

const RadarChart = () => {
    const data = {
        labels: ['Problem-solving', 'Communication', 'Adaptability', 'Teamwork', 'Proactiveness'],
        datasets: [
            {
                label: 'My soft skills',
                data: [90, 78, 98, 80, 95],
                backgroundColor: 'rgba(34, 202, 236, .2)',
                borderColor: 'rgba(34, 202, 236, 1)',
                pointBackgroundColor: 'rgba(34, 202, 236, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(34, 202, 236, 1)',
            },
        ],
    };

    const options = {
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 10,
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1'
            },
            angleLines: {
              color: 'rgba(0, 0, 0, 0.2'
            },
          },
        },
        maintainAspectRatio: false,
      };
    
    return (<div className='radar-chart-container'>
        <Radar className='radar-chart' data={data} options={options} />
    </div>);
};

export default RadarChart;
