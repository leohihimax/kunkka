var Chart = require('./index');

var c = new Chart.PieChart(document.getElementById('container'));

c.setOption({
  lineWidth: 10,
  bgColor: '#f2f3f4',
  series: [{
    color: '#ff5a67',
    value: 0.8
  }],
  text: {
    color: '#ff5a67',
    fontSize: '30px'
  },
  period: 600
});

var c2 = new Chart.PieChart(document.getElementById('container2'));

c2.setOption({
  lineWidth: 10,
  bgColor: '#f2f3f4',
  series: [{
    color: '#42b9e5',
    value: 0.4
  }],
  text: {
    color: '#42b9e5',
    fontSize: '30px'
  },
  period: 600,
  easing: 'easeInOutQuart'
});

var c3 = new Chart.PieChart(document.getElementById('container3'));

c3.setOption({
  lineWidth: 10,
  bgColor: '#f2f3f4',
  series: [{
    color: '#42b9e5',
    value: 0.4
  }],
  text: {
    color: '#42b9e5',
    fontSize: '30px'
  },
  period: 600
});

var c4 = new Chart.GaugeChart(document.getElementById('container4'));

c4.setOption({
  lineWidth: 0.4,
  bgColor: '#f2f3f4',
  tickColor: '#bbbfc5',
  series: [{
    color: '#42b9e5',
    value: 0.8
  }],
  pointer: {
    radius: 10,
    color: '#252f3d'
  },
  period: 600,
  easing: 'easeOutCubic'
});


var c5 = new Chart.BarChart(document.getElementById('container5'));

c5.setOption({
  unit: 'TB',
  title: '容量／TB',
  xAxis: {
    tickWidth: 50,
    barWidth: 30
  },
  yAxis: {
    color: '#f2f3f4',
    tickPeriod: 10,
    tickColor: '#939ba3'
  },
  series: [{
    color: '#1797c6',
    value: 105
  }, {
    color: '#42b9e5',
    value: 25
  }, {
    color: '#42b9e5',
    value: 75
  }],
  period: 600,
  easing: 'easeOutCubic'
});