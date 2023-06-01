import React from "react";
import ReactApexChart from "react-apexcharts";

const Piechart = ({ data, labels }) => {
    const state = {
        series: data || [44, 55, 13, 43, 22],
        options: {
            chart: {
                width: 380,
                type: "pie",
            },
            labels: labels || ["Team A", "Team B", "Team C", "Team D", "Team E"],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    };

    return (
        <div>
            <ReactApexChart
                options={state.options}
                series={state.series}
                type="pie"
                width={380}
            />
        </div>
    );
};

export default Piechart;
