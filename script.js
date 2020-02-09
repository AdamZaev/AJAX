

document.getElementById("monbtn").addEventListener("click",(e)=>{
 


console.log()


  var element = document.getElementById("jumbou");
  element.classList.add("slidein");
      setTimeout(function() {
      element.classList.add("slidein")

      }
       ,1000)

     setTimeout(function() {
    element.classList.add("slideback")
   
   } 
 ,1000)
   setTimeout(function() {
  element.classList.remove("slidein")

  }
   ,1000)
      setTimeout(function() {
    element.classList.remove("slideback")
      }
   ,3000) 
      

   function eliminate() {

   
   if (document.output2.lenght>10) {
      alert(retry)

   }


   }

    eliminate()

})