const stars = document.querySelectorAll(".star");
stars.forEach(function(star, tienda){
    star.addEventListener("click", function(){
        for (let i=0; 1<=tienda; i++){
            star[i].classList.add("checked");
        }
    })
})
    	
/*<<<<<<<<<<<<<pagina tienda>>>>>>>>>>>>*/ 




/*<<<<<<<<<<<<<<< FORMULARIO >>>>>>>>>>>>>>>>>>>> */
let signUp=document.getElementById("signUp");
let signId = document.getElementById("signIn");
let maneinput = document.getElementById("nameinput");
let titulo = document.getElementById("titulo");

signId.onclick=function() {
    nameinput.style.maxHeight="0";
    titulo.innerHTML="login";
    signUp.classList.add("disable");
    signId.classList.remove("disable");

}
signUp.onclick=function() {
    nameinput.style.maxHeight="60px";
    titulo.innerHTML="registro";
    signUp.classList.remove("disable");
    signId.classList.add("disable");
}
/* <<<<<<<<<<<<<<<<<<<<<<<   >>>>>>>>>>>>>>>>>>>>>>>>>>> */
