import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Turnout = () => {
    const colors = ['#239BB5', '#FFD820', '#08EF1F', '#3C11E5', '#DB00FF'];

    const [chartData, setChartData] = useState({
        series: [
            {
                data: [150, 120, 80, 40, 10], // Update with your desired values
            },
        ],
        options: {
            chart: {
                height: 350,
                type: 'bar',
                events: {
                    click: function (chart, w, e) {
                        // console.log(chart, w, e)
                    },
                },
            },
            colors: colors,
            plotOptions: {
                bar: {
                    columnWidth: '35%',
                    distributed: true,
                },
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            xaxis: {
                categories: [
                    '1999',
                    '2005',
                    '2010',
                    '2015',
                    '2020',
                ],
                labels: {
                    style: {
                        colors: colors,
                        fontSize: '16px',
                        fontWeight:"700"
                    },
                },
            },
            yaxis: {
                show: false, // Set y-axis to not show
            },
        },
    });

    return (
        <div className="Turnout">
            <h2>VOTER TURNOUT RESULT</h2>
            <div id="chart">
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={550} />
            </div>
        </div>
    );
};

export default Turnout;



