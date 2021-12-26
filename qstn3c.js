var xhr=new XMLHttpRequest();
xhr.onload=function(){
     if(xhr.status>=200 && xhr.status<300){
         var t=JSON.parse(this.response);
        t.forEach(element => {
           console.log(`
           country:${element.name},
           capital:${element.capital},
           flag:${element.flag}`)   
        });
     }
     else{
         console.log("data is not availaible")
     }
};
xhr.open("Get","https://restcountries.com/v2/all");
xhr.send();