import { generateData, generateTemplate } from './utils/tooltip.js';

export const getFirstChart = (data) => ({
  tooltip: {
    trigger: 'axis',
    order: 'seriesDesc',
    axisPointer: {
      type: 'none',
    },
    formatter: function(params) {
      const data = generateData(params);
      const template = generateTemplate(data);

      return template;
    },

    padding: 0,
    borderWidth: 0,
    backgroundColor: '#212226',
  },
  
  dataset: {
    dimensions: data.dimensions,
    source: data.source,
  },

  itemStyle: {
    borderWidth: 1,
    borderColor: '#212226',
    borderRadius: 1.5,
  },

  grid: {
    left: 0,
    right: 0,
    bottom: 0,
    top: '20px',
    containLabel: true
  },

  xAxis: { 
    type: 'category',
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },

  yAxis: {
    type: 'value',
    min: 0,
    max: 500,
    splitLine: {
      lineStyle: {
        color: '#292829',  
      }
    },
  },

  series: [
    { 
      type: 'bar', 
      stack: 'main',
      itemStyle: {
        color: '#9747ff',
      },
    },
    { 
      type: 'bar', 
      stack: 'main',
      itemStyle: {
        color: '#0177f7',
      },
    },
    { 
      type: 'bar', 
      stack: 'main',
      itemStyle: {
        color: '#11d6ff',
      },
    },
    { 
      type: 'line',
      symbol: 'none',
      smooth: true,
      showSymbol: false,
      legendHoverLink: false,
      lineStyle: {
        color: '#c6ec92',
      },
    },
  ],

  backgroundColor: '#1b1b1e',
});

export const getSecondChart = (data) => ({
  tooltip: {
    trigger: 'axis',
    order: 'seriesDesc',
    axisPointer: {
      type: 'none',
    },
    formatter: function(params) {
      const data = generateData(params);
      const template = generateTemplate(data);

      return template;
    },

    padding: 0,
    borderWidth: 0,
    backgroundColor: '#212226',
  },

  dataset: {
    dimensions: data.dimensions,
    source: data.source,
  },

  grid: {
    left: 0,
    right: '1%',
    bottom: '1%',
    top: '20px',
    containLabel: true
  },

  xAxis: { 
    type: 'category',
    boundaryGap: false,
    axisTick: {
      show: false,
    },
    axisLine: {
      show: false,
    },
  },

  color: [
    '#18A0FB', '#13D6FF'
  ],

  yAxis: {
    type: 'value',
    min: 0,
    max: 600,
    splitLine: {
      lineStyle: {
        color: '#292829',  
      }
    },
  },

  series: [
    {
      type: 'line',
      stack: 'plan',
      areaStyle: {
        color: '#18A0FB4D',
      },
      symbol: 'circle',
      symbolSize: 8,
      emphasis: {
        focus: 'series'
      },
    },
    {
      type: 'line',
      stack: 'fact',
      symbol: 'circle',
      symbolSize: 8,
      areaStyle: {
        color: '#BDFFFF',
        opacity: 0.7,
      },
      emphasis: {
        focus: 'series'
      },
    },
  ],
});
