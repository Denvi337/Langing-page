google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Date',  'AI Rnd', 'Ai Rtx'],
          ['AUG (21)', 100000,         63000]
        ]);

        var options_stacked = {
          isStacked: false,
          height: 300,
          legend: {position: 'top', maxLines: 3},
          vAxis: {minValue: 0},
          backgroundColor: "transparent",
          legendTextStyle: { color: '#FFF' },
          titleTextStyle: { color: '#FFF' },
          hAxis: {
            textStyle:{color: '#FFF'}
        }
        };

        var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

        chart.draw(data, options_stacked);
      }