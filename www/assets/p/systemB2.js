var firstUrl = "https://stoking.neosantara.net/",
    url = firstUrl + "app/",
	urlTarget = url + "apps.php";

$(document).ready(function(){
	document.addEventListener("deviceready", TblBack_Clicked, false);
    window.setTimeout(function(){play();}, 177);
});

function getX(sendData, onSuccess, dtType = "json"){
	$.ajax({
		url: urlTarget,
		traditional: true,
		type: "post",
		dataType: dtType,
		data: sendData,
        error: ajaxErr,
		success: onSuccess
	}); 
}

function getXForm(sendData, onSuccess, dtType = "json"){
	$.ajax({
		url: urlTarget,
		method: "POST",
		contentType: false,
        cache: false,
        processData: false,
		data: sendData,
		dataType: dtType,
        error: ajaxErr,
		success: onSuccess
	}); 
}

function ajaxErr(jqXHR, exception){
	if(jqXHR.status === 0){
		tryAgain("Tidak ada koneksi\nUlangi percobaan setelah koneksi aktif");
	}else if(jqXHR.status == 404){
		tryAgain("Halaman server tidak ditemukan [404]\nHubungi developer apps"); 
	}else if(jqXHR.status == 500){ 
		tryAgain("Internal Server Error [500]\nHubungi developer apps"); 
	}else if(exception == "parsererror"){ 
		tryAgain("Data server tidak valid\nHubungi developer apps"); 
	}else if(exception == "timeout"){ 
		tryAgain("Koneksi terlalu lama\nSilahkan ulangi setelah tunggu beberapa menit"); 
	}else if(exception == "abort"){ 
		tryAgain("Koneksi ditolak\nHubungi developer apps"); 
	}else{ 
		tryAgain("Error :\n" + jqXHR.responseText); 
	}
}

function evaluate(tag, msgError){
	if(tag.value === undefined || tag.value === null || tag.value.trim() == ""){
        alert(msgError);
        tag.focus(); 
		return 0; 
	}
	return 1;
}

function evalDirect(val, msgError, tag, isNumber){
    if(isNumber)
        var evaluasi = (val === undefined || val === null || val == "" || val == 0);
    else
        var evaluasi = (val === undefined || val === null || val == "");
	if(evaluasi){ 
        alert(msgError);
        tag.focus();
        return 0; 
	}
	return 1;
}

function evalDirectEmail(val, msgError, tag){
	if(!validateEmail(val)){ 
        alert(msgError);
        tag.focus();
        return 0; 
	}
	return 1;
}

function evalLength(tag, msgError, min){
	if(!min) min = 6;
	if(tag.value.length < min){ 
		window.setTimeout(function(){ 
			alert(msgError);
			tag.focus(); 
		} , 500); 
		return 0; 
	}
	return 1;
}

function evalEmail(tag, msgError){
	if(!validateEmail(tag.value.trim())){
		window.setTimeout(function(){ 
			alert(msgError);
			tag.focus(); 
		} ,500); 
		return 0;
	}
	return 1;
}

function validateEmail( m ){ 
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
	return re.test( m ); 
}

function activeSlideEvent(){	
	(function(d){
		var ce=function(e,n){ var a=document.createEvent("CustomEvent");a.initCustomEvent(n,true,true,e.target);
			e.target.dispatchEvent(a);a=null;return false},
		nm=true,sp={x:0,y:0},ep={x:0,y:0}, touch={ touchstart:function(e){sp={x:e.touches[0].pageX,y:e.touches[0].pageY}},
		touchmove:function(e){nm=false;ep={x:e.touches[0].pageX,y:e.touches[0].pageY}},
		touchend:function(e){if(nm){ce(e,"fc")}else{var x=ep.x-sp.x,xr=Math.abs(x),y=ep.y-sp.y,yr=Math.abs(y);
		if(Math.max(xr,yr)>20){ce(e,(xr>yr?(x<0?"swl":"swr"):(y<0?"swu":"swd")))}};nm=true},
		touchcancel:function(e){nm=false} }; for(var a in touch){d.addEventListener(a,touch[a],false);}})
	(document);
}

Element.prototype.remove = function(){
    this.parentElement.removeChild(this);
}
NodeList.prototype.remove = HTMLCollection.prototype.remove = function(){
    var i = this.length, ths, pThs;
    while(i--){
        ths = this[i]; 
        pThs = ths.parentElement;
        if(ths && pThs)
            pThs.removeChild(ths);
    }
}

function removeRippleSpan(){    
    if(window.newCountDown){
        window.setTimeout(function(){
            window.newCountDown = false;
            removeRippleSpan();
        }, 390);
    }else{
        document.getElementsByClassName("ripple").remove();
        document.getElementsByClassName("ripple-dark").remove();
        window.removingRipple = false;
    }
}
var removingRipple = false, newCountDown = false; addRippleEffect = function(e){
    window.newCountDown = true;
    var target = e.target, rClass = "ripple";
    if(!target.classList.contains( "rips" )) target = target.parentElement;
	if(target === null || !target.classList.contains("rips")){
        rClass = "ripple-dark";
        target = e.target;
        if(!target.classList.contains("rips-dark"))target = target.parentElement;
        if(target === null || !target.classList.contains("rips-dark"))return false;
    }
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector("." + rClass);
    if(!ripple){
        ripple = document.createElement("span");
        ripple.className = rClass;
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + "px";
        target.appendChild(ripple);
    }
    ripple.classList.remove("show");
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + "px";
    ripple.style.left = left + "px";
    ripple.classList.add("show");
    if(!window.removingRipple){
        window.newCountDown = false;
        window.removingRipple = true;
        window.setTimeout(removeRippleSpan, 490);
    }
    return false;
}
function setRippleEffect(){
	setTimeout(function(){
		document.addEventListener("click", addRippleEffect, false);
	}, 50);
}
function TblBack_Clicked(){
	document.addEventListener("backbutton", function(){
        if(confirm("Yakin keluar aplikasi ?"))
            navigator.app.exitApp();
    }, false); 
}
function setLS(name, val){
	if(typeof name === "string")
		localStorage.setItem(name, val);
	else{
		
	}
}
function getLS(name){
	return localStorage.getItem(name);
}
function delLS(name){
	localStorage.removeItem(name);
}
function hasLogin(){
	return existLS("id_user");
}
function tryAgain(msg){ 
	alert(msg); 
}
function existLS(name){
	return (getLS(name) != undefined);
}
function evalImgType(tag, msgError){
    var re = /\.(jpg|jpeg|png)$/i;
    if(!re.exec(tag.value)){ 
        alert( msgError );
        tag.focus();
        return 0; 
	}
	return 1;
}
function setDate(){
    var date = new Date();
    $( ".datepicker" ).datepicker({ 
        changeMonth: true,
        changeYear: true,
        dayNames: getDayNames(),
        monthNames: getMonthNames(),
        dateFormat: "DD, d MM yy",
        onSelect: function(){
            var dateTime = new Date($(this).datepicker("getDate")),
                strDateTime =  dateTime.getFullYear() + "-" + (dateTime.getMonth()+1) + "-" + dateTime.getDate();
            var id = this.id.substr(1, this.id.length);
            $("#"+id).val(strDateTime);
        }
    }).datepicker("setDate", date);
    var strDateTime =  date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    $(".date_val").val(strDateTime);
}
function getDayNames(no){
    var dayNames = [ "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu" ];
    if( no === undefined ) return dayNames; else return dayNames[no];
}
function getMonthNames(no){
    var monthNames = [ "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember" ];
    if( no === undefined ) return monthNames; else return monthNames[no];
}

function simple_date(date){
    date = date.split("-");
    return date[2] + "/" + date[1] + "/" + date[0].substr(2, 2);
}
function inRp(d) {
    var min = "", a = ""; d = parseInt(d); if(isNaN(d)) return 0;
    if(d < 0){ min = "-"; d = d * -1;}
    d = d.toString().split("").reverse().join("");
    for (var c = 0; c < d.length; c++) { if (c % 3 == 0) { a += d.substr(c, 3) + "." } }
    return min + a.split("", a.length - 1).reverse().join("");
}
function inHp(d) {
    var a = "";
    for (var c = 0; c < d.length; c++) { if (c % 4 == 0) { a += d.substr(c, 4) + " " } }
    return a;
}
function stringScript(text){
	text = text.replace("'", "\\\'");
	text = text.replace("\"", "\\x22");
	return text;
}