import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";

describe("CoffeeMachine errors", () => {
    it("applies sugar surcharge above 2 cubes", () => {
        const machine = new CoffeeMachine();
        const sugar = 851;
        const drink = new Drink("Coffee", 2, false, sugar, "small");

        const wrapper = () => machine.serve(drink, 2.1, false, 10);

        expect(wrapper).toThrow("Too much sugar");
    });

    it("applies sugar surcharge above 2 cubes", () => {
        const machine = new CoffeeMachine();
        const sugar = 851;
        const drink = new Drink("Coffee", 2, false, sugar, "small");

        try {
            machine.serve(drink, 2.1, false, 10);
        } catch (error) {
            expect(error).toEqual(new Error("Too much sugar"));
        }
    });

    it("throw not enough money error", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 0, "small");

        try {
            machine.serve(drink, 1.5, false, 10);
        } catch (error) {
            expect(error).toEqual(new Error("Not enough money"));
        }
    });
});
