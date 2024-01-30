import './index.css';

import * as echarts from 'echarts';

import { firstData, secondData } from './scripts/constants.js';
import { getFirstChart, getSecondChart } from './scripts/charts.js';


const firstChart = echarts.init(document.getElementById('first'));
firstChart.setOption(getFirstChart(firstData));

const secondChart = echarts.init(document.getElementById('second'));
secondChart.setOption(getSecondChart(secondData));

window.addEventListener('resize', function() {
  firstChart.resize();
  secondChart.resize();
})