function html_list_penjualan(){
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
'            <div class="rest padding-8 row large"><div style="padding-top:5px"> List Penjualan</div></div> '+
'        </div> '+
'    </div> '+
'    <div class="content-of-sub"> '+
'        <div class="card white padding-large text-gray margin-bottom"> '+
'            <input class="input datepicker" placeholder="Tanggal Penjualan" id="fdate" readonly><input class="hide date_val" id="date"> '+
'        </div> '+
'        <div class="padding-16 center loading"><i class="la la-circle-o-notch la-spin text-theme-d3" style="font-size:25px"></i></div> '+
'        <div id="list-penjualan"></div> '+
'    </div> '+
'</div> '+
'<div id="sub-sub-content-app" class="light-gray"> '+
'    <div class="card theme nav"> '+
'        <div class="row"> '+
'            <div class="col padding-8 center nav-btn" onclick="close_menu_s2()"> '+
'                <div class="rips circle" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="col right padding-8 center save-btn nav-btn" onclick="save_penj_upd(this)"> '+
'                <div class="rips circle" style="padding:5px 0px"> <i class="la la-check la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="rest padding-8 row large"><div style="padding-top:5px"> Edit Penjualan</div></div> '+
'        </div> '+
'    </div> '+
'    <div class="content-of-sub"> '+
'        <div class="card white text-gray"> '+
'            <input class="hide" id="id-penjualan"> '+
'            <div class="padding row"> '+
'                <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> <i class="la la-user la-fw xxlarge"></i></div> '+
'                <div class="rest"> '+
'                    <div class="group-float" style="margin:1px 0 0 0"> '+
'                        <input class="input-float input" type="text" placeholder="Nama Pembeli" value="Pembeli" id="nama-pembeli"> '+
'                        <span class="bar-float"></span> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="padding row margin-bottom"> '+
'                <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> <i class="la la-money la-fw xxlarge"></i></div> '+
'                <div class="rest"> '+
'                    <div class="group-float" style="margin:1px 0 0 0"> '+
'                        <input class="input-float input" type="text" value="Rp.0" readonly id="total-harga"> '+
'                        <span class="bar-float"></span> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div id="list-item"></div><!-- '+
'            <div class="padding border-top"> '+
'                <div class="large padding-y-8 text-theme-dark ripple-" onclick="tambah_produk_custom_upd()"> '+
'                   <small class="text-gray">Tambah Produk Custom</small> '+
'                </div> '+
'            </div> '+
'            --> '+
'        </div> '+
'    </div> '+
'</div> '+
'<scr'+'ipt> '+
'    setRippleEffect(); '+
'    setDate(); '+
'    ambil_data_penjualan($(".date_val").val()); '+
'    $(".datepicker").datepicker("option", "onSelect", function(){ '+
'        var dateTime = new Date($(this).datepicker("getDate")), strDateTime =  dateTime.getFullYear() + "-" + (dateTime.getMonth()+1) + "-" + dateTime.getDate(); '+
'        $("#"+this.id.substr(1, this.id.length)).val(strDateTime); ambil_data_penjualan(strDateTime); '+
'    }); '+
'</scr'+'ipt> ';
}
var penj_list_produk = []
function ambil_data_penjualan(tgl){
    var loading = $(".loading"), list = $("#list-penjualan"); loading.show(); list.hide();
    getX({m:"pengelola-pesanan-list",id_pengelola:getLS("id_user"), tanggal:tgl},function(res){
        if(res.status=="success"){
            set_data_penjualan(res.data);
            penj_list_produk = res.produk;
            loading.hide();
            list.show();
        }else alert("Terjadi kesalahan sistem");
    });
}
function set_data_penjualan(data){
    var html = "<div class=\"padding-16 center loading text-gray\">Data penjualan kosong</div>", 
        l = data.length, span_data = '', i = 0, temp, btn_del = '', btn_upd = '';
    if(l){ html = ""; while(i < l){
        temp = isi_span_penjualan(i, data); span_data = temp.spans; 
        html += html_data_penjualan_(data[i].id_penjualan, data[i].nama_pembeli, data[i].total_harga_jual, span_data); i = temp.i; i++;
    }} $("#list-penjualan").html(html);
}
function html_data_penjualan_(id, nama, total_harga, span_data){
    return ''+
    '<div class="card white text-gray margin-bottom" style="padding-bottom:5px"> '+
    '    <div class="padding row"> '+
    '        <div class="col" style="width:55px;padding-top:5px;padding-left:1px"><i class="la la-user la-fw xxlarge"></i></div> '+
    '        <div class="ripple- text-blue col right this-icon" onclick="u_penj(this)"><i class="la la-edit la-fw xxlarge"></i>'+span_data+'</div> '+
    '        <div class="rest large border-bottom" style="padding:10px 0 7px 0">'+nama+'</div> '+
    '    </div> '+
    '    <div class="padding row margin-bottom"> '+
    '        <div class="col" style="width:55px;padding-top:5px;padding-left:1px"><i class="la la-money la-fw xxlarge"></i></div> '+
    '        <div class="ripple- text-deep-orange col right this-icon" onclick="d_penj(this, '+id+')"><i class="la la-trash la-fw xxlarge"></i></div> '+
    '        <div class="rest large border-bottom" style="padding:10px 0 7px 0">'+inRp(total_harga)+'</div> '+
    '    </div> '+
    '</div> ';
}
function d_penj(ths, id){
    if(confirm("Yakin hapus data ini?")){ getX({m:"pengelola-pesanan-del", id:id},function(res){
        if(res.status=="success"){ alert("Berhasil terhapus"); $(ths).parent().parent().remove();}else alert("Terjadi kesalahan sistem");
    });}
}
function crSpans_penj(temp){
    return crSpan(temp.id_penjualan_d)+crSpan(temp.item)+crSpan(temp.qty)+crSpan(temp.harga_jual)+crSpan(temp.is_complete)+crSpan(temp.id_item);
}
function crSpan(inHtml){ return "<span class=\"hide detail-data\">"+inHtml+"</span>"; }
function isi_span_penjualan(i, data){
    var temp = data[i], spans = crSpan(temp.id_penjualan)+crSpan(temp.nama_pembeli)+crSpan(temp.total_harga_jual), 
    id_penj = temp.id_penjualan; spans += crSpans_penj(temp); temp = data[++i];
    while(temp != undefined && id_penj == temp.id_penjualan){spans += crSpans_penj(temp);temp = data[++i];}
    return {"i":--i, "spans": spans}
}
function u_penj(ths){
    var spn = $(ths).find(".detail-data"), temp = '', list_p = window.penj_list_produk, t2, t1 = [], t3;
    for(var i = 3, l = spn.length; i < l; i += 6){
        t3 = spn.eq(i+5).html();
        t1.push(t3);
        temp += html_produk_upd(t3, spn.eq(i+1).html(), spn.eq(i+2).html(), spn.eq(i+3).html(), "x");
    }
    for(var i = 0, l = list_p.length; i < l; i++){
        t2 = list_p[i];
        if(t1.indexOf(t2.id) < 0)
            temp += html_produk_upd(t2.id, t2.nama, 1, t2.harga_jual);
    }
    $("#id-penjualan").val(spn.eq(0).html());
    $("#nama-pembeli").val(spn.eq(1).html());
    $("#total-harga").val("Rp."+inRp(spn.eq(2).html()));
    $("#list-item").html(temp);
    open_menu_s2();
}
var scroll_list_penj;
function open_menu_s2(){ 
    window.scroll_list_penj = $(window).scrollTop();
    var tag = $("#sub-sub-content-app"), nav = tag.find(".nav"), con = tag.find(".content-of-sub");
    con.css("margin-top", "3px"); tag.removeClass("sub-bottom-off").css("padding-top","-50px!important").addClass("sub-bottom").show();
    window.setTimeout(function(){ nav.addClass("top"); con.css("margin-top", "55px"); $("#the-sub-content-app").hide(); }, 190);
}
function close_menu_s2(){
    var tag = $("#sub-sub-content-app"); $("#the-sub-content-app").show();
    tag.removeClass("sub-bottom").addClass("sub-bottom-off").find(".nav").removeClass("top").next().css("margin-top", "3px");
    $(window).scrollTop(window.scroll_list_penj);
    window.setTimeout(function(){tag.hide();}, 190);
}
function penj_open_produk(ths, harga){
    ths = $(ths).next();
    if(ths.hasClass("hide")){
        var $harga_qty = $("#total-harga"), harga_qty = parseInt(getNominal($harga_qty.val())) + parseInt(harga);
        $harga_qty.val("Rp."+inRp(harga_qty));
        ths.removeClass("hide");
        ths.find("input").eq(0).val("1");
        ths.find(".qty-cost").html("Rp."+inRp(harga));
    }
}
function html_produk_upd(id, nama, qty, harga, hide = "hide"){
    return ''+
'    <div class="padding border-top data-item"> '+
'        <input type="hidden" value="'+id+'"> '+
'        <div class="large padding-y-8 text-theme-dark ripple- item-nama" onclick="penj_open_produk(this, \''+harga+'\')"> '+nama+'</div> '+
'        <div class="details '+hide+'"> '+
'            <div class="padding-y-8 row"> '+
'                <div class="col row" style="width:120px"> '+
'                    <div class="col s3 border" style="border-radius:50% 0 0 50%;height:32px" '+
'                    onclick="change_qty_upd(this, -1)"> '+
'                        <i class="la la-angle-left large" style="position:relative;top:5px;left:7px"></i> '+
'                    </div> '+
'                    <div class="col s5"> <input type="number" class="input center border padding-small" value="'+qty+'" readonly></div> '+
'                    <div class="col s3 border" style="border-radius:0 50% 50% 0;height:32px" '+
'                    onclick="change_qty_upd(this, 1)"> '+
'                        <i class="la la-angle-right large" style="position:relative;top:5px;left:3px"></i> '+
'                    </div> '+
'                </div> '+
'                <div class="col right right-align ripple-" style="width:30px" onclick="hapus_produk_upd(this)"> '+
'                    <i class="la la-trash xlarge"></i> '+
'                </div> '+
'            </div> '+
'            <div class="row padding-y-8"> '+
'                <div class="col right right-align qty-cost" style="width:120px;padding-top:5px">Rp.'+inRp(harga*qty)+'</div> '+
'                <div class="rest"><input class="border padding-small input" value="'+harga+'" style="max-width:100px"'+
                 ' onkeyup="sesuaikan_harga_upd(this)" type="number" readonly></div> '+
'            </div> '+
'        </div> '+
'    </div> ';
}
function tambah_produk_custom_upd(){
    var produk = prompt("Masukan nama produk:");
    if(produk === null || produk == "")
        return false;
    $("#list-item").append(html_produk_upd('new', produk, 1, 0));
}
function change_qty_upd(ths, add){
    var div = $(ths).parent(), inp = div.find("input"), val = parseInt(inp.val()) + add, div_cost = div.parent().next();
    if(val == 0)
        alert("Qty minimal 1");
    else{
        inp.val(val);
        var harga_jual = div_cost.find("input").val();
            harga_qty = harga_jual*val,
            $total = $("#total-harga"),
            $qty_cost = div_cost.find(".qty-cost"),
            harga_lama = parseInt(getNominal($qty_cost.html()));
        $qty_cost.html("Rp."+inRp(harga_qty));
        $total.val("Rp."+inRp(parseInt(getNominal($total.val()))-harga_lama+harga_qty));
    }
}
function hapus_produk_upd(ths){
    if(confirm("Hapus produk terpilih?")){
        var $harga_qty = $("#total-harga"),
            harga_qty = parseInt(getNominal($harga_qty.val())) - parseInt(getNominal($(ths).parent().next().find(".qty-cost").html()));;
        $harga_qty.val("Rp."+inRp(harga_qty));
        $(ths).parent().parent().addClass("hide");
    }
}
function sesuaikan_harga_upd(ths){
    var $ths = $(ths), val = parseInt($ths.val());
    if(val < 1 || val == "" || isNaN(val)) val = 0;
    var qty = $ths.parent().parent().prev().find("input").val(),
        harga_qty = qty * val,
        $total = $("#total-harga"),
        $qty_cost = $ths.parent().prev(),
        harga_lama = parseInt(getNominal($qty_cost.html()));
    $qty_cost.html("Rp."+inRp(harga_qty));
    $total.val("Rp."+inRp(parseInt(getNominal($total.val()))-harga_lama+harga_qty));
}
function getNominal(rupiah){ return rupiah.substr(3, rupiah.length).split(".").join("");}
function save_penj_upd(ths){
    ths = $(ths);
    if(ths.attr("in-action") !== undefined) return false;
 
    var items = $(".data-item"), len = items.length, fd = new FormData(), inp, $harga, _harga, fail = false, tp_items;
    if($("#total-harga").val() == "Rp.0"){
        alert("Silahkan tambahkan produk yang dipesan");
        return false;
    }
    fd.append("m", "pengelola-pesanan-edit");
    fd.append("nama_pembeli", $("#nama-pembeli").val());
    fd.append("id_penjualan", $("#id-penjualan").val());
    while(len--){
        tp_items = items.eq(len);
        if(tp_items.find(".details").hasClass("hide")) continue;
        inp = tp_items.find("input");
        fd.append("id[]",    inp.eq(0).val());
        fd.append("nama[]",  tp_items.find(".item-nama").html().trim());
        fd.append("qty[]",   inp.eq(1).val());
        $harga = inp.eq(2); _harga = parseInt($harga.val());
        if(isNaN(_harga) || _harga < 1){$harga.val("").focus(); alert("Silahkan isi harga produk ini"); fail = true; break;}
        fd.append("harga[]", _harga);
    }
    if(!fail){
        ths.attr("in-action", "true");
        getXForm(fd, function(res){
            if(res.status == "success"){ambil_data_penjualan($(".date_val").val());alert("Data berhasil disimpan");close_menu_s2();}
            else alert("Terjadi kesalahan sistem"); ths.removeAttr("in-action");
        });
    }
}