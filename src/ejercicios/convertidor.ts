export function convertirCel (){

    const numCel = document.getElementById("convertidor") as HTMLInputElement;
    const resultadoDiv = <HTMLLIElement>document.getElementById("resultConv");

    const num: number = parseFloat(numCel.value)

    const convertirr = num * 1.8 + 32

    resultadoDiv.textContent = `la temperatura de ${num} Grados a  Fahrenheit es de  ${convertirr}`
}