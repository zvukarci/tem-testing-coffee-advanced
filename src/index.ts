import { CoffeeMachine } from './coffeeMachine';
import { Drink } from './drink';

const machine = new CoffeeMachine();
const drink = new Drink('Coffee', 2, true, 2, 'small');
const msg = machine.serve(drink, 2.5, false, 14);
console.log(msg);
