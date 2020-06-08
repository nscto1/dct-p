function html_list_share_profit(){
return '<style>.w100{width:100px}</style><div class="card theme nav top"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn"> '+
'            <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col right padding-8 center nav-btn hide"> '+
'            <div class="rips circle save-btn" style="padding:5px 0px"><i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Share Profit</div></div> '+
'    </div> '+
'</div> '+
'<div class="content-of-sub"> '+
'    <div class="padding-16 center loading"><i class="la la-circle-o-notch la-spin text-theme-d3" style="font-size:25px"></i></div> '+
'    <div id="list-share"></div> '+
'</div> '+
'<scr'+'ipt>setRippleEffect();ambil_data_share();</scr'+'ipt> ';
}
function ambil_data_share(){
    var loading = $(".loading"), list = $("#list-share"); loading.show(); list.hide();
    getX({m:"pengelola-share-profit-list",id_pengelola:getLS("id_user")},function(res){
    if(res.status=="success"){set_data_share(res.data);loading.hide();list.show();}else alert("Terjadi kesalahan sistem");});
}
function set_data_share(data){
    var omz = data.total_omzet, bhn = data.bahan_baku, opp = data.operasional,
        omz_do = data.total_omzet_do, bhn_do = data.bahan_baku_do, opp_do = data.operasional_do, 
        blns = lsp_susun_tanggal(omz, bhn, opp, omz_do, bhn_do, opp_do),
        bln, t1=0, t2=0, t3=0, t4=0, t5=0, t6=data.share_profit, t7=0, t8=0, t9=0, t10=0, l = blns.length, i = 0,
        html = "<div class=\"padding-16 center loading text-gray\">Data share profit kosong</div>";
    if(l){
        html = ""; 
        while(i < l){
            bln = blns[i++];
            t8 = parseFloat(lsp_cari_data(bln, omz_do));
            t9 = parseFloat(lsp_cari_data(bln, bhn_do));
            t10= parseFloat(lsp_cari_data(bln, opp_do));
            t1 = parseFloat(lsp_cari_data(bln, omz)) + t8;
            t2 = parseFloat(lsp_cari_data(bln, bhn)) + t9;
            t3 = t1 - t2;
            t4 = parseFloat(lsp_cari_data(bln, opp)) + t10;
            t5 = t3 - t4;
            t7 = t6*t5/100;
            if(t7 < 0) t7 = 0;
            html += html_data_share(bln, t1, t2, t3, t4, t5, t6, t7); 
        }
    }
    $("#list-share").html(html);
}
function html_data_share(bln, t1, t2, t3, t4, t5, t6, t7){
    return ''+
    '<div class="padding text-purple">SHARE PROFIT BULAN '+lsp_showBln(bln)+'</div> '+
    '<div class="container" id="share-profit"> '+
    '    <div class="card white text-gray margin-bottom border-left border-purple" style="border-left-width:7px!important"> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t1)+'</div><div class="rest">Total Omzet</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t2)+'</div><div class="rest">Bahan Baku</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t3)+'</div><div class="rest">Gross Profit</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t4)+'</div><div class="rest">Operasional</div></div> '+
    '            <div class="row padding border-top"><div class="col right right-align w100">'+inRp(t5)+'</div><div class="rest">Net Profit</div></div> '+
    '            <div class="row padding purple"> '+
    '                <div class="col right right-align w100"><b>'+inRp(t7)+'</b></div><div class="rest"><b>'+t6+'<small>%</small> Profit Anda</b></div> '+
    '            </div> '+
    '    </div> '+
    '</div> ';
}
function lsp_susun_tanggal(tb_omz, tb_bhn, tb_opp, tb_omz_do, tb_bhn_do, tb_opp_do){ 
    var bln = lsp_ambil_tanggal(tb_omz), un_bln = [];
    bln = bln.concat(lsp_ambil_tanggal(tb_bhn)); 
    bln = bln.concat(lsp_ambil_tanggal(tb_opp)); 
    bln = bln.concat(lsp_ambil_tanggal(tb_omz_do)); 
    bln = bln.concat(lsp_ambil_tanggal(tb_bhn_do)); 
    bln = bln.concat(lsp_ambil_tanggal(tb_opp_do)); 
    bln.sort(); 
    bln.reverse();
    $.each(bln, function(i, el){ 
        if($.inArray(el, un_bln) === -1) un_bln.push(el);
    }); 
    return un_bln;
}
function lsp_ambil_tanggal(tb){var arr=[];for(var i=0,l=tb.length;i<l;i++) arr.push(tb[i].bulan); return arr}
function lsp_cari_data(bln, tbl){
    var val = 0; for(var i = 0, l = tbl.length; i < l; i++) if(tbl[i].bulan == bln){val = tbl[i].nilai;break;} return val;
}
function lsp_showBln(bln){
    bln = bln.split("-");
    return getMonthNames(parseInt(bln[1])-1).toUpperCase() + " " + bln[0];
}