
var button = document.getElementById("button");
var task1 = document.getElementById("task1");
var res = document.getElementById("result");
var a = 0
button.addEventListener("click", function (){
    if (task1.value == "github") {
        a++;
        res.innerText =`Ваш результат :${a}`;
        button.setAttribute("disabled", true);
    }
    else {
    alert("неправильно");
    }
})
