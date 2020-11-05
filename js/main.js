const number = document.getElementById('teclas');
const input = document.getElementById("input")
let OperationStatus = false;
let number1, typeOperation
input.textContent = '0';
const calculador = () => {
  if(!number) return
  number.addEventListener('click', (e)=>{
    const t = e.target,
      d = t.dataset;
      if(d.number){
        mostrarNumero(d.number)
      }
      if(d.opera){
        obtenerOperador(t,d.opera)
      }
      if(d.result){
        correrOperacion(d.result)
      }
      

  })
}

const mostrarNumero = number =>{
  input.textContent === '0' || OperationStatus === true 
    ? input.textContent = number 
    : number === "." && !input.textContent.includes('.')
     ? input.textContent += number
     :number !== '.'
      ?input.textContent += number
      :null
  OperationStatus = false;
}
const obtenerOperador =(elemento, operador)=>{
  OperationStatus =true;
  number1 = Number(input.textContent)
  typeOperation = operador
  input.textContent = elemento.textContent
  
}
const correrOperacion = (operation)=>{
  
  const getResult = (number1, typeOperation) => {
    const number2 = Number(input.textContent)  ;
    var result;
    switch (typeOperation) {
      case 'sumar':
        result = number1 + number2
        break;
      case 'restar':
        result = number1 - number2
        break;
      case 'multiplicar':
        result = number1 * number2
        break;
      case 'dividir':
        result = number1 / number2
        break;
      default:
        result = '0'
        break;
    }
    if(input.textContent === 'NaN'){
      input.textContent = "Error"
    }
    result === Infinity
      ? input.textContent = "Error"
      : input.textContent = result;
  }
  operation === 'clear'
    ? input.textContent = "0"
    : getResult(number1, typeOperation)
  
  OperationStatus = true;
}
calculador();