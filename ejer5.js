google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(ejercicio5);

function ejercicio5() {
    var data = new google.visualization.arrayToDataTable([
        ['Año', 'Población', { role: 'style' }],
        ["2017", 14252, 'fill-color:green; fill-opacity:0.4'],
        ["2018", 23360, 'fill-color:green; fill-opacity:0.1'],
        ["2019", 40421, 'fill-color:green; fill-opacity:0.3'],
        ["2020", 43500, 'fill-color:green; fill-opacity:0.2']
    ]);

    var options = {
        title: 'Evolución de la población de Navalcarnero',
        width: 700+"px",
        backgroundColor: "aqua",
        animation: {
            duration: 5000,
            easing: 'out',
            startup: true
        }
    };

    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data, options);
};
ejercicio5();
