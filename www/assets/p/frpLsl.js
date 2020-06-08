function html_list_pengeluaran(){
return '<div id="the-sub-content-app"> '+
'    <style>.this-icon{width:43px;padding-top:5px;padding-left:1px}</style> '+
'    <div class="card theme nav top"> '+
'        <div class="row"> '+
'            <div class="col padding-8 center nav-btn"> '+
'                <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="col right padding-8 center nav-btn hide"> '+
'                <div class="rips circle save-btn" style="padding:5px 0px"><i class="la la-check la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="rest padding-8 row large"><div style="padding-top:5px"> List Pengeluaran</div></div> '+
'        </div> '+
'    </div> '+
'    <div class="content-of-sub"> '+
'        <div class="card white padding-large text-gray margin-bottom"> '+
'            <input class="input datepicker" placeholder="Tanggal Pengeluaran" id="fdate" readonly><input class="hide date_val" id="date"> '+
'        </div> '+
'        <div class="padding-16 center loading"><i class="la la-circle-o-notch la-spin text-theme-d3" style="font-size:25px"></i></div> '+
'        <div id="list-pengeluaran"></div> '+
'    </div> '+
'</div> '+
'<div id="sub-sub-content-app" class="light-gray"></div> '+
'<scr'+'ipt> '+
'setRippleEffect(); '+
'setDate(); '+
'$(".datepicker").datepicker("option", "onSelect", function(){ '+
'    var dateTime = new Date($(this).datepicker("getDate")), strDateTime =  dateTime.getFullYear() + "-" + (dateTime.getMonth()+1) + "-" + dateTime.getDate(); '+
'    $("#"+this.id.substr(1, this.id.length)).val(strDateTime); ambil_data_pengeluaran(strDateTime); '+
'}); '+
'ambil_data_pengeluaran($(".date_val").val()); '+
'$("#sub-sub-content-app").html(html_edit_pengeluaran()); '+
'</scr'+'ipt> ';
}
function ambil_data_pengeluaran(tgl){
    var loading = $(".loading"), list = $("#list-pengeluaran"); loading.show(); list.hide();
    getX({m:"pengelola-pengeluaran-list",id_pengelola:getLS("id_user"), tanggal:tgl},function(res){
    if(res.status=="success"){set_data_pengeluaran(res.data);loading.hide();list.show();}else alert("Terjadi kesalahan sistem");});
}
function set_data_pengeluaran(data){
    var html = "<div class=\"padding-16 center loading text-gray\">Data pengeluaran kosong</div>", l = data.length, i = 0;
    if(l){ html = ""; while(i < l){html += html_data_pengeluaran(data[i]); i++;}} $("#list-pengeluaran").html(html);
}
function html_data_pengeluaran(data){
    var span_data = crSpans(data),ops = data.is_operasional == 1? "Operasional" : "Bahan Baku";
    return ''+
    '<div class="card white text-gray margin-bottom" style="padding-bottom:5px"> '+
    '    <div class="padding row"> '+
    '        <div class="col" style="width:55px;padding-top:5px;padding-left:1px"><i class="la la-mail-forward la-fw xxlarge"></i></div> '+
    '        <div class="ripple- text-blue col right this-icon" onclick="u_peng(this)"><i class="la la-edit la-fw xxlarge"></i>'+span_data+'</div> '+
    '        <div class="rest large border-bottom" style="padding:10px 0 7px 0">'+data.item+'</div> '+
    '    </div> '+
    '    <div class="padding row"> '+
    '        <div class="col" style="width:55px;padding-top:5px;padding-left:1px"><i class="la la-money la-fw xxlarge"></i></div> '+
    '        <div class="ripple- text-deep-orange col right this-icon" onclick="d_peng(this, '+data.id+')"><i class="la la-trash la-fw xxlarge"></i></div> '+
    '        <div class="rest large border-bottom" style="padding:10px 0 7px 0">'+inRp(data.harga)+'</div> '+
    '    </div> '+
    '    <div class="padding row margin-bottom"> '+
    '        <div class="col" style="width:55px;padding-top:5px;padding-left:1px"><i class="la la-tag la-fw xxlarge"></i></div> '+
    '        <div class="ripple- text-deep-orange col right this-icon">&nbsp;</div> '+
    '        <div class="rest large border-bottom" style="padding:10px 0 7px 0">'+ops+'</div> '+
    '    </div> '+
    '</div> ';
}
function crSpans(temp){return crSpan(temp.id)+crSpan(temp.item)+crSpan(temp.harga)+crSpan(temp.is_operasional);}
function crSpan(inHtml){ return "<span class=\"hide detail-data\">"+inHtml+"</span>"; }
function open_menu_s2(){ var tag = $("#sub-sub-content-app"), nav = tag.find(".nav"), con = tag.find(".content-of-sub");
    con.css("margin-top", "3px"); tag.removeClass("sub-bottom-off").css("padding-top","-50px!important").addClass("sub-bottom").show();
    window.setTimeout(function(){ nav.addClass("top"); con.css("margin-top", "55px"); $("#the-sub-content-app").hide(); }, 190);
}
function close_menu_s2(){
    var tag = $("#sub-sub-content-app"); $("#the-sub-content-app").show();
    tag.find(".nav").removeClass("top").next().css("margin-top", "3px");
    tag.removeClass("sub-bottom").addClass("sub-bottom-off");
    window.setTimeout(function(){tag.hide()}, 190);
}
function u_peng(ths){ var spans = $(ths).find(".detail-data"); $("#iu_id").val(spans.eq(0).html()); $("#iu_nama").val(spans.eq(1).html()); 
    $("#iu_harga").val(spans.eq(2).html()); if(spans.eq(3).html() == "1")$("#iu_is1").click();else $("#iu_is2").click(); open_menu_s2();}
function d_peng(ths, id){ if(confirm("Yakin hapus data ini?")){ getX({m:"pengelola-pengeluaran-del", id:id},function(res){
    if(res.status=="success"){ alert("Berhasil terhapus"); $(ths).parent().parent().remove();}else alert("Terjadi kesalahan sistem");
});}}
function save_peng_upd(ths){
    ths = $(ths);
    if(ths.attr("in-action") !== undefined) return false;
    
    var id = $("#iu_id").val(), $nama = $("#iu_nama"), $harga = $("#iu_harga"), $is_op1 = $("#iu_is1").is(":checked"), 
        fd = new FormData(), nama = $nama.val().trim(), harga = $harga.val().trim();
    if(nama == ""){$nama.focus();alert("Silahkan lengkapi nama item");}
    else if(harga == ""){$harga.focus();alert("Silahkan lengkapi biaya item");}
    else{ var is_op = $is_op1 ? '1':'0'; ths.attr("in-action", "true");
        getX({m:"pengelola-pengeluaran-edit",id:id,nama:nama,harga:harga,is_operasional:is_op}, function(res){
            if(res.status == "success"){ambil_data_pengeluaran($(".date_val").val());alert("Data berhasil disimpan");close_menu_s2();}
            else alert("Terjadi kesalahan sistem"); ths.removeAttr("in-action");
        });
    }
}
function html_edit_pengeluaran(){
return '<div class="card blue nav"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn" onclick="close_menu_s2()"> '+
'            <div class="rips circle" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col right padding-8 center save-btn nav-btn" onclick="save_peng_upd(this)"> '+
'            <div class="rips circle" style="padding:5px 0px"> <i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Edit Pengeluaran</div></div> '+
'    </div> '+
'</div> '+
'<div class="content-of-sub"> '+
'    <div class="card white text-gray"> '+
'        <input class="hide" id="iu_id"> '+
'        <div class="border-bottom padding-16"> '+
'            <div class="padding row"> '+
'                <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> <i class="la la-mail-forward la-fw xxlarge"></i></div> '+
'                <div class="rest"> '+
'                    <div class="group-float" style="margin:1px 0 0 0"> '+
'                        <input class="input-float input" type="text" placeholder="Nama Pengeluaran" id="iu_nama"> <span class="bar-float"></span> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="padding row"> '+
'                <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> <i class="la la-money la-fw xxlarge"></i></div> '+
'                <div class="rest"> '+
'                    <div class="group-float" style="margin:1px 0 0 0"> '+
'                        <input class="input-float input" type="number" placeholder="Biaya Pengeluaran" id="iu_harga"> '+
'                        <span class="bar-float"></span> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="padding row" style="padding-left:26px!important"> '+
'                <div class="col s6"> '+
'                    <label class="ripple-"><input type="radio"class="radio"id="iu_is1"value="1"name="is_operasional"> Operasional</label> '+
'                </div> '+
'                <div class="col s6"> '+
'                    <label class="ripple-"><input type="radio"class="radio"id="iu_is2"value="0"name="is_operasional"> Bahan Baku</label> '+
'                </div> '+
'            </div> '+
'        </div> '+
'    </div> '+
'</div> ';
}