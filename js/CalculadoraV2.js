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
    if (this.event.target.value == '+'
      || this.event.target.value == '-'
      || this.event.target.value == '*'
      || this.event.target.value == '/') {
      this.destroy();
    } else {
      this.numberPress();
      this.setValueById();
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

}
