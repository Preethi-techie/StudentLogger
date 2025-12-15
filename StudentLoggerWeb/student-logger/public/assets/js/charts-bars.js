const barConfig = {
    type: 'bar',
    data: {
        labels: ['July', 'August', 'September', 'November', 'December', 'January', 'Febrauary'],
        datasets: [
            {
                label: 'Absent',
                backgroundColor: '#0694a2',
                // borderColor: window.chartColors.red,
                borderWidth: 1,
                data: [3, 14, 42, 44, 33, 60, 20],
            },
            {
                label: 'Present',
                backgroundColor: '#7e3af2',
                // borderColor: window.chartColors.blue,
                borderWidth: 1,
                data: [76, 53, 63, 72, 54, 50, 84],
            },
        ],
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
    },
}

const barsCtx = document.getElementById('bars')
window.myBar = new Chart(barsCtx, barConfig)

