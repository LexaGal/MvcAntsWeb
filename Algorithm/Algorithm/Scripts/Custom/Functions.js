﻿function createMatrices(data) {
    $('#table1').empty();
    $('#table2').empty();
    $('#table1').append('<thead><tr><td>Distances</td></tr></thead>');
    $('#table2').append('<thead><tr><td>Flows</td></tr></thead>');

    var dist = [];
    var flow = [];
    var size = data.N;
    dist = data.DistGraph;
    flow = data.FlowGraph;
    
    var textBoxTrDist = $(document.createElement('tr')).attr("id", 'tableRowDistId1');
    var textBoxTrFlow = $(document.createElement('tr')).attr("id", 'tableRowFlowId1');

    var i;
    for (i = 0; i <= size * size; i++) {

        textBoxTrDist.append('<input type="text" name="textbox' + i +
            '" id="textboxDistId' + i + '" value="' + dist[i] + '" size="5" >');

        if ((i + 1) % size === 0) {

            textBoxTrDist.appendTo($('#table1'));
            textBoxTrDist = $(document.createElement('tr')).attr("id", 'tableRowDistId' + i / size);
        }
    }
    for (i = 0; i <= size * size; i++) {

        textBoxTrFlow.append('<input type="text" name="textbox' + i +
            '" id="textboxFlowId' + i + '" value="' + flow[i] + '" size="5" >');

        if ((i + 1) % size === 0) {

            textBoxTrFlow.appendTo($('#table2'));
            textBoxTrFlow = $(document.createElement('tr')).attr("id", 'tableRowFlowId' + i / size);
        }
    }
}

function createArray(type) {
    var array = [];

    $('[id^=textbox' + type + 'Id]').each(function () {
        var val = $(this).val();
        array.push(val);
    });
    return array;
}