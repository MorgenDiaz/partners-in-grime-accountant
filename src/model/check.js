export default class Check {
  #deposits = [];

  constructor(taxPercentage, businessPercentage) {
    this.taxPercentage = taxPercentage;
    this.businessPercentage = businessPercentage;
  }

  addDeposit(amount) {
    this.#deposits.push(amount);
  }

  getGrossDepositAmount() {
    return this.#deposits.reduce((totalDeposit, deposit) => {
      return totalDeposit + deposit;
    });
  }

  #toPercentage = (wholePercentage) => wholePercentage / 100;

  #getPercentAmountOf = (percentage, amount) => percentage * amount;

  calculateCheck() {
    let payable = this.getGrossDepositAmount();

    let taxedAmount = this.#getPercentAmountOf(
      this.#toPercentage(this.taxPercentage),
      payable
    );

    payable -= taxedAmount;

    let businessAmount = this.#getPercentAmountOf(
      this.#toPercentage(this.businessPercentage),
      payable
    );

    payable -= businessAmount;

    return {
      grossDepositAmount: this.getGrossDepositAmount(),
      taxPercentage: this.taxPercentage,
      businessPercentage: this.businessPercentage,
      taxWithheld: taxedAmount,
      businessWitheld: businessAmount,
      payable: payable,
    };
  }
}
