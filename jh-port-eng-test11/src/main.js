let section = document.querySelector("section");
let mode = document.querySelector(".site-mode");

mode.addEventListener("click", ()=>{
    if(mode.classList.contains("fa-sun")){
        section.classList.add("white-mode");
        mode.classList.replace("fa-sun", "fa-moon");
    }else{
        section.classList.remove("white-mode");
        mode.classList.replace("fa-moon", "fa-sun");
    }
});