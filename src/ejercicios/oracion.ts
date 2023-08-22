export function contadorLetras (){

    const letras = document.getElementById("oracion") as HTMLInputElement
    const resultDiv = <HTMLLIElement>document.getElementById("resultOra")

    const letrass: string = (letras).value

    const letrasSinEspacios = letrass.replace(/\s+/g, '');

    const contarLetras = letrasSinEspacios.length;

    resultDiv.textContent = `la oracion " ${letrass} " tiene ${contarLetras} letras`

}