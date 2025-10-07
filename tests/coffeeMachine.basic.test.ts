import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe("CoffeeMachine basic", () => {
    it("serves small coffee with exact money", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 0, "small");

        const result = machine.serve(drink, 2, false, 10);

        expect(result).toBe("Serving Coffee (small)");
    });

    it("serves tea and returns change", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Tea", 1.5, false, 0, "small");

        const result = machine.serve(drink, 2, false, 10);

        expect(result).toBe("Serving Tea (small) with change 0.50");
    });

    it("applies milk surcharge", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, true, 0, "small");

        const result = machine.serve(drink, 2.2, false, 10);

        expect(result).toBe("Serving Coffee (small)");
    });

    it("applies sugar surcharge above 2 cubes", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 3, "small");

        const result = machine.serve(drink, 2.1, false, 10);

        expect(result).toBe("Serving Coffee (small)");
    });
});
