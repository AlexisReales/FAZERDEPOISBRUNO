function calc(){
    let c = Number(document.getElementById('n1').value)
    let i = Number(document.getElementById('n2').value)/100
    let n = Number(document.getElementById('n3').value)

    let calculo = c * (1+i) ** n
    
    console.log(calculo)
    document.getElementById('resposta').value = calculo.toFixed(2)
}

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);
var calculo = document.getElementById('resposta')

function drawChart() {
    let c = Number(document.getElementById('n1').value)
    let n = Number(document.getElementById('n3').value)
    let calculo = Number(document.getElementById('resposta').value)

    for(i=0;i=n;i++){
        var mes = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30
        ]
    }

  var data = google.visualization.arrayToDataTable([
    ['Year', 'CDB/Selic', 'Poupança'],
    [ '2004',  1400,      230],
    ['2005',  1170,      460],
    ['2006',  660,       1120],
    ['2007',  1030,      540]
  ]);

  var options = {
    title: 'Juros Selic x Poupança',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}