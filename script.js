AOS.init()

const menuMobile = document.querySelector(".menu-mobile")

const btnMobile = document.querySelector(".btn-mobile")

btnMobile.addEventListener("click", ()=>{
     
    if(menuMobile.classList.contains("active")){
        menuMobile.classList.remove("active")
    }else{
        menuMobile.classList.add("active");
    }
        
})