const submit = document.getElementById("butaoo");
const dianoite = document.querySelector(".day-night")
const body = document.querySelector("body")
    dianoite.addEventListener('click' , () => {
        dianoite.classList.toggle("active")
        body.classList.toggle("active")
    })
submit.addEventListener('click' , function(e) {
e.preventDefault();
const numero1 = parseFloat(document.getElementById("num1").value)
const numero2 = parseFloat(document.getElementById("num2").value)
const numero3 = parseFloat(document.getElementById("num3").value)

let calc = ((numero2*numero3) / numero1);
const result = document.querySelector(".result");
let meio = document.querySelector(".mid");
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    meio.textContent = "Preencha todos os campos.";

  } else {
    meio.textContent = "";
}
if(Number.isInteger(calc)){
    result.textContent = calc 
}else{
result.textContent = calc.toFixed(2);

}
})

