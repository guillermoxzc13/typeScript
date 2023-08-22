
export function contador() {
    const numinput = document.getElementById("contador1") as HTMLInputElement;
    const resultadoDiv = <HTMLLIElement>document.getElementById("resultado");

    

    const num = parseFloat(numinput.value)

    if (isNaN(num)) {
        resultadoDiv.textContent = "Por favor, ingrese un número válido.";
        return;
    }
    let cantidadPares = 0;
    let cantidadImpares = 0;
    
    for (let numero = 1; numero <= num; numero++) {
        if (numero % 2 === 0) {
            cantidadPares++;
        } else {
            cantidadImpares++;
        }
    }

    resultadoDiv.textContent = `Cantidad de números pares: ${cantidadPares}, Cantidad de números impares: ${cantidadImpares}`;
}



