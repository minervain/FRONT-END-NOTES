let myName =document.querySelector("#myName")

let ad=prompt("Lütfen adınızı girin")


myName.innerHTML=`${ad}`


//ad tamam
function Tarih(){
let myClock=document.querySelector("#myClock");
var date = new Date().toLocaleString('tr-TR');

myClock.innerHTML=`${date}`;}

setInterval(Tarih,1000)

//tarih tamam


let gun =document.querySelector("#gun");
var tarih = new Date();
var gunler = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
gun.innerHTML=`${gunler[tarih.getDay()]}`

//Gün tamam