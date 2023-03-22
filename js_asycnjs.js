function TestClick1(){
    alert("testClick1");
}

/*
const test = callback => {
    //2 saniye bekle
    setTimeout(() => {
        callback('hata oluştu!', [])
    }, 2000)
}

const callback = (err, data) => {
    if(err){
        console.log('hata', err);
    } else{
        console.log('data', data)
    }
    
}

test(callback)
//eski yöntem : bu yöntemi kullanmamak için async ler kullanılıyor şuan.

//

/*

//////////////////
/*
- fulfilled : işlem başarılı.
*/
/*
//burdaki promise mantığımız : callback fonksiyon mantığıdır.
// resolve ise işlem başarılıdır , reject ise işlem başarısızdır.
const promise = new Promise((resolve, reject) =>{ 
    setTimeout(() => {
        //resolve('islem basarili'); // .then 'e düşer
        reject('işlem basarisiz'); // .catch 'e düşer
    }, 1500)
    //resolve('işlem başarılı');
    //reject('işlem başarısız');
})


//burada işlemin başarılı olup olmadğını kontrol etmeden istediğimizi yaptırıyoruz.
//console.log(
//    promise
//)


//then çalışır ise promise'nin status'u fulfilled yani : başarılı olması demektir.
//işlemin başarılı olup olmadığını kontrol ederek işlemimizi gerçekleştiriyoruz.
promise.then((data) => {
    console.log(data)
}).catch(err => {
    console.warn(err)
})

*/

/////////////////////////////////////////

const API_URL = 'https://jsonplaceholder.typicode.com/posts'


//console.log(
    //fetch : bana promise döndürür
//    fetch(API_URL)
//)

//sorgu sonucunun başarılı olup olmadğı gibi cevapları alıyorum
//fetch(API_URL).then(res => console.log(res))

// Burası Get işlemi için
//mantık : fetch bana söz veriyor : sözünü tutugunda then'e gönderiyor , bir hata oldugundada catch blogu çalışıyor ve hatnaın nedenini söylüyor.
// .then().then().then : gibi kullanım ile then'den dönen sonucu bir sonraki thende kullanabilirim.

/*
fetch(API_URL)
    .then(res => res.json()) //sorgu sonucu gelen datayı döndürüyorum
    .then(data => console.log(data)) //gelen datayı consol'a basıyorum.
    .catch(err => console.error(err))
*/

/* gibi de post işlemi içinde kullanılabilir = fetch api diye geçiyor : datayı alırken senkron olarak alma gibi bir mantık.
fetch(API_URL, {
    //method : 'POST',
    //body: formData , JSON.stringify({})
})
    .then(res => res.json()) //sorgu sonucu gelen datayı döndürüyorum
    .then(data => console.log(data)) //gelen datayı consol'a basıyorum.
    .catch(err => console.error(err))
*/

//////////////////////////// : Bir fonksiyonun başına async koyunca : promise'ye dönüşür.
//js için : async ve await bütündür : birbirleri ile kullanılırlar : await async fonksiyon içinde yazılır.

/*
async function getPosts(){
    //fetch(API_URL).then(res => res.json()).then(data => console.log(data)) // bu işlemi : mevcut fonksiyonu async yaparak : aşşağıdaki gibide yapabiliyoruz.
    const response = await fetch(API_URL) // await : then mantığı bitine kadar bekletir.
    //console.log(response) //response dönene kadar bu satır çalışmıyacak.
    const data = await response.json()
    console.log(data)
}
*/

async function getPosts(){
    //promisede hatayı catch blogunda yakalıyorduk : async - await ' de ise try - catch ile yakalıyoruz hatayı.
    try {
        const response = await fetch(API_URL) // await : then mantığı bitine kadar bekletir.
        const data = await response.json()
        console.log(data)
    } catch(err){
        console.error(er)
    }
}

getPosts()

///////////////////////
var value = 4;
const square = async function(n){
    return n * n
}
console.log(`value : ${value}`);