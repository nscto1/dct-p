function html_statistik(){
return '<div class="card theme nav top"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn"> '+
'            <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col right padding-8 center nav-btn hide"> '+
'            <div class="rips circle save-btn" style="padding:5px 0px"><i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Statistik Omzet</div></div> '+
'    </div> '+
'</div> '+
'<div class="content-of-sub"> '+
'    <div class="padding-32 text-gray center" id="data-kosong"><i>data kosong...</i></div> '+
'    <div class="padding" id="tgl"><select class="select"></select></div> '+
'    <div class="padding-64 center loading"><i class="la la-circle-o-notch la-spin text-theme-d3" style="font-size:35px"></i></div> '+
'    <div class="padding" id="list-share"> '+
'        <div class="responsive" style="padding-bottom:16px"><div style="min-width:1000px"><canvas id="canvas"></canvas></div></div> '+
'    </div> '+
'</div> '+
'<scr'+'ipt>show_statistic();</scr'+'ipt> ';
}
function show_statistic(month=0){
    var loading = $(".loading"), 
        list = $("#list-share"),
        tgl = $("#tgl");
    $("#data-kosong").hide();
    loading.show(); 
    list.hide();
    if(month === 0)
        tgl.hide();
    getX({m:"pengelola-report-statistik", id_pengelola:getLS("id_user"), month:month}, function(res){
        if(res.status=="success"){
            if(res.data.length > 0){
                set_data_sta(res.data);
                sta_set_data_month(res.months, tgl);
                list.show();
            }else{
                $("#data-kosong").show();
            }
            loading.hide();
        }else 
            alert("Terjadi kesalahan sistem");
    });
}
function set_data_sta(data){
    var set_labels = [], set_data = [], config = []; for(var i = 0, l = data.length; i < l; i++){ set_labels[i] = i + 1; set_data[i] = data[i]; }
	config = {
		type: 'line',
		data: {
			labels: set_labels,
			datasets: [{ label: "Omzet", fill: false, backgroundColor: window.chartColors.red, borderColor: window.chartColors.red, data: set_data }]
		},
		options: {
			responsive: true, tooltips: { mode: 'index', intersect: false, }, hover: { mode: 'nearest', intersect: true },
			scales: { 
				xAxes: [{ display: true, scaleLabel: { display: true, labelString: 'Tanggal' }}], 
				yAxes: [{ display: true, scaleLabel: { display: true, labelString: 'Nilai Rupiah' }, ticks: { beginAtZero : false } }] 
			}
		}
	};
	var ctx = document.getElementById("canvas").getContext("2d");
	window.myLine = new Chart(ctx, config);
}
function sta_set_data_month(data=false, tgl){
    if(data !== false){
        var tp = '<select class="select white">', tpv;
        for(var i = 0, l = data.length; i < l; i++){ tpv = data[i]; tp += "<option value='"+data[i]+"'>"+sta_descrip_bulan(data[i])+"</option>";}
        tgl.html(tp+"</select>").change(function(){show_statistic(this.value);}); tgl.show();
    }
}
function sta_descrip_bulan(bulan_tahun){
    bulan_tahun = bulan_tahun.split("-");
    var bulan = parseInt(bulan_tahun[1]) - 1, tahun = bulan_tahun[0],
        blns = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    return blns[bulan] + " - " + tahun;
}