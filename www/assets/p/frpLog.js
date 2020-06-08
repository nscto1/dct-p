function html_login(){
return '<form class="content center"> '+
'    <div class="margin-top" style="margin-bottom:-16px"><img src="assets/logo.png" style="width:197px"></div> '+
'    <div class="container margin-bottom"> '+
'        <div class="group-float gf-margin-32"> '+
'            <input class="input-float input" type="text" required name="No HP"> '+
'            <span class="highlight-float"></span> '+
'            <span class="bar-float"></span> '+
'            <label class="lb-float">No HP</label> '+
'        </div> '+
'        <div class="group-float gf-margin-32"> '+
'            <input class="input-float input" type="password" required name="password"> '+
'            <span class="highlight-float"></span> '+
'            <span class="bar-float"></span> '+
'            <label class="lb-float">Password</label> '+
'        </div> '+
'        <button class="btn block round theme rips"> <i class="la la-sign-in"></i> Login </button> '+
'    </div> '+
'    <div class="text-theme xlarge">Dapur Ceu Tari</div>  '+
'    <div class="text-theme">www.dapurceutari.com</div>  '+
'</form> '+
'<scr'+'ipt> '+
'$("form").submit(function(e){ '+
'    e.preventDefault(); '+
'    var ths = $( this ); '+
'    if(ths.attr("in-action") !== undefined) return false; '+
'    var ths = $( this ), '+
'        usr = ths.find("input").eq(0), '+
'        psw = ths.find("input").eq(1), '+
'        user_val = usr.val().trim(), '+
'        pswd_val = psw.val(); '+
'    if(!evalDirect(user_val, "No HP harus diisi", usr)) return false; '+
'    if(!evalDirect(pswd_val, "Password harus diisi", psw)) return false; '+
'    ths.attr("in-action", "true"); '+
'    getX({ '+
'            m: "pengelola-login", '+
'            username: user_val, '+
'            password: pswd_val '+
'        }, '+
'        function(res){ '+
'            if(res.status == "success"){ '+
'                alert("Anda berhasil login"); '+
'                res = res.data; '+
'                setLS("id_user", res.id); '+
'                setLS("nama", res.nama); '+
'                setLS("email", res.email); '+
'                setLS("no_hp", res.no_hp); '+
'                setLS("alamat", res.alamat); '+
'                set_home(); '+
'            }else{ '+
'                alert("Username/Password tidak cocok"); '+
'            } '+
'            ths.removeAttr("in-action"); '+
'        }); '+
'}); '+
'</scr'+'ipt> ';
}