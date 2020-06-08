function html_reset_password(){
return '<div class="card-2 nav theme top"> '+
'    <div class="row"> '+
'        <div class="col padding-8 center nav-btn"> '+
'            <div class="rips circle close-btn" style="padding:5px 0px"> <i class="la la-arrow-left la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="col padding-8 center right nav-btn save-btn"> '+
'            <div class="rips circle" style="padding:5px 0px"> <i class="la la-check la-fw xlarge"></i></div> '+
'        </div> '+
'        <div class="rest padding-8 row large"><div style="padding-top:5px"> Reset Profil</div></div> '+
'    </div> '+
'</div> '+
'<form class="content-of-sub container text-theme-dark" id="reset-form"> '+
'    <input type="submit" class="hide save-btn" name="submit"> '+
'    <div class="group-float gf-margin-32"> '+
'        <input class="input-float input" type="password" required="" value="" id="password_lama"> '+
'        <span class="highlight-float"></span> '+
'        <span class="bar-float"></span> '+
'        <label class="lb-float">Password Lama</label> '+
'    </div> '+
'    <div class="group-float gf-margin-32"> '+
'        <input class="input-float input" type="password" required="" value="" id="password_baru"> '+
'        <span class="highlight-float"></span> '+
'        <span class="bar-float"></span> '+
'        <label class="lb-float">Password Baru</label> '+
'    </div> '+
'    <div class="group-float gf-margin-32"> '+
'        <input class="input-float input" type="password" required="" value="" id="password_konfirmasi"> '+
'        <span class="highlight-float"></span> '+
'        <span class="bar-float"></span> '+
'        <label class="lb-float">Konfirmasi Password Baru</label> '+
'    </div> '+
'</form> '+
'<scr'+'ipt>set_scrpt_reset()</scr'+'ipt>';
}
function set_scrpt_reset(){
    setRippleEffect();
    $(".save-btn").click(function(e){
        e.preventDefault();
        $("#reset-form").submit();
    });
    $("#reset-form").submit(function(e){
        e.preventDefault();
        var ths = $( this );
        if(ths.attr("in-action") !== undefined) return false;
        var $pswd_lama = $("#password_lama"),
            $pswd_baru = $("#password_baru"),
            $pswd_konfirmasi = $("#password_konfirmasi"),
            pswd_lama = $pswd_lama.val(),
            pswd_baru = $pswd_baru.val(),
            pswd_konfirmasi = $pswd_konfirmasi.val();
        if(!evalDirect(pswd_lama, "Password lama harus diisi", $pswd_lama)) return false;
        if(!evalDirect(pswd_baru, "Password baru harus diisi", $pswd_baru)) return false;
        if(!evalDirect(pswd_konfirmasi, "Password konfirmasi harus diisi", $pswd_konfirmasi)) return false;
        if(pswd_konfirmasi != pswd_baru){
            alert("Password konfirmasi harus sama dengan password baru");
            $pswd_konfirmasi.focus();
            return false;
        }
        ths.attr("in-action", "true");
        getX({
                m: "pengelola-reset_password",
                id_user: getLS("id_user"),
                pswd_lama: pswd_lama,
                pswd_baru: pswd_baru
            }, function(res){ 
                if(res.status == "success"){
                    alert("Perubahan berhasil disimpan");
                    $pswd_lama.val("");
                    $pswd_baru.val("");
                    $pswd_konfirmasi.val("");
                }else{
                    alert("Password lama yang anda masukan salah\\nSilahkan coba kembali");
                    $pswd_lama.val("").focus();
                }
                ths.removeAttr("in-action");
            });
    });
}