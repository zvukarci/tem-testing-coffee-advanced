import { CoffeeMachine } from '../src/coffeeMachine';
import { Drink } from '../src/drink';

describe('Duplication vs helpers in tests', () => {
  it('duplicate but readable: serves coffee', () => {
    const machine = new CoffeeMachine();
    const drink = new Drink('Coffee', 2, false, 0, 'small');

    const result = machine.serve(drink, 2, false, 12);

    expect(result).toBe('Serving Coffee (small)');
  });

  it('duplicate but readable: serves tea', () => {
    const machine = new CoffeeMachine();
    const drink = new Drink('Tea', 1.5, false, 0, 'small');

    const result = machine.serve(drink, 2, false, 12);

    expect(result).toBe('Serving Tea (small) with change 0.50');
  });

  function makeSmall(name: string, price: number) {
    return new Drink(name, price, false, 0, 'small');
  }

  it('helper version: serves coffee', () => {
    const machine = new CoffeeMachine();
    const drink = makeSmall('Coffee', 2);

    const result = machine.serve(drink, 2, false, 12);

    expect(result).toBe('Serving Coffee (small)');
  });
});
