import { Strategy } from '../strategy';

export class SimpleStrategy extends Strategy {
  constructor() {
    super();
    this.title = 'Простая покупка с учётом комиссии';
    this.params = {
      V: {
        value: null,
        definition: 'Размер/объём ордера',
      },
      F: {
        value: null,
        definition: 'Комиссия биржи на покупку',
      },
    };
  }

  calculate() {
    const { V, F } = this.params;
    return V.value * (1 + F.value / 100);
  }
}