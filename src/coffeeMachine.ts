import { Drink } from './drink';
import { notifyUser } from './utils/notifications';

export class CoffeeMachine {
  private orderCount = 0;

  public serve(drink: Drink, moneyInserted: number, loyaltyCard: boolean, currentHour: number): string {
    // Arrange/Validate
    if (drink.sugar > 5) {
      throw new Error('Too much sugar');
    }

    // Act: compute cost
    let cost = drink.basePrice;
    if (drink.size === 'medium') cost += 0.5;
    if (drink.size === 'large') cost += 1.0;
    if (drink.milk) cost += 0.2;
    if (drink.sugar > 2) cost += (drink.sugar - 2) * 0.1;
    if (currentHour >= 15 && currentHour < 17) cost = cost * 0.8;

    const nextOrderIndex = this.orderCount + 1;
    const qualifiesForFree = loyaltyCard && nextOrderIndex % 5 === 0 && drink.size !== 'large';
    if (qualifiesForFree) cost = 0;

    if (cost < 0 && !qualifiesForFree) {
      throw new Error('Invalid price');
    }

    if (moneyInserted < cost) {
      throw new Error('Not enough money');
    }

    // Assert serving (side-effect + message)
    this.orderCount++;
    const change = moneyInserted - cost;
    const serving = `Serving ${drink.name} (${drink.size})`;
    const message = change > 0 ? `${serving} with change ${change.toFixed(2)}` : serving;
    notifyUser(message);
    return message;
  }
}
