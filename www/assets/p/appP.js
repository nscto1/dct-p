function play(){if(hasLogin())set_home();else set_login();}
function set_login(){ $("body").removeClass("light-gray").addClass("white"); $("#content-app").html(html_login());}
function set_home(){
    $("body").removeClass("white").addClass("light-gray").find("#content-app").html(html_home());
    var nama = getLS("nama").split(" "); $("#nama-user").html(nama[0]);
}
function set_logout(){ if(confirm("Yakin akan logout?")){
    delLS("id_user"); $("body").removeClass("light-gray").addClass("white");
    nav_close(function(){ $("#content-app").html(html_first_screen()); window.setTimeout(function(){ play(); }, 579); })
}}
function set_profil(){
    $("#sub-content-app").html(html_profil()).removeClass("light-gray").addClass("white");
    nav_close(function(){ open_menu(); });
}
function set_reset_password(){
    $("#sub-content-app").html(html_reset_password()).removeClass("light-gray").addClass("white");
    nav_close(function(){ open_menu(); });
}
function set_list_penjualan(){
    window.setTimeout(function(){
        $("#sub-content-app").html(html_list_penjualan()).removeClass("white").addClass("light-gray");
        nav_close(function(){ open_menu(); });
    }, 190);
}
function set_list_pengeluaran(){
    window.setTimeout(function(){
        $("#sub-content-app").html(html_list_pengeluaran()).removeClass("white").addClass("light-gray");
        nav_close(function(){ open_menu(); });
    }, 190);
}
function set_list_share_profit(){
    window.setTimeout(function(){
        $("#sub-content-app").html(html_list_share_profit()).removeClass("white").addClass("light-gray");
        nav_close(function(){ open_menu(); });
    }, 190);
}
function set_add_penjualan(){
    window.setTimeout(function(){
        $("#sub-content-app-flash").html(html_add_penjualan()).removeClass("white").addClass("light-gray");
        nav_close(function(){ open_menu_s(); });
    }, 30);
}
function set_add_pengeluaran(){
    window.setTimeout(function(){
        $("#sub-content-app-flash").html(html_add_pengeluaran()).removeClass("white").addClass("light-gray");
        nav_close(function(){ open_menu_s(); });
    }, 30);
}
function set_tentang(){}
function set_statistik(){
    window.setTimeout(function(){
        $("#sub-content-app").html(html_statistik()).removeClass("light-gray").addClass("white");
        nav_close(function(){ open_menu(); });
    }, 190);
}
function set_rangking(){
    window.setTimeout(function(){
        $("#sub-content-app").html(html_rangking()).removeClass("light-gray").addClass("white");
        nav_close(function(){ open_menu(); });
    }, 190);
}