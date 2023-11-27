google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const sliderMultiplier = document.getElementById('amount');
  const sliderRows = document.getElementById('length');
  const updateChartBtn = document.getElementById('test-start');
  const highestValue = document.getElementById('profit-h1');
  const chartDiv = document.getElementById('chart_div');

  const data = new google.visualization.DataTable();
  data.addColumn('string', 'X');
  data.addColumn('number', 'AI Rnd'); // First set of values
  data.addColumn('number', 'AI Rtx'); // Second set of values

  // Example initial chart data for two sets of values
  const initialData = [
    ['A', 41, 28],
    ['B', 54, 37],
    ['C', 61, 48],
    ['D', 73, 51],
    ['E', 68, 48],
    ['F', 91, 68],
    ['G', 97, 74],
    ['G', 108, 81],
    ['G', 114, 84],
    ['G', 138, 93],
    ['G', 134, 98],
    ['G', 149, 103],
    ['G', 158, 104],
    ['G', 174, 118],
    ['G', 187, 124]
  ];

  // Load initial data to the chart
  data.addRows(initialData);

  const options = {
    curveType: 'function', // Change the curveType to 'function' for a stepped area effect
    legend: { position: 'top' },
    isStacked: false, // To create a stepped area effect, set isStacked to true
    areaOpacity: 0.3, // Adjust the opacity of the area
    backgroundColor: "transparent",
    colors: ['#03cf75', '#dcaf2d'],
    height: '400px',
    legendTextStyle: { color: '#534376' },
    titleTextStyle: { color: '#FFF' },
    hAxis: {
      textStyle:{color: '#534376'}
    },
    vAxis: {
      textStyle:{color: '#534376'},
      gridlines: {
        color: "transparent"
      },
      format: '$#',
      minValue: 0
    }
  };

  const chart = new google.visualization.SteppedAreaChart(chartDiv); // Change the chart type to SteppedAreaChart
  chart.draw(data, options);

  updateChartBtn.addEventListener('click', updateChart);

  function updateChart() {
    const rowsToShow = parseInt(sliderRows.value);
    const multiplierValue = parseInt(sliderMultiplier.value);
    const newData = initialData.slice(0, rowsToShow).map(row => [
      row[0],
      row[1] * multiplierValue / 20,
      row[2] * multiplierValue / 20
    ]);

    data.removeRows(0, data.getNumberOfRows());
    data.addRows(newData);
    chart.draw(data, options);

    const allValues = newData.flatMap(row => row.slice(1)); // Extract all values
    const highest = Math.max(...allValues); // Find the highest value
    highestValue.textContent = `$${highest.toFixed(2)}`; // Display the highest value in h1
  }

}




/* google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date',  'AI Rnd', 'Ai Rtx'],
          ['AUG (21)', 104000,         63000],
          ['SEP', 118000,         73000],
          ['OCT', 151000,         94000],
          ['NOV', 141000,         82000],
          ['DEC', 128000,         48000],
          ['JAN (22)', 142000,         59000],
          ['FEB', 168000,         78000],
          ['MAR', 169000,         74000],
          ['APR', 191000,         104000],
          ['MAY', 201000,         101000],
          ['JUN', 194000,         97000],
          ['JUL', 211000,         104000],
          ['AUG', 239000,         158000],
          ['SEP', 227000,         142000],
          ['OCT', 241000,         131000],
          ['NOV', 264000,         148000],
          ['DEC', 308000,         198000],
          ['JAN (23)', 257000,         158000]
        ]);

        var options_stacked = {
          isStacked: false,
          height: 300,
          legend: {position: 'top', maxLines: 3},
          vAxis: {minValue: 0},
          backgroundColor: "transparent",
          colors: ['#03cf75', '#dcaf2d'],
          legendTextStyle: { color: '#534376' },
          titleTextStyle: { color: '#FFF' },
          hAxis: {
            textStyle:{color: '#534376'}
        },
          vAxis: {
            textStyle:{color: '#534376'},
            gridlines: {
              color: "transparent"
            }
          }
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

        chart.draw(data, options_stacked);
      }*/ 

/*google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  const sliderAmount = document.getElementById('amount');
  const chartDiv = document.getElementById('chart_div');

  const data = new google.visualization.DataTable();
  data.addColumn('string', 'X');
  data.addColumn('number', 'Values');

  const initialData = [
    ['Date',  'AI Rnd', 'Ai Rtx'],
    ['AUG (21)', 104000,         63000],
    ['SEP', 118000,         73000],
    ['OCT', 151000,         94000],
    ['NOV', 141000,         82000],
    ['DEC', 128000,         48000],
    ['JAN (22)', 142000,         59000],
    ['FEB', 168000,         78000],
    ['MAR', 169000,         74000],
    ['APR', 191000,         104000],
    ['MAY', 201000,         101000],
    ['JUN', 194000,         97000],
    ['JUL', 211000,         104000],
    ['AUG', 239000,         158000],
    ['SEP', 227000,         142000],
    ['OCT', 241000,         131000],
    ['NOV', 264000,         148000],
    ['DEC', 308000,         198000],
    ['JAN (23)', 257000,         158000]
  ];
        
  data.addRows(initialData);

  const options_stacked = {
    height: 300,
    isStacked: false,
    vAxis: {minValue: 0},
    legend: {position: 'top', maxLines: 3},
    colors: ['#03cf75', '#dcaf2d'],
    backgroundColor: "transparent",
    titleTextStyle: { color: '#FFF' },
    legendTextStyle: { color: '#534376' },
    hAxis: {
      textStyle:{color: '#534376'}
    },
    vAxis: {
      textStyle:{color: '#534376'},
      gridlines: {
      color: "transparent"
    }
    }
    };

    const chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));
    chart.draw(data, options_stacked);

    slider.addEventListener('input', function () {
      const value = parseInt(sliderAmount.value);
      const newData = initialData.map(row => [row[0], row[1] * value / 100]); // Example: Adjust chart data based on slider value
      data.removeRows(0, data.getNumberOfRows());
      data.addRows(newData);
      chart.draw(data, options_stacked);
    });
}*/
