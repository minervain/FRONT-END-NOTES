// Cok Kullanilan Array(Dizi) Metotlari ve Array icinde Array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// https://www.w3schools.com/js/js_array_methods.asp

let items = [1, 2, 3, 4, 5] 

// Array icinde Array:
let femaleUsers = ["Ayse", "Hulya", "Merve"]
let maleUsers = ["Ahmet", "Hasan", "Mehmet"]

items.unshift(femaleUsers)

items.push(maleUsers)

console.log(items)

console.log(items.length)
console.log(items[0].length) // Array icindeki istedigimiz Array'in length bilgisini aldik
console.log(items[0][0]) // Ayse bilgisine ulastik :)

// Array icerisinden oge ayirmak -> splice(pos, item?)
let newItems = items.splice(1, 5)

console.log("newItems: ", newItems)
console.log("items: ", items)
// Array icerisindeki ogenin index bilgisini bulmak -> indexOf('value')
items.unshift("lorem")
items.push("ipsum")

console.log( items.indexOf("ipsum") )

// Array Kopyalamak -> slice, [...ES6]
let copyItems = items
console.log(items)

copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

console.log("kopyalandiktan sonraki hali:")
copyItems = items.slice() // kopyalama yapti
copyItems.pop() // son ogeyi cikarttik
console.log("copyItems", copyItems)
console.log("items", items)

let es6Items = [...items] // es6 ve sonrasinda gelen kopyalama islemi
console.log(es6Items)

// Iki Array Bilgisini Birlestirmek -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers] // es6 birden fazla array yapisini birlestirmek
console.log(allUsers)

// Array icerisindeki bilgiyi String'e cevirmek -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))


// Istedigimiz Index Bilgisine Oge Eklemek -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Melissa")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)

/*FİLTER MAP KULLANIMI*/

// array filter kullanimi
// 5 harften fazla olanlar (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)


// aktif kullanicilar ??
const USERS = [
  {fullName: "Ayse Sumer", isActive: false},
  {fullName: "Ahmet Urgan", isActive: true},
  {fullName: "Asya Basar", isActive: true},
  {fullName: "Aksel Durmaz", isActive: false},
]

// const ACTIVE_USERS = USERS.filter(user => user.isActive === true)
const ACTIVE_USERS = USERS.filter(user => user.isActive )
console.log(ACTIVE_USERS)



// array map kullanimi
// https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const USERS1 = ["AYSE", "MehMet", "TugCE", "AkSEL"]

// userName icinde orjinal isim kalsin, 
// shortName icinde ilk harf buyuk . (A.)
// newName icinde ilk harf buyuk olsun
// {userName: "AYSE", shortName: "A.", newName: "Ayse"}

const NEW_USERS = USERS1.map( user => user.toLowerCase() )
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item =>
//   {
//     return {
//       userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//     }
//   } 
// )

const USERS_OBJ = USERS1.map( item => (
      {userName: item, shortName: `${item[0]}.`, newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`}
    )
)

console.log(USERS_OBJ)