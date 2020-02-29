import { Strategy } from '../strategy';

export class ArbitrageStrategy extends Strategy {
  constructor() {
    super();
    this.title = 'Арбитражная сделка';
    this.params = {
      V: {
        value: null,
        definition: 'Размер/объём ордера',
      },
      F: {
        value: null,
        definition: 'Комиссия биржи на покупку',
      },
      F1: {
        value: null,
        definition: 'Комиссия биржи 1 на вывод средств',
      },
      F2: {
        value: null,
        definition: 'Комиссия биржи 2 на продажу',
      },
    };
  }

  calculate() {
    const { V, F, F1, F2 } = this.params;
    return V.value * (1 + F.value / 100) * (1 + F1.value / 100) * (1 + F2.value / 100);
  }
}