/*
Bu service web ilovadan ketuvchi barcha http
so'rovlarnini yuborish uchun xizmat qiladi.
*/

/*
Bu o'zgaruvchida backend ning url joylashadi
*/
var baseUrl = "http://http://kitcuz.azurewebsites.net";


// HTTP  xizmatlarini amalga oshirish uchun umumiy obyekt
var http = {
    // Afrorizatsiyadan muvaffaqiyatli o'tganda beriladigan kalit
    token: null,
    // HTTP get so'rovlarini yuborish uchun metod
    // Birinchi o'zgaruvchi api manzilini oladi
    // Ikkinchi o'zgaruvchiga callBack funksya
    // ya'ni so'rov amalga oshgan qayta ishlovchi funksiya
    get: function(api, funksiya){
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = funksiya;
        ajax.open('GET', baseUrl + api);
        this.setToken(ajax);
        ajax.send();
    },
    // HTTP post so'rovlarini yuborish uchun metod
    // Birinchi o'zgaruvchi api manzili
    // Ikkinchi o'zgaruvchi ma'lumot
    // Uchinchi o'zgaruvchi - callBack funksiya
    post:  function(api, data, funksiya){
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = funksiya;
     
        ajax.open('POST', baseUrl + api);
        this.setToken(ajax);
        ajax.setRequestHeader("Content-Type", "application/json");
        ajax.send(data);
    },
   // HTTP put so'rovlarini yuborish uchun metod
    // Birinchi o'zgaruvchi api manzili
    // Ikkinchi o'zgaruvchi ma'lumot
    // Uchinchi o'zgaruvchi - callBack funksiya
    put: function(api, data, funksiya){
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = funksiya;
      
        ajax.open('PUT', baseUrl + api);
        this.setToken(ajax);
        ajax.send(data);
    },
    // HTTP delete so'rovlarini yuborish uchun metod
    // Birinchi o'zgaruvchi api manzilini oladi
    // Ikkinchi o'zgaruvchiga callBack funksya
    delete: function(api, funksiya){
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = funksiya;
      
        ajax.open('DELETE', baseUrl + api);
        this.setToken(ajax);
        ajax.send();
    },

    setToken: function(ajax){
        if(!this.token){
            this.token = localStorage.getItem('token');
        }

        if(this.token ){
            ajax.setRequestHeader("Authorization", "Bearer " + this.token)
        }
    }
}

