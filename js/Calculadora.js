class Calculadora{
	constructor(){
		this.valor = 0;
		this.valor2 = 0;
		this.atual = 1;
		this.sinal = null;
		this.resultado = null;
	}
	destroy(){
		this.valor = 0;
		this.valor2 = 0;
		this.atual = 1;
		this.sinal = null;
		this.resultado = null;
	}

	texto(code, value){
		let aux = this.atual == 1 ? this.valor : this.valor2;
		if (aux == 0) {
			aux = value;
		}else{
			aux = "" + aux + value;
		}
		if (this.atual == 1) {
			this.valor = parseInt(aux);
			document.getElementById(code).value = this.valor;
		}else{
			this.valor2 = parseInt(aux);
			document.getElementById(code).value = this.valor2;
		}
	}

	operation(code, value){
		this.sinal = value;
		if (this.atual == 1) {
			this.atual = 2;
		}else{
			this.result(code);
		}
	}

	result(code){
		switch(this.sinal){
			case '+':
			this.valor = this.valor + this.valor2;
			break;
			case '-':
			this.valor = this.valor - this.valor2;
			break;
			case '*':
			this.valor = this.valor * this.valor2;
			break;
			case '/':
			this.valor = this.valor / this.valor2;
			break;
		}
		this.valor2 = 0;
		this.atual = 2;
		document.getElementById(code).value = this.valor;
	}
}
