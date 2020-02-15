class CalculadoraV2 {
  constructor(id) {
    this.value = 0;
    this.aux = 0;
    this.op = '';
    this.id = id;
    this.event;
  }

  destroy() {
    this.value = 0;
    this.aux = 0;
    this.op = '';
    this.setValueById();
  }

  action(event) {
    this.event = event;
    const evValue = this.event.target.value
    if (evValue == '+'
      || evValue == '-'
      || evValue == '*'
      || evValue == '/') {
      this.operationPress();
      this.setValueById();
    } else {
      this.numberPress();
      this.setValueById();
    }
  }

  operationPress() {
    const evValue = this.event.target.value;
    switch (evValue) {
      case '-':
        this.minusOp();
        break;
      case '+':
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

  setValueById() {
    document.getElementById(this.id).value = this.value;
  }

  numberPress() {
    if (this.value == 0) {
      this.value = this.event.target.value;
    } else if (this.value < 999999999 && this.value > -999999999) {
      this.value = this.value + this.event.target.value;
    } else {
      alert('CalculadoraV2/numberPress');
    }
  }

  isNull(value) {
    return value == ''
      || value.size == 0
      || value == undefined
      || value == null;
  }

  exchangeValues() {
    this.aux = this.value;
    this.value = 0;
  }
  //todo
  minusOp() {
    if (!this.isNull(this.op)) {
      this.op = '-';
      this.exchangeValues();
    } else {
      this.value = this.aux - this.value;
      this.aux = '';
    }
  }

}
