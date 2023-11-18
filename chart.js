google.charts.load('current', {'packages':['corechart']});
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
      }