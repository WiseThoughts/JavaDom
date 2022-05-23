const image = document.getElementById("cat");
const hide = document.getElementById("submit")

console.log(image.style)
hide.addEventListener("click", ()=>{
    if (image.style.display == "none"){
        image.style.display = "block";
        hide.textContent = "Hide";
    }else{
        image.style.display = "none";
        hide.textContent = "Show";
    }
})