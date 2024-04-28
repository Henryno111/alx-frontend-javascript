/* eslin-disabled */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  };

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}

// Example usage:
const usd = new Currency('US Dollar', 'USD');
const price = new Pricing(100, usd);
console.log(price.displayFullPrice()); // Output: 100 US Dollar (USD)

const convertedAmount = Pricing.convertPrice(100, 0.85);
console.log(convertedAmount); // Output: 85
