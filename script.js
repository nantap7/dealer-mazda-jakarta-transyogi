function detail(nama){

alert("Anda memilih " + nama);

}

function detail(nama){
    alert("Anda memilih " + nama);
}

function bukaKontak(){
    document.getElementById("popupKontak").style.display = "flex";
}

function tutupKontak(){
    document.getElementById("popupKontak").style.display = "none";
}

window.onclick = function(event){
    let modal = document.getElementById("popupKontak");

    if(event.target == modal){
        modal.style.display = "none";
    }
}

function detail(gambar,nama,harga,spek){

document.getElementById("gambarMobil").src=gambar;

document.getElementById("namaMobil").innerHTML=nama;

document.getElementById("hargaMobil").innerHTML=harga;

document.getElementById("spesifikasiMobil").innerHTML=spek;

document.getElementById("detailModal").style.display="flex";

}

function tutupDetail(){

document.getElementById("detailModal").style.display="none";

}

function bukaTentang(){

    document.getElementById("tentangModal").style.display="flex";

}

function tutupTentang(){

    document.getElementById("tentangModal").style.display="none";

}

window.onclick=function(event){

let detail=document.getElementById("detailModal");
let kontak=document.getElementById("popupKontak");
let tentang=document.getElementById("tentangModal");

if(event.target==detail){
detail.style.display="none";
}

if(event.target==kontak){
kontak.style.display="none";
}

if(event.target==tentang){
tentang.style.display="none";
}

}

function bukaLokasi(){

    document.getElementById("lokasiModal").style.display="flex";

}

function tutupLokasi(){

    document.getElementById("lokasiModal").style.display="none";

}

let lokasi = document.getElementById("lokasiModal");

if(event.target == lokasi){

    lokasi.style.display = "none";

}
window.onclick = function(event){

    let detail = document.getElementById("detailModal");
    let kontak = document.getElementById("popupKontak");
    let tentang = document.getElementById("tentangModal");
    let lokasi = document.getElementById("lokasiModal");

    if(event.target == detail){
        detail.style.display = "none";
    }

    if(event.target == kontak){
        kontak.style.display = "none";
    }

    if(event.target == tentang){
        tentang.style.display = "none";
    }

    if(event.target == lokasi){
        lokasi.style.display = "none";
    }

}