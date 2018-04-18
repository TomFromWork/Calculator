
var btn = document.getElementsByClassName("custom-button");
var display = document.getElementById("lcd");
console.log(btn);

for ( var i = 0; i < btn.length; i++) {
  btn[i].onclick = function() {
    console.log("Button " + this.value + " was clicked");
    display.innerHTML += this.value;
  }
  btn[14].onclick = function() {
    display.innerHTML = eval(display.textContent);
  }
  btn[12].onclick = function() {
    display.innerHTML = "";
  }
}
