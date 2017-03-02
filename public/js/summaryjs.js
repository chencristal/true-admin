var ctx = document.getElementById("myChart").getContext("2d");
var ctx2 = document.getElementById("myChart2").getContext("2d");
var ctx3 = document.getElementById("myChart3").getContext("2d");
var ctx4 = document.getElementById("myChart4").getContext("2d");
var ctx5 = document.getElementById("myChart5").getContext("2d");
var ctx6 = document.getElementById("myChart6").getContext("2d");
var ctx7 = document.getElementById("myChart7").getContext("2d");
var ctx8 = document.getElementById("myChart8").getContext("2d");
var ctx9 = document.getElementById("myChart9").getContext("2d");
var ctx10 = document.getElementById("myChart10").getContext("2d");
var ctx11 = document.getElementById("myChart11").getContext("2d");
var ctx12 = document.getElementById("myChart12").getContext("2d");
var ctx13 = document.getElementById("myChart13").getContext("2d");
var ctx14 = document.getElementById("myChart14").getContext("2d");
var ctx15 = document.getElementById("myChart15").getContext("2d");
var ctx16 = document.getElementById("myChart16").getContext("2d");
var ctx17 = document.getElementById("myChart17").getContext("2d");
var ctx18 = document.getElementById("myChart18").getContext("2d");
var ctx19 = document.getElementById("myChart19").getContext("2d");
var ctx20 = document.getElementById("myChart20").getContext("2d");
var ctx21 = document.getElementById("myChart21").getContext("2d");
var ctx22 = document.getElementById("myChart22").getContext("2d");
var ctx23 = document.getElementById("myChart23").getContext("2d");
var ctx24 = document.getElementById("myChart24").getContext("2d");
var ctx25 = document.getElementById("myChart25").getContext("2d");

var data = {
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
var myRadarChart = new Chart(ctx, {
    type: "radar",
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
                "#36A2EB"         ]
        }]
};
// And for a doughnut chart
var myDoughnutChart = new Chart(ctx2, {
    type: 'doughnut',
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
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',
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
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx4, {
    type: 'doughnut',
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
            data: [50, 50],
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
            data: [50, 50],
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
            data: [50, 50],
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
            data: [50, 50],
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
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx9, {
    type: 'doughnut',
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
var data10 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx10, {
    type: 'doughnut',
    data: data10,
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
var data11 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx11, {
    type: 'doughnut',
    data: data11,
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
var data12 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx12, {
    type: 'doughnut',
    data: data12,
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
var data13 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx13, {
    type: 'doughnut',
    data: data13,
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
var data14 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx14, {
    type: 'doughnut',
    data: data14,
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
var data15 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx15, {
    type: 'doughnut',
    data: data15,
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
var data16 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx16, {
    type: 'doughnut',
    data: data16,
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
var data17 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx17, {
    type: 'doughnut',
    data: data17,
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
var data18 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx18, {
    type: 'doughnut',
    data: data18,
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
var data19 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx19, {
    type: 'doughnut',
    data: data19,
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
var data20 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx20, {
    type: 'doughnut',
    data: data20,
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
var data21 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx21, {
    type: 'doughnut',
    data: data21,
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
var data22 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx22, {
    type: 'doughnut',
    data: data22,
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
var data23 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx23, {
    type: 'doughnut',
    data: data23,
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
var data24 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx24, {
    type: 'doughnut',
    data: data24,
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
var data25 = {
    labels: [
        "Word1",
        "Word2"
    ],
    datasets: [
        {
            data: [50, 50],
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
var myDoughnutChart = new Chart(ctx25, {
    type: 'doughnut',
    data: data25,
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