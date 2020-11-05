const number = document.getElementById('teclas');
const input = document.getElementById("input")
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
        correrOperacion()
      }
      

  })
}

const mostrarNumero = number =>{
  input.textContent === '0' ? input.textContent = number : input.textContent += number
  
}
const obtenerOperador =(elemento, operador)=>{
  input.textContent = elemento.textContent
}
calculador();