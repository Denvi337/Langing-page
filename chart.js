google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        let profitVar2 = parseInt(document.querySelector('#amount').value);
        let other = 100000 - profitVar2;

        let data = google.visualization.arrayToDataTable([
            ['', 'AI Rnd', 'AI Rtx', 'AI Rnx', { role: 'annotation' } ],
            ["JUN", 80000, 60000, 40000, ''],
            ["JUL", 90000, 65000, 45000, ''],
            ["AUG", 80000, 55000, 35000, ''],
            ["SEP", 90000, 60000, 40000, ''],
            ["OCT", 110000, 70000, 50000, ''],
            ["NOV", 120000, 80000, 55000, ''],
            ["DEC", 140000, 90000, 60000, ''],
            ["JAN'23", 135000, 85000, 65000, ''],
          ]);

        let view = new google.visualization.DataView(data);
        view.setColumns([0, 1, 2, 
                        {calc: "stringify",
                         type: "string",
                         role: "annotation" },
                        3]);

        let options = {
            width: 860,
            height: 400,
            legend: { position: 'top', maxLines: 3 },
            bar: { groupWidth: '75%' },
            isStacked: false,
            colors: ['#03cf75', '#426b2d', '#e0ad26'],
            dataTextStyle: { color: '#fcfcfc' },
            legendTextStyle: { color: '#fcfcfc' },
            titleTextStyle: { color: '#fcfcfc' },
            hAxis: {
                textStyle:{color: '#fcfcfc'}
            },
            backgroundColor: "transparent"
          };

        let chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
        chart.draw(view, options);
      }