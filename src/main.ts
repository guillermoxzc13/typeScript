import { calcular } from "./ejercicios/calculadora"
import { contador } from "./ejercicios/contador"
import { fibo } from "./ejercicios/fibonacci"
import { multiplicar } from "./ejercicios/multiplo"
import { convertirCel } from "./ejercicios/convertidor"
import { contadorLetras } from "./ejercicios/oracion"

document.addEventListener("DOMContentLoaded", () => {
  const btnCalcular = document.getElementById("btnCalcular")

  btnCalcular?.addEventListener("click", () => calcular())
})

document.addEventListener("DOMContentLoaded", () => {
  const btnContador = document.getElementById("btnContador");

  btnContador?.addEventListener("click", () => contador())
})

document.addEventListener("DOMContentLoaded", () => {
  const btnMultiplicar = document.getElementById("btnMultiplicar");

  btnMultiplicar?.addEventListener("click", () => multiplicar())
})

document.addEventListener("DOMContentLoaded", () => {
  const btnFibo = document.getElementById("btnFibo");

  btnFibo?.addEventListener("click", () => fibo())
})

document.addEventListener("DOMContentLoaded", () => {
  const btnConvertir = document.getElementById("btnConvertir");

  btnConvertir?.addEventListener("click", () => convertirCel())
})

document.addEventListener("DOMContentLoaded", () => {
  const btnContar = document.getElementById("btnContar")

  btnContar?.addEventListener("click", () => contadorLetras())
})





