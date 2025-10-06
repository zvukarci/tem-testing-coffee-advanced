import { Drink } from '../Drink';
import { CoffeeMachine } from '../CoffeeMachine';

describe("CoffeeMachine", () => {
  it("should serve coffee if exact money inserted", () => {
    const machine = new CoffeeMachine();
    const drink = new Drink("Coffee", 2, false, 0, "small");
    const loyaltyCard = false;

    const result= machine.serve(drink, 2, loyaltyCard, 10)

    expect(result).toBe("Serving Coffee (small)");
  });

  it("drinks are 20percent cheaper during happy hour", () => {
    const machine = new CoffeeMachine();

    const drink = new Drink("Coffee", 2, false, 0, "large");
    const loyaltyCard = false;


    const result = machine.serve(drink, 2.4, loyaltyCard, 16)

    expect(result).toBe("Serving Coffee (large)");
  });
});
