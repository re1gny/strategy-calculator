export class Strategy {
  constructor() {
    this.title = null;
    this.params = null;
  }

  getParam(param) {
    return this.params && this.params[param];
  }

  setParam(param, value) {
    this.params = {
      ...this.params,
      [param]: {
        ...this.params[param],
        value,
      }
    };
    return this;
  }

  calculate() {
    return 0;
  }

  get result() {
    return this.calculate();
  }
}