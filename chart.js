document.addEventListener("DOMContentLoaded", function() {
    let labels = ["AUG'21", "SEP", "OCT", "NOV"];

let itemData = [63000, 80000, 97000, 140000];

const data = {
    labels: labels,
    datasets: [{
        data: itemData,
        backgroundColor: ['rgb(66, 221, 245)', 'rgb(87, 37, 41)']
    }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Test'
            }
        }
    }
};

const chart = new Chart(
    document.getElementById('myChart'),
    config
);
    
  });
