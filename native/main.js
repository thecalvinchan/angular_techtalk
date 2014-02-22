var input = document.getElementById("fahrenheit");
var target = document.getElementById("converted");
input.addEventListener("keyup",conversion(converted));

function conversion(target,sourceProgress,targetProgress) {
    return function(){
        console.log(this.value);
        var fahr = this.value;
        var value = (fahr - 32) * 5 / 9;
        target.innerHTML = Math.round(value);
    }
}
