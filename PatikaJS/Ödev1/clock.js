let myName =document.querySelector("#myName")

let ad=prompt("Lütfen adınızı girin")


myName.innerHTML=`${ad}`


//ad tamam
function Tarih(){
let myClock=document.querySelector("#myClock");
var date = new Date().toLocaleString('tr-TR');

myClock.innerHTML=`${date}`;}

setInterval(Tarih,1000)
