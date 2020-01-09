
function fn_network(username)
{
    var params = {'username' : username   };

    $("#loadingBar").show();

    $.ajax({
        type : "POST",
        url : "/vis/ajax/pt4.php",
        data : params,
        dataType : "json",
        error:function(e){
            alert(e.responseText);
        },
        success : function(data){

            if(data.status == 'true'){

                var nodes = new vis.DataSet(data.nodes);
                var edges = new vis.DataSet(data.edges);
                var container = document.getElementById('mynetwork');
                var data = {
                  nodes: nodes,
                  edges: edges
                };
                var options = {
                    layout:{
                        randomSeed:611585
                    },
                    nodes: {
                        shape: 'dot',
                    //    size: 10,
                        font: {
                            size: 15,
                            color: '#000000'
                        },
                        borderWidth: 0 // 노드의 테두리다
                    },
                    edges : {
                    //     width:12, 선의 굵기라서 여기서 주면안됨
                    //    value : 100,
                         // length:570,
                    },
                    groups : {
                        0 : {
                            color:{background:'blue', border:'aqua'},
                            shape:'diamond'
                        },
                        1 : {
                            color:{background:'red', border:'pink'},
                        },
                        2 : {
                            color:{background:'yellow', border:'orange'},
                        },
                        3 : {
                            color:{background:'purple', border:'orchid '},
                        },
                    }
                    , physics: true,


                }; // options's end

                var network = new vis.Network(container, data, options);

                // 진행바 까지
                network.on("stabilizationProgress", function(params) {
                    var maxWidth = 496;
                    var minWidth = 20;
                    var widthFactor = params.iterations/params.total;
                    var width = Math.max(minWidth,maxWidth * widthFactor);

                    document.getElementById('bar').style.width = width + 'px';
                    document.getElementById('text').innerHTML = Math.round(widthFactor*100) + '%';
                });
                network.once("stabilizationIterationsDone", function() {
                    document.getElementById('text').innerHTML = '100%';
                    document.getElementById('bar').style.width = '496px';
                    document.getElementById('loadingBar').style.opacity = 0;
                    // really clean the dom element
                    setTimeout(function () {document.getElementById('loadingBar').style.display = 'none';}, 500);
                });


                 var tt = network.getSeed();
                 console.log(tt);

            }  // status's end
        } //success's end

    });


}
