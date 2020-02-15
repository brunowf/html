class Calc {

	constructor() {
		this.number = 0;
		this.result = 0;
		this.operation;
		this.control = true;
	}

	destroy(code) {
		this.number = 0;
		this.result = 0;
		this.operation = undefined;
		this.control = true;
		document.getElementById(code).value = 0;
	}

	numberPress(code, value) {
		if (!this.number || this.number == 0) {
			this.number = value;
		} else {
			this.number = parseInt(this.number + '' + value);
		}
		document.getElementById(code).value = this.number;
	}

	operationPress(code, value) {
		if (this.control) {
			this.result = this.number;
			this.control = false;
		} else {
			switch (value) {
				case '+':
					this.result += this.number;
					break;
				case '-':
					this.result -= this.number;
					break;
				case '*':
					this.result *= this.number;
					break;
				case '/':
					this.result /= this.number;
					break;
				case '=':
					this.result += this.number;
					break;
			}
			document.getElementById(code).value = this.result;
		}
		this.operation = value;
		this.number = 0;
	}

}
