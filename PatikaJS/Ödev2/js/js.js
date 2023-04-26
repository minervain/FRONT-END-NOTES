//  Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
//  Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
//  Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
//  Önce ana fonksiyonlar unutmayın. için uğraşın. Yapıldı, toast bildirim bunlar biraz daha için artistliği. Öncelikli amacını sağlıyor olması lazım.



let input=document.querySelector("#task")
let ulDOM=document.querySelector("#list")
let focs = document.querySelector('#liveToastBtn')

let addBtn = document.querySelector('#toastWarning')
let addToast = document.querySelector('#liveToast')


input.addEventListener("submit",newElement)
ulDOM.addEventListener("click", listClick);

console.log(input.value)
function newElement(e){

if(input.value){
    addItem(input.value)
    input.value=""
}

else{
    toastGoster();
         }


}


 function addItem(gelendeger){
    let li = document.createElement('li')
        li.innerHTML = input.value;
        ulDOM.appendChild(li)
        let btn = document.createElement("button")
        btn.innerHTML = "x"
        btn.classList.add('close')
        li.appendChild(btn)
        addToastF();


    ulDOM.prepend(li)
    addToastF();

 }0

 function listClick(e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
  }

  function alertFunction(e) {


  }
 

  /**TOAST  */

  let toastGoster = () => {
    var show = new bootstrap.Toast(addBtn)
    show.show()
}
let addToastF = () => {
    var goster = new bootstrap.Toast(addToast)
    goster.show()
}


ulDOM.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
       
     
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
   
    }
}, false);