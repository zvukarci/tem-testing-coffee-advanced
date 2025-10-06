export type Size = 'small' | 'medium' | 'large';

export class Drink {
  constructor(
    public name: string,
    public basePrice: number,
    public milk: boolean,
    public sugar: number,
    public size: Size
  ) {}
}
