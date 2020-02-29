import { Strategy } from '../strategy';

export class AverageStrategy extends Strategy {
  constructor() {
    super();
    this.title = 'Покупка с использованием усренения';
    this.params = {
      V: {
        value: null,
        definition: 'Размер/объём ордера',
      },
      F: {
        value: null,
        definition: 'Комиссия биржи на покупку',
      },
      N: {
        value: null,
        definition: 'Количество дополнительных ордеров',
      },
    };
  }

  calculate() {
    const { V, F, N } = this.params;
    return V.value * (1 + F.value / 100) * (N.value + 1);
  }
}