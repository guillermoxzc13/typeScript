export function multiplicar(){

    const numm = document.getElementById("multt1") as HTMLInputElement
    const multiploo = document.getElementById("multiplo") as HTMLInputElement
    const resultadoDiv3 = <HTMLLIElement>document.getElementById("resultado3")

   

    const num:number = parseFloat(numm.value);
     const numMult:number = parseFloat(multiploo.value);
    
     let tablaMultiplicar = "";

    for (let i = 1; i <= numMult; i++ ) {
        tablaMultiplicar += `<tr>${num}${" "}*${" "}${i}=${num*i}</tr>`
  
    }
    console.log(tablaMultiplicar);
    
    resultadoDiv3.innerHTML = tablaMultiplicar;

}