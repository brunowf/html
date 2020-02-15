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
    const evValue = this.getEventValue();
    if (this.isNull(this.op)) {
      this.op = '-';
      this.exchangeValues();
    } else {
      switch (evValue) {
        case '-':
          this.minusOp();
          break;
        case '+':
          this.plusOp();
          break;
        case '*':
          break;
        case '/':
          break;
        case '.':
          break;
        case '=':
          break;
      }
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
    const check = this.getEventValue();
    if (this.isOperation()) {
      document.getElementsByName('operation').forEach(e => {
        e.toggleAttribute('disabled');
      });
    } else {
      document.getElementsByName('operation').forEach(e => {
        if (e.disabled) {
          e.toggleAttribute('disabled');
        }
      });
    }
  }

  minusOp() {
    if (this.isNull(this.op)) {
      this.op = '-';
      this.exchangeValues();
    } else {
      this.value = this.getAux() - this.getValue();
      this.aux = '';
    }
  }

  plusOp() {
    if (this.isNull(this.op)) {
      this.op = '+';
      this.exchangeValues();
    } else {
      this.value = this.getAux() + this.getValue();
      this.aux = '';
    }
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
    return parseFloat(this.aux);
  }

  getEventValue() {
    return this.event.target.value;
  }

  isOperation() {
    const check = this.getEventValue();
    return check == '+'
    || check == '-'
    || check == '/'
    || check == '*';
  }

}
