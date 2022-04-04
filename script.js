var theme = 1;
var kullanici = document.getElementById("kullanici");
var searchcontainer = document.getElementById("searchbox-cntnr");
var eski = document.getElementById("eskiyazi");
var srch = document.getElementById("srch");
var klavye = document.getElementById("klavye");
var searchbox = document.getElementById("searchbox");
var ara = document.getElementById("ara");
var eskibtn = document.getElementById("eskibtn");
var butonlar = document.getElementById("butonlar");
var footer = document.getElementById("footer");
var eskiftr = document.getElementById("eskiftr");


function themechange(){
    if(theme){
        document.getElementById("logoimg").src="https://web.archive.org/web/19990504112211im_/http://www.google.com/google.jpg";
        kullanici.style.display = "none";
        searchcontainer.style.width = "90%";
        searchcontainer.style.marginLeft = "5%";
        searchcontainer.style.backgroundColor = "#eee";
        searchcontainer.style.padding = "0";
        eski.style.display = "block";
        srch.style.display = "none";
        klavye.style.display = "none";
        searchbox.style.border = "0";
        searchbox.style.margin = "auto";
        searchbox.style.height = "auto";
        searchbox.style.textAlign = "center";
        ara.style.backgroundColor = "#fff";
        ara.style.padding = "1px 2px";
        ara.style.width = "17em";
        ara.style.height = "auto";
        ara.style.border = "1px solid #aaa";
        eskibtn.style.display = "block";
        butonlar.style.display = "none";
        footer.style.display = "none";
        eskiftr.style.display = "block";
        document.getElementById("dil").style.display = "none";
        theme=0;
    }
    else{
        document.getElementById("logoimg").src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
        kullanici.style.display = "flex";
        searchcontainer.style.width = "100%";
        searchcontainer.style.marginLeft = "0";
        eski.style.display = "none";
        searchcontainer.style.backgroundColor = "transparent";
        searchcontainer.style.paddingTop = "1.7em";
        srch.style.display = "block";
        klavye.style.display = "block";
        searchbox.style.border = "1px solid #ccc8";
        searchbox.style.marginLeft = "30.5%";
        searchbox.style.height = "calc(2.8em + 1px)";
        searchbox.style.textAlign = "left";
        ara.style.backgroundColor = "transparent";
        ara.style.padding = "0 0 0 .5em";
        ara.style.width = "calc(100% - 6em)";
        ara.style.height = "2.8rem";
        ara.style.border = "0";
        eskibtn.style.display = "none";
        butonlar.style.display = "flex";
        footer.style.display = "block";
        eskiftr.style.display = "none";
        document.getElementById("dil").style.display = "block";
        theme = 1;
    }
}