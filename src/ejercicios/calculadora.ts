console.log("hola mundo");

// calculadora
export function calcular() {
  const num1Input = document.getElementById("num1") as HTMLInputElement;
  const num2Input = document.getElementById("num2") as HTMLInputElement;
  const operationSelect = document.getElementById("operation") as HTMLSelectElement;
  const resultElement = <HTMLLIElement>document.getElementById("result");

  

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operation = operationSelect.value;

  let result: string | number = 0;

  switch (operation) {
      case "suma":
          result = num1 + num2;
          break;
      case "resta":
          result = num1 - num2;
          break;
      case "multiplicacion":
          result = num1 * num2;
          break;
      case "dividir":
          if (num2 !== 0) {
              result = num1 / num2;
          } else {
              result = "no se puede divir por 0";
          }
          break;
      default:
          result = "operacion invalida";
  }

  resultElement.textContent = `Result: ${result}`;
  
}
