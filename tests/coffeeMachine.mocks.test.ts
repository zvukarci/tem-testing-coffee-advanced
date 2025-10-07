import { CoffeeMachine } from "../src/coffeeMachine";
import { Drink } from "../src/drink";
import * as notifications from "../src/utils/notifications";

describe("CoffeeMachine notifications (mocks)", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it("serves small coffee with exact money", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee", 2, false, 0, "small");
        const notifyUserSpy = jest
            .spyOn(notifications, "notifyUser")
            .mockImplementation(jest.fn());

        machine.serve(drink, 2, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
        expect(notifyUserSpy).toHaveBeenCalledWith("Serving Coffee (small)");
    });

    it("serves small coffee with exact money Other", () => {
        const machine = new CoffeeMachine();
        const drink = new Drink("Coffee Other", 2, false, 0, "small");
        const notifyUserSpy = jest
            .spyOn(notifications, "notifyUser")
            .mockImplementation(jest.fn());

        machine.serve(drink, 2, false, 10);

        expect(notifyUserSpy).toHaveBeenCalled();
        expect(notifyUserSpy).toHaveBeenCalledTimes(1);
        expect(notifyUserSpy).toHaveBeenCalledWith(
            "Serving Coffee Other (small)"
        );
    });
});
