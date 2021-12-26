var xhr=new XMLHttpRequest();
xhr.onload=function(){
     if(xhr.status>=200 && xhr.status<300){
         var t=JSON.parse(this.response);
        const population=t.map((user)=>user.population).reduce((a,b)=>a+b);
        console.log(population)
     }
     else{
         console.log("data is not availaible")
     }
};
xhr.open("Get","https://restcountries.com/v2/all");
xhr.send();