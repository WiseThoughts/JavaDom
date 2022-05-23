const myElement = document.getElementById("myId");
// const myElement = document.querySelector("#myId"); These are fuctionally the same.

const listItems = document.querySelectorAll("li:nth-child(even)");
console.log(listItems)
console.log(listItems.length)

for (let i=0; i<listItems.length; i++){
    listItems[i].style.color ="lightgreen";
}
