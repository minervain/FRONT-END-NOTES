//  Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
//  Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
//  Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
//  Önce ana fonksiyonlar unutmayın. için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.



let input=document.querySelector("#task")
let ulDOM=document.querySelector("#list")
let focs = document.querySelector('#liveToastBtn')




input.addEventListener("submit",newElement)
ulDOM.addEventListener("click", listClick);

console.log(input.value)
function newElement(e){

if(input.value){
    addItem(input.value)
    input.value=""
}

else{
    // alertDOM.innerHTML = alertFunction(
    //             "Baslik Bilgisi",      "Eksik Bilgi Girdiniz",
    //             "success"
    //          )
         }


}


 function addItem(gelendeger){
    let liDOM = document.createElement('li')
    liDOM.innerHTML=`${gelendeger}`
    liDOM.className = "list-group-item list-group-item-secondary";
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = '<i class="fas fa-times"></i>';


    ulDOM.prepend(liDOM)

 }

 function listClick(e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
  }