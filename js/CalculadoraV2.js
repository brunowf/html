class CalculadoraV2 {
  constructor(id) {
    this.value = 0;
    this.aux = 0;
    this.op = '';
    this.id = id;
    this.event;
  }
  /**
   * The following method will identify if the user pressed and operation or a number
   */
  action(event) {
    this.event = event;
    if (this.isOperation()) {
      this.operationPress();
    } else {
      this.numberPress();
    }
    this.setValueById();
  }

  operationPress() {
    this.enableByName('equals');
    const evValue = this.getEventValue();
    if (this.isNull(this.op) || this.isNull(this.getAux())) {
      this.exchangeValues();
    } else {
      switch (evValue) {
        case '-':
          this.minusOp();
          break;
        case '+':
          this.sumOp();
          break;
        case '*':
          this.multiplyOp();
          break;
        case '/':
          this.divisionOp();
          break;
        case '.':
          break;
        case '=':
          break;
      }
    }
    if (evValue != '=' && evValue != '.') {
      this.op = this.getEventValue();
    }
    this.disableOpButtons();
  }

  numberPress() {
    this.disableOpButtons();
    if (this.getValue() == 0) {
      this.value = this.getEventValue();
    } else if (this.getValue() < 999999999 && this.getValue() > -999999999) {
      this.addNumber();
    } else {
      alert('CalculadoraV2/numberPress');
    }
  }

  disableOpButtons() {
    if (this.isOperation()) {
      this.disableByName('operation');
    } else {
      this.enableByName('operation');
    }
  }

  minusOp() {
    this.value = this.getAux() - this.getValue();
    this.aux = '';
  }

  sumOp() {
    this.value = this.getAux() + this.getValue();
    this.aux = '';
  }

  multiplyOp() {
    this.value = this.getAux() * this.getValue();
    this.aux = '';
  }

  divisionOp() {
    this.value = this.getAux() / this.getValue();
    this.aux = '';
  }

  equalsOp() {
    //todo
  }

  /**
   * Generic methods:
   */
  isNull(value) {
    return value == ''
      || value.size == 0
      || value == undefined
      || value == null;
  }

  setValueById() {
    document.getElementById(this.id).value = this.value;
  }

  destroy() {
    this.op = '+'
    this.disableByName('operation');
    this.value = 0;
    this.aux = 0;
    this.op = '';
    this.setValueById();
  }

  exchangeValues() {
    this.aux = this.value;
    this.value = 0;
  }

  addNumber() {
    this.value = this.value + this.getEventValue().toString();
  }

  getValue() {
    return parseFloat(this.value);
  }

  getAux() {
    return this.isNull(this.aux) ? "" : parseFloat(this.aux);
  }

  getEventValue() {
    return this.event.target.value;
  }

  isOperation() {
    const check = this.getEventValue();
    return check == '+'
      || check == '-'
      || check == '/'
      || check == '*'
      || check == '='
      || check == '.';
  }

  disableByName(name) {
    document.getElementsByName(name).forEach(e => {
      if(!(e.disabled)){
        e.toggleAttribute('disabled');
      }
    });
  }

  enableByName(name){
    document.getElementsByName(name).forEach(e => {
      if(e.disabled){
        e.toggleAttribute('disabled');
      }
    });
  }

}
