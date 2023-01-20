
var increment = document.getElementById("plus");
var decrement = document.getElementById("minus");
var reset = document.getElementById("reset");
var heading = document.getElementById("heading");
var count = 0;

increment.addEventListener("click", (e) => {
    count++;
    heading.innerHTML = count;
});

decrement.addEventListener("click", (e) => {
    count--;
    heading.innerHTML = count;
});

reset.addEventListener("click", (e) => {
    count = 0;
    heading.innerHTML = count;
});