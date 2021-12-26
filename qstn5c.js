var xhr=new XMLHttpRequest();
xhr.onload=function(){
     if(xhr.status>=200 && xhr.status<300){
         var t=JSON.parse(this.response);
        const currency=t
            .filter(
              (country) => country.currencies[0].name === "United States dollar"
            )
            .map((country) => country.name);
      
          console.log(currency);
     }
     else{
         console.log("data is not availaible")
     }
};
xhr.open("Get","https://restcountries.com/v2/all");
xhr.send();

