function html_rangking(){
return '<div class="card theme nav top"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn"> '+
'            <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col right padding-8 center nav-btn hide"> '+
'            <div class="rips circle save-btn" style="padding:5px 0px"><i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Rangking Produk</div></div> '+
'    </div> '+
'</div> '+
'<div class="content-of-sub"> '+
'    <div class="padding" id="tgl"><select class="select"></select></div> '+
'    <div class="padding-64 center loading"><i class="la la-circle-o-notch la-spin text-theme-d3" style="font-size:35px"></i></div> '+
'    <div class="padding" id="list-share"> '+
'        <div class="responsive" style="padding-bottom:16px"><div id="fcanvas"><canvas id="canvas"></canvas></div></div> '+
'    </div> '+
'</div> '+
'<scr'+'ipt>show_rangking();window.chart_bar = null;</scr'+'ipt> ';
}
var chart_bar = null;
function show_rangking(month=0){
    var loading = $(".loading"), 
        list = $("#list-share"),
        tgl = $("#tgl");
    loading.show(); 
    list.hide();
    if(month === 0)
        tgl.hide();
    getX({m:"pengelola-get-rangking", id_pengelola:getLS("id_user"), month:month}, function(res){
        if(res.status=="success"){
            setChartBar(res.data, res.data_do, res.data_all);
            set_data_month(res.months, tgl);
            loading.hide();
            list.show();
        }else 
            alert("Terjadi kesalahan sistem");
    });
}
function setChartBar(data, data_do, data_all){
    if(window.chart_bar !== null) window.chart_bar.destroy();
    var datas = data_all, temp = getChartJs_bar(datas);
    $("#fcanvas").css("min-width", temp.width + "px");
    window.chart_bar = new Chart(document.getElementById("canvas").getContext("2d"), temp.option);
}
function getChartJs_bar(datas) {
    var data_label = [], data_qty = [];
    for(var i = 0, l = datas.length; i < l; i++){
        data_label[i] = datas[i].item;
        data_qty[i] = datas[i].qty;
    }
    var config = {
        type: 'bar',
        data: {
            labels: data_label,
                label: "Sold",
            datasets: [{
                data: data_qty,
                backgroundColor: 'rgba(233, 30, 99, 0.8)'
            }]
        },
        options: {
            responsive: true,
            legend: false,            
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
    return {width:(l * 90), option:config};
}
function set_data_month(data=false, tgl){
    if(data !== false){
        var tp = '<select class="select white">', tpv;
        for(var i = 0, l = data.length; i < l; i++){ tpv = data[i]; tp += "<option value='"+data[i]+"'>"+descrip_bulan2(data[i])+"</option>";}
        tgl.html(tp+"</select>").change(function(){show_rangking(this.value);}); tgl.show();
    }
}
function descrip_bulan2(bulan_tahun){
    bulan_tahun = bulan_tahun.split("-");
    var bulan = parseInt(bulan_tahun[1]) - 1, tahun = bulan_tahun[0],
        blns = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return blns[bulan] + " - " + tahun;
}