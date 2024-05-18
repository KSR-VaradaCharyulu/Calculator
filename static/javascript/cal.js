let read = document.querySelector(".read-only");
let clear = document.querySelector("#clear");
let backSpace = document.querySelector("#backspace");
let decimal = document.querySelector("#deci");
let equal = document.querySelector("#equal");
let division = document.querySelector("#div");
let multipliication = document.querySelector("#mul");
let subtraction = document.querySelector("#sub");
let addition = document.querySelector("#add");

function num(value){
    read.textContent += value;
};

function arth(value){
    read.textContent += value;
};

clear.addEventListener("click", () => {
    read.textContent = "";
});

backSpace.addEventListener("click", () => {
    read.textContent = read.textContent.substring(0, read.textContent.length-1);
});

decimal.addEventListener("click", () => {
    read.textContent += ".";
});

equal.addEventListener("click", () => {
    try{
        read.textContent = eval(read.textContent);
    }
    catch(e){
        read.textContent = "Invalid Syntax";
    };
});