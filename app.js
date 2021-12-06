let text = document.getElementById("text");
let output = document.getElementById("output");
let button = document.getElementById("button");
button.addEventListener("click",function(){
    let str = text.value;
    let count = str.length;
    output.innerHTML = `<h2>${count}</h2>`
});