function html_home(){
return '<div class="sidebar bar-block text-theme-dark sidebar-width" id="sidebar"> '+
'    <div class="bar-item padding-large theme-d3 row"> '+
'        <div class="col" style="width:185px"> '+
'            <div class="white circle padding-small text-theme-dark margin-top" style="width:90px;height:90px;margin:auto"> '+
'                <i class="la la-user" style="font-size:80px"></i> '+
'            </div> '+
'            <div class="center padding-y-8 large" id="nama-user">Nama User</div> '+
'        </div> '+
'        <div class="rest"> '+
'            <style>.Xsection{margin-top:8px!important;margin-bottom:8px!important}</style> '+
'            <div class="Xsection" onclick="nav_close()"><div class="rips right-align"><i class="la la-fw la-times-circle xlarge"></i></div></div> '+
'            <div class="Xsection" onclick="set_profil()"><div class="rips right-align"><i class="la la-fw la-edit xlarge"></i></div></div> '+
'            <div class="Xsection" onclick="set_reset_password()"><div class="rips right-align"><i class="la la-fw la-key xlarge"></i></div></div> '+
'            <div class="Xsection" onclick="set_logout()"><div class="rips right-align"><i class="la la-fw la-sign-out xlarge"></i></div></div> '+
'        </div> '+
'    </div> '+
'    <div class="padding-16 large"> '+
'        <a class="bar-item btn rips-dark" onclick="set_list_penjualan()"><i class="la la-fw la-shopping-cart"></i> &nbsp;Data Penjualan</a> '+
'        <a class="bar-item btn rips-dark" onclick="set_list_pengeluaran()"><i class="la la-fw la-money"></i> &nbsp;Data Pengeluaran</a> '+
'        <a class="bar-item btn rips-dark" onclick="set_list_share_profit()"><i class="la la-fw la-credit-card"></i> &nbsp;Data Share Profit</a> '+
'        <hr> '+
'        <a class="bar-item btn rips-dark" onclick="set_statistik()"><i class="la la-fw la-bar-chart"></i> &nbsp;Statistik Omzet</a> '+
'        <a class="bar-item btn rips-dark" onclick="set_rangking()"><i class="la la-fw la-bar-chart"></i> &nbsp;Rangking Produk</a> '+
'        <!-- <hr> '+
'        <a class="bar-item btn rips-dark" onclick="set_tentang()"><i class="la la-fw la-info-circle"></i> &nbsp;Tentang</a>--> '+
'    </div> '+
'    <div class="right-align padding margin-top theme-d3 bottom sidebar-width"> &copy; 2018<br>www.dapurceutari.com</div> '+
'</div> '+
'<div class="overlay" onclick="nav_close()" id="overlay-1"></div> '+
'<div id="main-content-app" class="text-theme-dark"> '+
'    <div class="overlay-2" id="overlay-2"></div> '+
'    <div class="card-2 top theme" id="navbar"> '+
'        <div class="row"> '+
'            <div class="col padding-8 center right nav-btn" onclick="nav_open()"> '+
'                <div class="rips circle" style="padding:5px 0px"> <i class="la la-bars la-fw xlarge"></i></div> '+
'            </div> '+
'            <div class="rest padding-y-8 padding row"><div class="rest padding-h-8 large" style="padding-top:5px"> Booth DCT</div></div> '+
'        </div> '+
'        <div class="row center theme" id="navbar2"> '+
'            <div class="col s4 padding-small rips text-white" id="nav-1" onclick="moveNavSign(1)"> <i class="la la-calendar-check-o xxlarge"></i></div> '+
'            <div class="col s4 padding-small rips" id="nav-2" onclick="moveNavSign(2)"> <i class="la la-calendar xxlarge"></i></div> '+
'            <div class="col s4 padding-small rips" id="nav-3" onclick="moveNavSign(3)"> <i class="la la-comments xxlarge"></i></div> '+
'            <div class="col s4 white" id="nav-sign"></div> '+
'        </div> '+
'    </div> '+
'    <div class="bottom theme row card-4"> '+
'        <div class="col s6 btn deep-orange center ripple-" onclick="set_add_pengeluaran()"> '+
'            <i class="la la-money xxlarge" style="position:relative;left:2px;top:2px"></i> '+
'        </div> '+
'        <div class="col s6 btn theme-d2 center ripple-" onclick="set_add_penjualan()"> '+
'            <i class="la la-cart-plus xxlarge" style="position:relative;left:-3px;top:2px"></i> '+
'        </div> '+
'    </div> '+
'    <div id="content-home"> '+
'        <style> '+
'            .title-padding{padding:8px 16px 8px 23px!important} '+
'            .border-theme-d2{border-color:#0fa446 !important} '+
'        </style> '+
'        <div class="col s4" id="content-1"> '+
'            <div class="text-theme-d3 title-padding">OMZET HARI INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large white text-gray margin-bottom border-left border-theme-d2" style="border-left-width:7px!important"> '+
'                    <div id="list-omzet-hari-ini"></div> '+
'                    <div class="row padding theme-d2" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-omzet-hari-ini"></b></div> '+
'                        <div class="rest"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="text-indigo title-padding">OMZET D.O/CATERING HARI INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large white text-gray margin-bottom border-left border-indigo" style="border-left-width:7px!important"> '+
'                    <div id="list-omzet-do-hari-ini"></div> '+
'                    <div class="row padding indigo" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-omzet-do-hari-ini"></b></div> '+
'                        <div class="rest" id="total-pembagi-omzet-hari-ini"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="text-deep-orange title-padding">PENGELUARAN BOOTH HARI INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large white text-gray margin-bottom border-left border-deep-orange" style="border-left-width:7px!important"> '+
'                    <div id="list-pengeluaran-hari-ini"></div> '+
'                    <div class="row padding deep-orange" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-pengeluaran-hari-ini"></b></div> '+
'                        <div class="rest"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="text-red title-padding">PENGELUARAN PUSAT HARI INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large white text-gray margin-bottom border-left border-red" style="border-left-width:7px!important"> '+
'                    <div id="list-pengeluaran-do-hari-ini"></div> '+
'                    <div class="row padding red" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-pengeluaran-do-hari-ini"></b></div> '+
'                        <div class="rest" id="total-pembagi-pengeluaran-hari-ini"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="margin padding-16"></div> '+
'        </div> '+
'        <div class="col s4 content-off" id="content-2"> '+
'            <div class="text-purple title-padding">SHARE PROFIT BULAN INI</div> '+
'            <div class="container" id="share-profit"> '+
'                <div class="card round-large white text-gray margin-bottom border-left border-purple" style="border-left-width:7px!important"> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Total Omzet</div> '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Bahan Baku</div> '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Gross Profit</div> '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Operasional</div> '+
'                    </div> '+
'                    <div class="row padding border-top"> '+
'                        <div class="col right right-align data-detail" style="width:100px"></div><div class="rest">Net Profit</div> '+
'                    </div> '+
'                    <div class="row padding purple" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b class="data-detail"></b></div> '+
'                        <div class="rest"><b><span class="data-detail">60</span><small>%</small> Profit Anda</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="text-theme-d3 title-padding">OMZET BOOTH BULAN INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large theme-d2 margin-bottom border-left border-theme-d2" style="border-left-width:7px!important"> '+
'                    <div id="list-omzet-bulan-ini"></div> '+
'                    <div class="row padding theme-d2 border-top" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-omzet-bulan-ini"></b></div> '+
'                        <div class="rest"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="text-indigo title-padding">OMZET D.O/CATERING BULAN INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large indigo margin-bottom border-left border-indigo" style="border-left-width:7px!important"> '+
'                    <div id="list-omzet-do-bulan-ini"></div> '+
'                    <div class="row padding indigo border-top" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-omzet-do-bulan-ini"></b></div> '+
'                        <div class="rest" id="total-pembagi-omzet-bulan-ini"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="text-deep-orange title-padding">PENGELUARAN BOOTH BULAN INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large deep-orange margin-bottom border-left border-deep-orange" style="border-left-width:7px!important"> '+
'                    <div id="list-pengeluaran-bulan-ini"></div> '+
'                    <div class="row padding deep-orange border-top" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-pengeluaran-bulan-ini"></b></div> '+
'                        <div class="rest"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="text-red title-padding">PENGELUARAN D.O/CATERING BULAN INI</div> '+
'            <div class="container" style="font-size:14px"> '+
'                <div class="card round-large red margin-bottom border-left border-red" style="border-left-width:7px!important"> '+
'                    <div id="list-pengeluaran-do-bulan-ini"></div> '+
'                    <div class="row padding red border-top" style="border-bottom-right-radius:8px"> '+
'                        <div class="col right right-align" style="width:100px"><b id="total-pengeluaran-do-bulan-ini"></b></div> '+
'                        <div class="rest" id="total-pembagi-pengeluaran-bulan-ini"><b>Total</b></div> '+
'                    </div> '+
'                </div> '+
'            </div> '+
'            <div class="margin padding-16"></div> '+
'        </div> '+
'        <div class="col s4 content-off container" id="content-3"><div class="padding-32 center">Chat is coming soon </div></div> '+
'    </div> '+
'</div> '+
'<scr'+'ipt>setRippleEffect();get_report();scroll[1]=0;scroll[2]=0;scroll[3]=0;onMoveNav=false;cSign=1;</scr'+'ipt>';
}

function nav_open(){
    $("#sidebar").removeClass("animate-left-lost").addClass("animate-left").show();
    $("#overlay-1").removeClass("animate-opacity-lost").addClass("animate-opacity").show();
    $("html, body").css("overflow-y","hidden");
}
function nav_close(func){
    $("#sidebar").removeClass("animate-left").addClass("animate-left-lost");
    $("#overlay-1").removeClass("animate-opacity").addClass("animate-opacity-lost");
    window.setTimeout(function(){
        $("#sidebar").hide();
        $("#overlay-1").hide();
        $("html, body").css("overflow-y","auto");
        if(func)
            func();
    }, 290);
}
function open_menu(){
    var mainContent = $("#main-content-app"), subContent = $("#sub-content-app");
    subContent.addClass("sub-move-in").show().find(".close-btn").unbind("click").click(function(){close_menu();});
    mainContent.addClass("move-out");
    window.setTimeout(function(){
        mainContent.removeClass("move-out").hide();
        subContent.removeClass("sub-move-in");
        $("#content-app").hide(); 
    }, 390);
}
function close_menu(){
    var subContent = $("#sub-content-app"), mainContent = $("#main-content-app");
    subContent.addClass("sub-move-out");
    mainContent.addClass("move-in").show();
    $("#content-app").show(); 
    window.setTimeout(function(){subContent.removeClass("sub-move-out").hide();mainContent.removeClass("move-in");subContent.html("");get_report();},390);
}
function open_menu_s(){
    var subContent = $("#sub-content-app-flash");
    subContent.addClass("sub-bottom").show().find(".close-btn").unbind("click").click(function(){close_menu_s();});
    window.setTimeout(function(){
        subContent.removeClass("sub-bottom").css("padding-top", "55px").find(".nav").addClass("top");
        $("#content-app").hide(); 
    }, 190);
}
function close_menu_s(){
    var subContent = $("#sub-content-app-flash");
    $("#content-app").show();
    subContent.scrollTop(0).addClass("sub-bottom-off").find(".nav").removeClass("top");
    window.setTimeout(function(){ subContent.removeClass("sub-bottom-off").hide().css("padding-top", "0px"); subContent.html(""); get_report();}, 190);
}
function get_report(){
    if(hasLogin() && !($("#content-app").is(":hidden")))
    getX({m:"pengelola-report-get", id_pengelola:getLS("id_user")},function(res){
        if(res.status == "success"){
            pasang_report(1, 1, res.data_penjualan_hari_ini);
            pasang_report(1, 0, res.data_pengeluaran_hari_ini);
            pasang_report_do(1, 1, res.penjualan_do_hari_ini, res.omzet_do_hari_ini);
            pasang_report_do(1, 0, res.pengeluaran_do_hari_ini, res.modal_do_hari_ini);
            var omzet_do = pasang_report_do(0, 1, res.penjualan_do_bulan_ini, res.omzet_do_bulan_ini),
                modal_do = pasang_report_do(0, 0, res.pengeluaran_do_bulan_ini, res.modal_do_bulan_ini),
                omzet = pasang_report(0, 1, res.data_penjualan_bulan_ini) + omzet_do,
                modal = pasang_report(0, 0, res.data_pengeluaran_bulan_ini),
                prsn = res.persentase_pembagian,
                bhn = modal_do.bahan_baku + modal.bahan_baku,
                opp = modal_do.operasional + modal.operasional;
            home_set_share_profit(omzet, bhn, opp, prsn);
            window.setTimeout(get_report, 5000);
        }else
            alert("Terjadi kesalahan sistem\nSilahkan ulangi beberapa saat lagi");
    });
}
function home_set_share_profit(omzet, bhn, opp, prsn){
    var gross = omzet - bhn,
        net = gross - opp,
        profit = prsn / 100 * net;
    if(gross < 1 ) gross = 0;
    if(net < 1 ) net = 0;
    if(profit < 1 ) profit = 0;
    var tag = $("#share-profit").find(".data-detail");
    tag.eq(0).html(inRp(omzet));
    tag.eq(1).html(inRp(bhn));
    tag.eq(2).html(inRp(gross));
    tag.eq(3).html(inRp(opp));
    tag.eq(4).html(inRp(net));
    tag.eq(5).html(inRp(profit));
    tag.eq(6).html(prsn);
}
function pasang_report(is_harian, is_penjualan, data){
    var len = data.length, total = 0, re = 0;
    if(len){ var temp, i=0, $html = "";
        if(is_penjualan){
            while(i < len){ 
                temp=data[i++]; 
                $html+=html_report(temp.item, inRp(temp.qty) + " pcs", inRp(temp.harga_qty)); 
                total += parseInt(temp.harga_qty); 
            }
            re = total;
        }else{
            var total_bhn = 0, total_opp = 0, temp_total_pengeluaran
            while(i < len){ 
                temp = data[i++]; 
                temp_total_pengeluaran = parseInt(temp.total_harga)
                if(temp.is_operasional == 0){
                    temp_opp = "bh. bk";
                    total_bhn += temp_total_pengeluaran;
                }else{
                    temp_opp = "oprsnl";
                    total_opp += temp_total_pengeluaran;
                }
                $html += html_report(temp.item, temp_opp, inRp(temp_total_pengeluaran)); 
                total += temp_total_pengeluaran; 
            }
            re = {"bahan_baku": total_bhn, "operasional": total_opp};
        }
    }
    is_harian = is_harian == 1 ? "hari" : "bulan";
    is_penjualan = is_penjualan == 1 ? "omzet" : "pengeluaran";
    $("#list-"+is_penjualan+"-"+is_harian+"-ini").html($html); 
    $("#total-"+is_penjualan+"-"+is_harian+"-ini").html(inRp(total));
    return re;
}
function pasang_report_do(is_harian, is_penjualan, data, data_total){
    var len = data.length, $html = "", total = 0, pembagi = 0, re = false;
    if(len){ var temp, i=0, $html = "", temp;
        if(is_penjualan){
            while(i < len){ temp = data[i++]; $html += html_report(temp.item, inRp(temp.qty) + " pcs", inRp(temp.harga_qty));}
            temp = data_total[0];
            total = temp.total_omzet == null ? 0 : parseInt(temp.total_omzet);
            re = total;
            pembagi = temp.total_pembagi;
        }else{
            var temp_opp, total_bhn = 0, total_opp = 0;
            while(i < len){ 
                temp = data[i++]; 
                temp_opp = (temp.is_operasional == 0) ? "bh. bk" : "oprsnl";
                $html += html_report(temp.item, temp_opp, inRp(temp.grand_total)); 
            }
            temp = data_total[0];
            pembagi = temp.total_pembagi;
            if(temp.is_operasional !== null && temp.is_operasional == 0){
                total_bhn = parseFloat(temp.total_pengeluaran);
            }
            temp = data_total[1];
            if(temp.is_operasional !== null && temp.is_operasional == 1){
                total_opp = parseFloat(temp.total_pengeluaran);
            }
            total = parseInt(total_bhn + total_opp);
            // temp.total_pengeluaran == null ? 0 : parseInt(temp.total_pengeluaran);
            re = {"bahan_baku": total_bhn, "operasional": total_opp};
        }
    }
    pembagi = pembagi < 1 || pembagi == null ? "<b>Total</b>" : "<b>Total setelah dibagi "+inRp(pembagi)+" booth</b>";
    is_harian = is_harian == 1 ? "hari" : "bulan";
    is_penjualan = is_penjualan == 1 ? "omzet" : "pengeluaran";
    $("#list-"+is_penjualan+"-do-"+is_harian+"-ini").html($html); 
    $("#total-"+is_penjualan+"-do-"+is_harian+"-ini").html(inRp(total));
    $("#total-pembagi-"+is_penjualan+"-"+is_harian+"-ini").html(pembagi);
    return re;
}
function html_report(nama, qty, harga){
        qty = (qty === false) ? "" : '<div class="col right right-align data-detail tiny" style="width:70px;padding-top:4px">'+qty+'</div>';
        return '<div class="row padding border-top">'+
        '    <div class="col right right-align data-detail" style="width:90px">'+harga+'</div>'+qty+
        '    <div class="rest">'+nama+'</div> '+
        '</div>';
}
function pasang_report_pengeluaran(is_harian, data){
    var len = data.length, colorText = '', colorDetails = "", colorTextDetails = "";
    if(is_harian){
        colorText = 'text-deep-orange';
        colorDetails = "white";
        colorTextDetails = "text-gray";
    }
    is_harian = is_harian ? "-hari-ini" : "-bulan-ini";
    if(!len)
        $("#list-pengeluaran"+is_harian).html(
            '<div class="card deep-orange row margin-bottom"> '+
            '    <div class="center col" style="width:63px;padding-top:13px"><i class="la la-money la-fw xxlarge text-white"></i></div> '+
            '    <div class="rest '+colorDetails+'"><div class="'+colorTextDetails+' padding" style="height:61px;padding-top:17px!important">Tidak ada</div></div> '+
            '</div> '
        );
    else{
        var list_pengeluaran = "", total_pengeluaran = 0;
        for(var i = 0; i < len; i++){
            list_pengeluaran += '<div class="col right right-align" style="width:100px">'+
                inRp(data[i].total_harga)+'</div> <div class="rest">'+data[i].item+'</div> ';
            total_pengeluaran += parseInt(data[i].total_harga);
        }
        $("#list-pengeluaran"+is_harian).html(
        '<div class="card deep-orange row margin-bottom"> '+
        '    <div class="col" style="width:63px;padding-top:5px"> '+
        '        <i class="la la-money la-fw xxxlarge text-white"></i> '+
        '    </div> '+
        '    <div class="rest '+colorDetails+'"> '+
        '        <div class="'+colorTextDetails+' row padding border-bottom"> '+
        '            <div class="col right right-align" style="width:100px">'+inRp(total_pengeluaran)+'</div> '+
        '            <div class="rest '+colorText+'"><b>TOTAL</b></div> '+
        '        </div> <div class="'+colorTextDetails+' row padding"> '+list_pengeluaran+
        '    </div></div> '+
        '</div> ');
    }
}
var cSign = 1, scroll = [], onMoveNav = false;
function moveNavSign(to){
    var sign = cSign;
    if( to == sign )
        return false;
        
    var navs = [];
    navs[0] = $("#nav-1");
    navs[1] = $("#nav-2");
    navs[2] = $("#nav-3");
    
    navs[0].removeAttr("onclick");
    navs[1].removeAttr("onclick");
    navs[2].removeAttr("onclick");
    
    var t = $( "#nav-" + to ), c = $( "#content-" + to ), co1, co2, to1, to2,
        cName = "-" + sign + "-" + to, 
        nS = $( "#nav-sign" ),
        cH = $( "#content-home" );
    scroll[sign] = $(window).scrollTop();
    if( to == 1 ){
        to1 = $("#nav-2");
        to2 = $("#nav-3");
        co1 = $("#content-2");
        co2 = $("#content-3");
    }else if( to == 2 ){
        to1 = $("#nav-3");
        to2 = $("#nav-1");
        co1 = $("#content-3");
        co2 = $("#content-1");
    }else if( to == 3 ){
        to1 = $("#nav-2");
        to2 = $("#nav-1");
        co1 = $("#content-2");
        co2 = $("#content-1");
    }
    cName = ( sign > to ) ? "right" + cName : cName = "left" + cName;
    t.addClass( "text-white" );
    to1.removeClass( "text-white" );
    to2.removeClass( "text-white" );
    c.removeClass( "content-off" );
    
    $(window).scrollTop( scroll[to] );
    
    co1.removeClass( "content-off" );
    co2.removeClass( "content-off" );
    nS.removeAttr("style").addClass( cName );
    cH.removeAttr("style").addClass( "f" + cName );
    cSign = to;
        
    window.setTimeout(function(){
        co1.addClass( "content-off" );
        co2.addClass( "content-off" );
        var cls = cH.attr("class");
        if(cls == "fright-3-1" || cls == "fright-2-1"){
            cH.css("right", "0").removeClass("f"+cName);
            nS.css("left", "0").removeClass(cName);
        }else if(cls == "fleft-1-2" || cls == "fright-3-2"){
            cH.css("right", "100%").removeClass("f"+cName);
            nS.css("left", "33.333%").removeClass(cName);
        }else if(cls == "fleft-2-3" || cls == "fleft-1-3"){
            cH.css("right", "200%").removeClass("f"+cName);
            nS.css("left", "66.666%").removeClass(cName);
        }
        onMoveNav = false;    
        navs[0].attr("onclick", "moveNavSign(1)");
        navs[1].attr("onclick", "moveNavSign(2)");
        navs[2].attr("onclick", "moveNavSign(3)");
    }, 300 );
}