var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");
var ctx3 = document.getElementById("myChart3").getContext("2d");
var ctx4 = document.getElementById("myChart4").getContext("2d");
var ctx5 = document.getElementById("myChart5").getContext("2d");
var ctx6 = document.getElementById("myChart6").getContext("2d");
var ctx7 = document.getElementById("myChart7").getContext("2d");
var ctx8 = document.getElementById("myChart8").getContext("2d");
var ctx9 = document.getElementById("myChart9").getContext("2d");

var data = {
    labels: ["Data1", "Data2", "Data3", "Data4", "Data5", "Data6", "Data7", "Data8", "Data9", "Data10"],
    datasets: [
        {
            label: "Audios",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#0992c7",
            borderColor: "#0992c7",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.9,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 8,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [10, 55, 30, 45, 80, 50, 60, 55, 30, 90, 60],
            spanGaps: false,
        }
    ]
};
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            },
            legend: { 
                display: false 
            }
    }
});

var data2 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [90, 10],
            backgroundColor: [
                "#0992c7",
                "#1dc0e4"
            ],
            hoverBackgroundColor: [
                "#125f77",
                "#36A2EB"
            ]
        }]
};

// For a pie chart
var myPieChart = new Chart(ctx2,{
    type: 'pie',
    data: data2,
options: {
        scale: {
            reverse: true,
            ticks: {
                beginAtZero: true
            }
        },
        legend: { 
            display: false 
        }
}
});

var data3 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [90, 10],
            backgroundColor: [
                "#0992c7",
                "#1dc0e4"
            ],
            hoverBackgroundColor: [
                "#125f77",
                "#36A2EB"
            ]
        }]
};

// For a pie chart
var myPieChart = new Chart(ctx3,{
    type: 'pie',
    data: data3,
options: {
        scale: {
            reverse: true,
            ticks: {
                beginAtZero: true
            }
        },
        legend: { 
            display: false 
        }
}
});

var data4 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [90, 10],
            backgroundColor: [
                "#0992c7",
                "#1dc0e4"
            ],
            hoverBackgroundColor: [
                "#125f77",
                "#36A2EB"
            ]
        }]
};
// For a pie chart
var myPieChart = new Chart(ctx4,{
    type: 'pie',
    data: data4,
options: {
        scale: {
            reverse: true,
            ticks: {
                beginAtZero: true
            }
        },
        legend: { 
            display: false 
        }
}
});
var data5 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [90, 10],
            backgroundColor: [
                "#0992c7",
                "#1dc0e4"
            ],
            hoverBackgroundColor: [
                "#125f77",
                "#36A2EB"
            ]
        }]
};
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx5, {
    type: 'doughnut',
    data: data5,
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            },
            legend: { 
                display: false 
            }
    }
});
var data6 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [90, 10],
            backgroundColor: [
                "#0992c7",
                "#1dc0e4"
            ],
            hoverBackgroundColor: [
                "#125f77",
                "#36A2EB"
            ]
        }]
};
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx6, {
    type: 'doughnut',
    data: data6,
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            },
            legend: { 
                display: false 
            }
    }
});
var data7 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [90, 10],
            backgroundColor: [
                "#0992c7",
                "#1dc0e4"
            ],
            hoverBackgroundColor: [
                "#125f77",
                "#36A2EB"
            ]
        }]
};
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx7, {
    type: 'doughnut',
    data: data7,
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            },
            legend: { 
                display: false 
            }
    }
});
var data8 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [90, 10],
            backgroundColor: [
                "#0992c7",
                "#1dc0e4"
            ],
            hoverBackgroundColor: [
                "#125f77",
                "#36A2EB"
            ]
        }]
};
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx8, {
    type: 'doughnut',
    data: data8,
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            },
            legend: { 
                display: false 
            }
    }
});

 var data9 = {
    labels: ["Word1", "Word2", "Word3", "Word4", "Word5", "Word6", "Word7", "Word8"],
    datasets: [
        {
            label: "Keywords",
            backgroundColor: "rgba(179,181,198,0.2)",
            borderColor: "#0992c7",
            pointBackgroundColor: "#0992c7",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(179,181,198,1)",
            data: [95, 70, 30, 81, 40, 65, 10, 100]
        }
    ]
};
var myRadarChart = new Chart(ctx9, {
    type: "radar",
    data: data9,
    options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            },
            legend: { 
                display: false 
            }
    }
});