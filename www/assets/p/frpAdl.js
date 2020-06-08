function html_add_pengeluaran(){
return '<div class="card-2 nav theme"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn"> '+
'            <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col padding-8 center right nav-btn save-btn" onclick="simpan_pengeluaran(this)"> '+
'            <div class="rips circle" style="padding:5px 0px"> <i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Tambah Pengeluaran</div></div> '+
'    </div> '+
'</div> '+
'<div class="content-of-sub"> '+
'    <div class="card white text-gray"> '+
'        <div id="pengeluaran-list"></div> '+
'        <div class="padding border-top"> '+
'            <div class="large padding-y-8 text-theme-dark ripple-" onclick="tambah_item()"> '+
'               <small class="text-gray">Tambah Item</small> '+
'            </div> '+
'        </div> '+
'    </div> '+
'</div> '+
'<scr'+'ipt>setRippleEffect();var len = 0;tambah_item();</scr'+'ipt> ';
}
function tambah_item(){
$("#pengeluaran-list").append(
'<div class="border-bottom padding-16">'+
'<div class="padding row"> '+
'    <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> '+
'        <i class="la la-mail-forward la-fw xxlarge"></i> '+
'    </div> '+
'    <div class="rest"> '+
'        <div class="group-float" style="margin:1px 0 0 0"> '+
'            <input class="input-float input" type="text" placeholder="Nama Pengeluaran" id="item-'+len+'"> '+
'            <span class="bar-float"></span> '+
'        </div> '+
'    </div> '+
'</div> '+
'<div class="padding row"> '+
'    <div class="col" style="width:55px;padding-top:5px;padding-left:1px"> '+
'        <i class="la la-money la-fw xxlarge"></i> '+
'    </div> '+
'    <div class="col right" style="width:45px;padding-top:5px;padding-left:1px" onclick="hapus_item(this)"> '+
'        <i class="la la-trash la-fw xxlarge"></i> '+
'    </div> '+
'    <div class="rest"> '+
'        <div class="group-float" style="margin:1px 0 0 0"> '+
'            <input class="input-float input" type="number" placeholder="Biaya Pengeluaran" id="cost-'+len+'"> '+
'            <span class="bar-float"></span> '+
'        </div> '+
'    </div> '+
'</div> '+
'<div class="padding row" style="padding-left:26px!important"> '+
'    <div class="col s6"> '+
'        <label class="ripple-"> '+
'            <input type="radio" class="radio" value="1" name="operasional-'+len+'" checked> '+
'            Operasional '+
'        </label> '+
'    </div> '+
'    <div class="col s6"> '+
'        <label class="ripple-"> '+
'            <input type="radio" class="radio" value="0" name="operasional-'+len+'"> '+
'            Bahan Baku '+
'        </label> '+
'    </div> '+
'</div> '+
'</div> '
);
len++;
}
function hapus_item(ths){
    if(confirm("Hapus item ini?"))
        $(ths).parent().parent().remove();
}
function simpan_pengeluaran(ths){
    ths = $(ths);
    if(ths.attr("in-action") !== undefined) return false;
    
    var inp = $("#pengeluaran-list input"), l = inp.length;
    if(l){
        var fd = new FormData(), nama, biaya, $nama, $biaya, send = true, ada = false;
        fd.append("m", "pengelola-pengeluaran-add");
        fd.append("id_pengelola", getLS("id_user"));
        for(var i = 0; i < l; i+=4){
            $nama  = inp.eq(i);
            nama   = $nama.val().trim();
            $biaya = inp.eq(i+1);
            biaya  = $biaya.val();
            if(nama == "" && biaya != ""){
                $nama.focus();
                alert("Silahkan lengkapi nama item");
                send = false;
                break; 
            }else if(nama != "" && biaya == ""){
                $biaya.focus();
                alert("Silahkan lengkapi biaya item");
                send = false;
                break; 
            }else if(nama != "" && biaya != ""){
                fd.append("item[]", nama);
                fd.append("harga[]", biaya);
                if(inp.eq(i+2).is(":checked"))
                    fd.append("is_operasional[]", 1);
                else
                    fd.append("is_operasional[]", 0);
                ada = true;
            }
        }
        if(send && ada){
            ths.attr("in-action", "true");
            getXForm(fd, function(res){
                if(res.status == "success"){
                    alert("Data pengeluaran berhasil disimpan");
                    close_menu_s();
                }else
                    alert("Terjadi kesalahan sistem \nSilahkan coba beberapa saat lagi");
                ths.removeAttr("in-action");
            });
        }else if(send && !ada){
            inp.eq(0).focus();
            alert("Silahkan lengkapi data item");
        }
    }else
        alert("Silahkan tambahkan item pengeluaran");
}