export function fibo() {

    const numFibo = document.getElementById("fibo1") as HTMLInputElement;
    const resultadoDiv = <HTMLLIElement>document.getElementById("resultfibo");


    const num: number = parseFloat(numFibo.value);
    const fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
   
    console.log(fib)
    resultadoDiv.textContent = `la secuencia de Fibonacci hasta ${num} es: ${JSON.stringify(fib)}`
};