// Task 2
let btn_color = document.createElement("button");
btn_color.innerHTML = "Change color!";
btn_color.name = "color-button";
btn_color.onclick = function () {
    var red = Math.floor(Math.random() * 100);
    var green = Math.floor(Math.random() * 100);
    var blue = Math.floor(Math.random() * 100);
    document.getElementById("block").style.background = "rgb("+red+","+green+","+blue+")";
};

// Task 3
let modal_window = document.createElement("div");
modal_window.style.display = "none";
modal_window.style.position = "fixed";
modal_window.style.left = "0";
modal_window.style.top = "0";
modal_window.style.width = "100%";
modal_window.style.height = "100%";
modal_window.style.padding = "5%";
modal_window.style.background = "rgba(0,0,0,0.4)";

let modal_content = document.createElement("p");
modal_content.innerHTML = "This is a simple modal window. Click on it to make it disappear."
modal_content.style.background = "#FEFEFE";
modal_content.style.padding = "5%";
modal_content.style.border = "1px solid #888";
modal_content.style.width = "80%";
modal_content.onclick = function () {
    modal_window.style.display = "none";
}

modal_window.appendChild(modal_content);

let btn_modal = document.createElement("button");
btn_modal.innerHTML = "Call modal window";
btn_modal.onclick = function () {
    modal_window.style.display = "block";
};

// Task 4
var request = new XMLHttpRequest();
request.onload = function() {
    const obj = JSON.parse(request.responseText);
    console.log(obj);
}
request.open("GET", "data.json");
request.send();

var text = '{"menu": {  "id": "file",  "value": "File",  "popup": {  "menuitem": [  {"value": "New", "onclick": "CreateDoc()"}, {"value": "Open", "onclick": "OpenDoc()"},  {"value": "Save", "onclick": "SaveDoc()"}  ]  }  }} '
const obj = JSON.parse(text);
console.log(obj);

// Task 5
var things = ["phone", "book", "tree", "eye", "queue", "game", "bar", "turtle", "cat"];
things.sort();
console.log(things);

// Adding elements to HTML
document.body.appendChild(btn_color);
document.body.appendChild(btn_modal);
document.body.appendChild(modal_window);