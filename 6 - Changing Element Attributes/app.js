const image = document.getElementById("image");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
console.log(image);

submit.addEventListener ("click", ()=>{
    image.src = input.value;
});
