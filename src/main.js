"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculadora_1 = require("./ejercicios/calculadora");
document.addEventListener("DOMContentLoaded", function () {
    var btnCalcular = document.getElementById("btnCalcular");
    btnCalcular === null || btnCalcular === void 0 ? void 0 : btnCalcular.addEventListener("click", function () { return (0, calculadora_1.calcular)(); });
});
