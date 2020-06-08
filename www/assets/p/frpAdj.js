function html_add_penjualan(){
return '<div class="card-2 nav theme"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn"> '+
'            <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col padding-8 center right nav-btn save-btn" onclick="simpan_pesanan(this)"> '+
'            <div class="rips circle" style="padding:5px 0px"> <i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Tambah Penjualan</div></div> '+
'    </div> '+
'</div> '+
'<div class="content-of-sub"> '+
'    <div class="card white text-gray"> '+
'        <div class="padding row"> '+
'            <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> '+
'                <i class="la la-user la-fw xxlarge"></i> '+
'            </div> '+
'            <div class="rest"> '+
'                <div class="group-float" style="margin:1px 0 0 0"> '+
'                    <input class="input-float input" type="text" placeholder="Nama Pembeli" value="Pembeli" id="nama-pembeli"> '+
'                    <span class="bar-float"></span> '+
'                </div> '+
'            </div> '+
'        </div> '+
'        <div class="padding row margin-bottom"> '+
'            <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> '+
'                <i class="la la-money la-fw xxlarge"></i> '+
'            </div> '+
'            <div class="rest"> '+
'                <div class="group-float" style="margin:1px 0 0 0"> '+
'                    <input class="input-float input" type="text" value="Rp.0" readonly id="total-harga"> '+
'                    <span class="bar-float"></span> '+
'                </div> '+
'            </div> '+
'        </div> '+
'        <div id="produk-list"></div> <!-- '+
'        <div class="padding border-top"> '+
'            <div class="large padding-y-8 text-theme-dark ripple-" onclick="tambah_produk_custom()"> '+
'               <small class="text-gray">Tambah Produk Custom</small> '+
'            </div> '+
'        </div> -->'+
'    </div> '+
'</div> '+
'<scr'+'ipt> '+
'    setRippleEffect(); '+
'    ambil_produk(); '+
'    produk_selected = []; max_produk = 0; '+
'</scr'+'ipt>';
}
var produk_selected = [], max_produk = 0;
function ambil_produk(){
    getX({
            m: "pengelola-produk-list"
        }, function(res){ 
            if(res.status == "success"){
                pasang_produk(res.data);
                max_produk = res.data.length;
                $("#nama-pembeli").val("Pembeli " + (parseInt(res.urutan)+1));
            }else
                alert("Terjadi kesalahan sistem \nSilahkan coba beberapa saat lagi");
        });
}
function html_produk(data){
return ''+    
'<div> '+
'    <div class="padding border-top"> '+
'        <div class="large padding-y-8 text-theme-dark ripple-" onclick="pilih_produk(\''+data.id+'\',\''+stringScript(data.nama)+
             '\', 1, \''+data.harga_jual+'\', this)"> '+
'            '+data.nama+' <!--<small class="text-gray">&nbsp;Complete</small> --> '+
'        </div> '+
'        <div class="details hide"> '+
'            <div class="padding-y-8 row"> '+
'                <div class="col row" style="width:120px"> '+
'                    <div class="col s3 border" style="border-radius:50% 0 0 50%;height:32px" '+
'                    onclick="change_qty(\''+data.id+'\', 1, this, -1)"> '+
'                        <i class="la la-angle-left large" style="position:relative;top:5px;left:7px"></i> '+
'                    </div> '+
'                    <div class="col s5"> '+
'                        <input type="number" class="input center border padding-small" value="1" readonly> '+
'                    </div> '+
'                    <div class="col s3 border" style="border-radius:0 50% 50% 0;height:32px" '+
'                    onclick="change_qty(\''+data.id+'\', 1, this, 1)"> '+
'                        <i class="la la-angle-right large" style="position:relative;top:5px;left:3px"></i> '+
'                    </div> '+
'                </div> '+
'                <div class="col right right-align" style="width:30px" onclick="hapus_produk(\''+data.id+'\', 1, this)"> '+
'                    <i class="la la-trash xlarge"></i> '+
'                </div> '+
'            </div> '+
'            <div class="row padding-y-8"> '+
'                <div class="col right right-align qty-cost" style="width:120px">Rp.'+inRp(data.harga_jual)+'</div> '+
'                <div class="rest">Rp.'+inRp(data.harga_jual)+'</div> '+
'            </div> '+
'        </div> '+
'    </div> '+
'    <!--<div class="padding border-top"> '+
'        <div class="large padding-y-8 text-theme-dark ripple-" onclick="pilih_produk(\''+data.id+'\',\''+stringScript(data.nama)+'\', 0,\''+
             data.harga_jual+'\', this)"> '+
'            '+data.nama+' <small class="text-gray">&nbsp;Custom</small> '+
'        </div> '+
'        <div class="details hide"> '+
'            <div class="padding-y-8 row"> '+
'                <div class="col row" style="width:120px"> '+
'                    <div class="col s3 border" style="border-radius:50% 0 0 50%;height:32px" '+
'                    onclick="change_qty(\''+data.id+'\', 0, this, -1)"> '+
'                        <i class="la la-angle-left large" style="position:relative;top:5px;left:7px"></i> '+
'                    </div> '+
'                    <div class="col s5"> '+
'                        <input type="number" class="input center border padding-small" value="1" readonly> '+
'                    </div> '+
'                    <div class="col s3 border" style="border-radius:0 50% 50% 0;height:32px" '+
'                    onclick="change_qty(\''+data.id+'\', 0, this, 1)"> '+
'                        <i class="la la-angle-right large" style="position:relative;top:5px;left:3px"></i> '+
'                    </div> '+
'                </div> '+
'                <div class="col right right-align" style="width:30px" onclick="hapus_produk(\''+data.id+'\', 0, this)"> '+
'                    <i class="la la-trash xlarge"></i> '+
'                </div> '+
'            </div> '+
'            <div class="row padding-y-8"> '+
'                <div class="col right right-align qty-cost" style="width:120px;padding-top:5px">Rp.'+inRp(data.harga_jual)+'</div> '+
'                <div class="rest"><input id="produk-'+data.id+'" class="border padding-small input" value="'+data.harga_jual+'" style="max-width:100px"'+
                 ' onkeyup="sesuaikan_harga(this, \''+data.id+'\', 0)" type="number"></div> '+
'            </div> '+
'        </div> '+
'    </div>--> '+
'</div> ';
}
function pasang_produk(data){
    var html = "", l = data.length;
    if(l){
        html = ""
        for(var i = 0, l = data.length; i < l; i++){
            html += html_produk(data[i]);
        }
    }
    $("#produk-list").html(html);
}
function pilih_produk(id, nama, complete, harga_jual, ths){
    if(cari_urutan_produk(id, complete) < 0){
        var ths = $(ths).next(), harga_qty = ths.find(".qty-cost").html(),
            $total = $("#total-harga");
        harga_qty = parseInt(getNominal(harga_qty));
        ths.removeClass("hide");
        produk_selected[produk_selected.length] = {
            id: id,
            nama: nama,
            complete: complete,
            harga_jual: harga_jual,
            qty: parseInt(ths.find("input").eq(0).val()),
            harga_qty: harga_qty
        }
        $total.val("Rp."+inRp(parseInt(getNominal($total.val()))+harga_qty));
    }
}
function change_qty(id, complete, ths, add){
    var div = $(ths).parent(), inp = div.find("input"), val = parseInt(inp.val()) + add;
    if(val == 0)
        alert("Qty minimal 1");
    else{
        inp.val(val);
        var urutan = cari_urutan_produk(id, complete), 
            harga_jual = produk_selected[urutan].harga_jual,
            harga_qty = harga_jual*val,
            $total = $("#total-harga"),
            $qty_cost = div.parent().next().find(".qty-cost"),
            harga_lama = parseInt(getNominal($qty_cost.html()));
        $qty_cost.html("Rp."+inRp(harga_qty));
        produk_selected[urutan]["harga_jual"] = harga_jual;
        produk_selected[urutan]["qty"] = val;
        produk_selected[urutan]["harga_qty"] = harga_qty;
        $total.val("Rp."+inRp(parseInt(getNominal($total.val()))-harga_lama+harga_qty));
    }
}
function hapus_produk(id, complete, ths, custom){
    if(custom)
        var text = "Hapus produk terpilih?";
    else
        var text = "Hapus pembelian terpilih";
    if(confirm(text)){
        var urutan = cari_urutan_produk(id, complete),
            $harga_qty = $("#total-harga"),
            harga_qty = parseInt(getNominal($harga_qty.val())) - produk_selected[urutan].harga_qty;
        $harga_qty.val("Rp."+inRp(harga_qty));
        produk_selected[urutan] = undefined;
        if(custom)
            $(ths).parent().parent().parent().remove();
        else
            $(ths).parent().parent().addClass("hide");
    }
}
function cari_urutan_produk(id, complete){
    var local = produk_selected, l = local.length, urutan = -1;
    for(var i = 0; i < l; i++){
        if(local[i] !== undefined && local[i].id == id && local[i].complete == complete){
            urutan = i;
            break;
        }
    }
    return urutan;
}
function sesuaikan_harga(ths, id, complete){
    var $ths = $(ths),
        val = parseInt($ths.val());
    if(val < 1 || val == "" || isNaN(val))
        val = 0;
    var urutan = cari_urutan_produk(id, complete), 
        qty = produk_selected[urutan].qty,
        harga_qty = qty * val,
        $total = $("#total-harga"),
        $qty_cost = $ths.parent().prev(),
        harga_lama = parseInt(getNominal($qty_cost.html()));
    $qty_cost.html("Rp."+inRp(harga_qty));
    $total.val("Rp."+inRp(parseInt(getNominal($total.val()))-harga_lama+harga_qty));
    produk_selected[urutan]["harga_jual"] = val;
    produk_selected[urutan]["qty"] = qty;
    produk_selected[urutan]["harga_qty"] = harga_qty;
}
function getNominal(rupiah){
    return rupiah.substr(3, rupiah.length).split(".").join("");
}
function tambah_produk_custom(){
    var produk = prompt("Masukan nama produk:");
    if(produk === null || produk == "")
        return false;
    max_produk++;
    var id = max_produk;
    produk_selected[produk_selected.length] = {
        id: id,
        nama: produk,
        complete: 0,
        harga_jual: 0,
        qty: 1,
        harga_qty: 0,
        is_custom: 1
    }
    $("#produk-list").append(html_produk_custom(id, produk));
}
function html_produk_custom(id, produk){
    return ''+
'    <div class="padding border-top"> '+
'        <div class="large padding-y-8 text-theme-dark ripple-" onclick="pilih_produk(\''+id+'\',\''+stringScript(produk)+'\', 0, 0 , this)"> '
          +produk+'</div> '+
'        <div class="details"> '+
'            <div class="padding-y-8 row"> '+
'                <div class="col row" style="width:120px"> '+
'                    <div class="col s3 border" style="border-radius:50% 0 0 50%;height:32px" '+
'                    onclick="change_qty(\''+id+'\',0, this, -1)"> '+
'                        <i class="la la-angle-left large" style="position:relative;top:5px;left:7px"></i> '+
'                    </div> '+
'                    <div class="col s5"> '+
'                        <input type="number" class="input center border padding-small" value="1" readonly> '+
'                    </div> '+
'                    <div class="col s3 border" style="border-radius:0 50% 50% 0;height:32px" '+
'                    onclick="change_qty(\''+id+'\',0, this, 1)"> '+
'                        <i class="la la-angle-right large" style="position:relative;top:5px;left:3px"></i> '+
'                    </div> '+
'                </div> '+
'                <div class="col right right-align ripple-" style="width:30px" onclick="hapus_produk(\''+id+'\', 0, this)"> '+
'                    <i class="la la-trash xlarge"></i> '+
'                </div> <!--'+
'                <div class="col right right-align ripple-" style="width:30px" onclick="edit_produk(\''+id+'\', \''
                 +stringScript(produk)+'\', this)"> '+
'                    <i class="la la-edit xlarge"></i> '+
'                </div> '+
'                <div class="col right right-align text-deep-orange ripple-" style="width:30px;padding-top:1px" onclick="hapus_produk(\''
                +id+'\', 0, this, 1)"> '+
'                    <i class="la la-times-circle xlarge"></i> '+
'                </div> -->'+
'            </div> '+
'            <div class="row padding-y-8"> '+
'                <div class="col right right-align qty-cost" style="width:120px;padding-top:5px">Rp.0</div> '+
'                <div class="rest"><input id="produk-'+id+'" class="border padding-small input" value="0" style="max-width:100px"'+
                 ' onkeyup="sesuaikan_harga(this, \''+id+'\', 0)" type="number"></div> '+
'            </div> '+
'        </div> '+
'    </div> ';
}
function edit_produk(id, produk, ths){
    var produk = prompt("Edit nama produk:", produk);
    if(produk === null || produk == "")
        return false;
    ths = $(ths);
    ths.removeAttr("onclick").unbind("click").click(function(){ edit_produk(id, produk, this); });
    ths = ths.parent().parent().prev();
    ths.html(produk).removeAttr("onclick").unbind("click").click(function(){ pilih_produk(id, produk, 0, 0 , this) });
    var urutan = cari_urutan_produk(id, 0);
    produk_selected[urutan]["nama"] = produk;
}
function simpan_pesanan(ths){
    ths = $(ths);
    if(ths.attr("in-action") !== undefined) return false;
    
    var local = produk_selected, l = local.length, harga_kosong = false, keranjang_kosong = true;
    if(l){
        var fd = new FormData();
        fd.append("m", "pengelola-pesanan-add");
        fd.append("nama_pembeli", $("#nama-pembeli").val());
        fd.append("id_pengelola", getLS("id_user"));
        for(var i = 0; i < l; i++){
            if(local[i] !== undefined){
                keranjang_kosong = false;
                if(local[i].harga_qty != 0 && local[i].harga_qty != ""){
                    fd.append("produk_id[]",         local[i].id);
                    fd.append("produk_nama[]",       local[i].nama);
                    fd.append("produk_custom[]",     local[i].complete);
                    fd.append("produk_harga_jual[]", local[i].harga_jual);
                    fd.append("produk_qty[]",        local[i].qty);
                    fd.append("produk_harga_qty[]",  local[i].harga_qty);
                    if(local[i].is_custom == 1)
                        fd.append("produk_umum[]",   0);
                    else
                        fd.append("produk_umum[]",   1);
                }else{
                    harga_kosong = "#produk-"+local[i].id;
                    var nama_produk_kosong = local[i].nama;
                    break;
                }
            }
        }
        if(keranjang_kosong)
            alert("Pesanan masih kosong");
        else if(harga_kosong){
            alert("Silahkan isi harga "+nama_produk_kosong);
            $(harga_kosong).val("").focus()
        }else
        }else{
            ths.attr("in-action", "true");
            getXForm(fd, function(res){ 
                if(res.status == "success"){
                    alert("Data pesanan berhasil disimpan");
                    close_menu_s();
                }else
                    alert("Terjadi kesalahan sistem \nSilahkan coba beberapa saat lagi");
                ths.removeAttr("in-action");
            });
        }
    }else{
        alert("Pesanan masih kosong");
    }
}