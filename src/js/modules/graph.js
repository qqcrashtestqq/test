import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

Chart.defaults.font.size = 16
Chart.defaults.font.family = 'Roboto, sans-serif'

const data = {
  subjects: [
    'Алгеб',
    'Геомет',
    'Біолог',
    'Хімія',
    'АнМов',
    'ФізКул',
    'Мистец',
    'Геогра',
    'ІстУкр',
    'ВсеІст',
    'Фізика',
    'УкМ',
    'УкрЛіт',
    'ЗарЛіт',
    'Інформ'
  ],
  colors: ['rgba(232, 224, 255, 1)', 'rgba(224, 235, 255, 1)', 'rgba(255, 224, 224, 1)', 'rgba(224, 255, 240, 1)']
}

const innerBarText = {
  id: 'innerBarText',
  afterDatasetsDraw(chart) {
    const {
      ctx,
      data,
      chartArea: { bottom },
      scales: { x }
    } = chart

    ctx.save()
    data.labels.forEach((item, index) => {
      ctx.font = 'Roboto 16px sans-serif'
      ctx.fillStyle = '#4F4F4F'
      ctx.fillText(data.labels[index], x.getPixelForValue(index) - 20, bottom - 20)
    })
  }
}

const graph = () => {
  const ctx = document.getElementById('graph')

  if (!ctx) return
  new Chart(ctx, {
    type: 'bar',
    plugins: [ChartDataLabels, innerBarText],

    data: {
      labels: data.subjects,

      datasets: [
        {
          data: [9, 10, 9, 11, 11, 2, 11, 8, 6, 10, 9, 9, 11, 9, 9],
          backgroundColor: data.colors,
          borderSkipped: false,
          barPercentage: 1,
          categoryPercentage: 0.88
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      animation: false,
      plugins: {
        tooltip: false,
        legend: false,
        datalabels: { anchor: 'end', align: 'bottom', offset: 10, color: '#1C1C1C' }
      },
      elements: {
        bar: {
          borderRadius: 5
        }
      },
      scales: {
        y: {
          max: 12,
          min: 1,
          grid: { color: '#C8D9FD', drawBorder: false },
          beginAtZero: true,
          ticks: { stepSize: 1, font: { size: 14, weight: 400 } }
        },
        x: {
          grid: { tickColor: false, drawOnChartArea: false, drawBorder: false },
          ticks: { display: false, font: { size: 16, weight: 400 }, color: '#4F4F4F' }
        }
      }
    }
  })
}
export default graph
