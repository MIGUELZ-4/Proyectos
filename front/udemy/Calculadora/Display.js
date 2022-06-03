class Display{
  constructor(displayValorAnterior, displayValorActual){
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined
    this.valorActual = '';
    this.valorAnterior = '';
    this.signos = {
      sumar: '+',
      restar: '-',
      multiplicar: 'x',
      dividir: '%'
    }
  }

  agregarNumero(numero){
    if(numero === '.'&& this.valorActual.includes('.')) return
    this.valorActual = this.valorActual.toString() + numero;
    this.imprimirValores();
  }

  imprimirValores(){
    this.displayValorActual.textContent = this.valorActual;
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}` ;
  }

  borrar(){
    this.valorActual = this.valorActual.toString().slice(0,-1);
    this.imprimirValores();
  }

  borrarTodo(){
    this.valorActual = '';
    this.valorAnterior = '';
    this.tipoOperacion = undefined
    this.imprimirValores();
  }

  calcular(){
    let valorAnterior = parseFloat(this.valorAnterior);
    let valorActual = parseFloat(this.valorActual);

    if(isNaN (valorAnterior)|| isNaN (valorActual)) return
    this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
  }

  computar(tipo){
    this.tipoOperacion !== 'igual' && this.calcular();
    this.tipoOperacion = tipo;
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = '';
    this.imprimirValores()
  }
  
  // resultado(masOperaciones){
  //   this.valorActual
  // }

}