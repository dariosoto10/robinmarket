const OPTIONS = {
  legend: {
    display: false,
  },
  hover: {
    intersect: false,
  },
  elements: {
    line: {
      tension: 0,
    },
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  tooltips: {
    mode: 'index',
    intersect: false,
    callbacks: {},
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
        },
      },
    ],
  },
}

const LINE_STYLES = {
  type: 'line',
  borderWidth: 2,
  pointHoverRadius: 6,
  borderColor: '#1d3f8d',
  backgroundColor: '#4a66a859',
  pointHoverBorderWidth: 4,
  pointHoverBorderColor: '#1d3f8d',
  pointHoverBackgroundColor: '#1d3f8d',
  pointBorderColor: 'rgba(0, 0, 0, 0)',
  pointBackgroundColor: 'rgba(0, 0, 0, 0)',
}

export { OPTIONS, LINE_STYLES }
