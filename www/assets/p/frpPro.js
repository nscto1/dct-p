function html_profil(){
return '<div class="card-2 nav theme top"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn"> '+
'            <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col padding-8 center right nav-btn save-btn"> '+
'            <div class="rips circle" style="padding:5px 0px"> <i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Edit Profil</div></div> '+
'    </div> '+
'</div> '+
'<form class="content-of-sub container text-theme-dark" id="profil-form"> '+
'    <input type="submit" class="hide save-btn" name="submit"> '+
'    <div class="group-float gf-margin-32"> '+
'        <input class="input-float input" type="text" required="" value="" id="admin-nama"> '+
'        <span class="highlight-float"></span> '+
'        <span class="bar-float"></span> '+
'        <label class="lb-float">Nama</label> '+
'    </div> '+
'    <div class="group-float gf-margin-32"> '+
'        <input class="input-float input" type="text" required="" value="" id="admin-no_hp"> '+
'        <span class="highlight-float"></span> '+
'        <span class="bar-float"></span> '+
'        <label class="lb-float">No HP/WA</label> '+
'    </div> '+
'    <div class="group-float gf-margin-32"> '+
'        <input class="input-float input" type="text" required="" value="" id="admin-alamat"> '+
'        <span class="highlight-float"></span> '+
'        <span class="bar-float"></span> '+
'        <label class="lb-float">Alamat</label> '+
'    </div> '+
'    <div class="group-float gf-margin-32"> '+
'        <input class="input-float input" type="text" required="" value="" id="admin-email"> '+
'        <span class="highlight-float"></span> '+
'        <span class="bar-float"></span> '+
'        <label class="lb-float">Email</label> '+
'    </div> '+
'</form> '+
'<scr'+'ipt>set_scrpt_profil()</scr'+'ipt> ';
}
function set_scrpt_profil(){
    setRippleEffect();
    $("#admin-nama").val(getLS("nama"));
    $("#admin-alamat").val(getLS("alamat"));
    $("#admin-no_hp").val(getLS("no_hp"));
    $("#admin-email").val(getLS("email"));
    $(".save-btn").click(function(e){
        e.preventDefault();
        $("#profil-form").submit();
    });
    $("#profil-form").submit(function(e){
        e.preventDefault();
        var ths = $( this );
        if(ths.attr("in-action") !== undefined) return false;
        
        var $nama = $("#admin-nama"),
            $alamat = $("#admin-alamat"),
            $no_hp = $("#admin-no_hp"),
            $email = $("#admin-email"),
            nama = $nama.val().trim(),
            alamat = $alamat.val().trim(),
            no_hp = $no_hp.val().trim(),
            email = $email.val().trim();
        if(!evalDirect(nama, "Nama harus diisi", $nama)) return false;
        if(!evalDirect(no_hp, "No HP harus diisi", $no_hp)) return false;
        
        var fd = new FormData();
        fd.append("m", "pengelola-update_profil");
        fd.append("id_user", getLS("id_user"));
        fd.append("data[nama]", nama);
        fd.append("data[alamat]", alamat);
        fd.append("data[no_hp]", no_hp);
        fd.append("data[email]", email);
        ths.attr("in-action", "true");
        getXForm(fd, function(res){ 
            if(res.status == "success"){
                alert("Perubahan berhasil disimpan");
                setLS("nama", nama);
                setLS("alamat", alamat);
                setLS("no_hp", no_hp);
                setLS("email", email);
            }else if(res.status == "no_hp"){
                alert("No HP telah digunakan oleh user lain, silahkan gunakan no hp yang berbeda");
                $no_hp.focus();
            }
            ths.removeAttr("in-action");
        });
    });
}