import { h, Component } from "preact";
import style from "./style.css";

class FourPercentCalc extends Component {
  state = { value: 0, expenseTotal: 0, retirementTotal: 0 };

  constructor() {
    super();
    this.state = { value: 0, expenseTotal: this.formatCurrency(0), retirementTotal: this.formatCurrency(0) };
  }

  onInput = (e) => {
    const { value } = e.target;
    const total = value * 25;

    const retirementCurrencyTotal = this.formatCurrency(total);
    const expenseCurrencyTotal = this.formatCurrency(value);

    this.setState({
      value: value,
      expenseTotal: expenseCurrencyTotal,
      retirementTotal: retirementCurrencyTotal,
    });
  };

  formatCurrency = (num) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(num);
  };

  render(_, { value, expenseTotal, retirementTotal }) {
    return (
      <div class={style.fourpercent}>
        <h1>Four Percent Rule</h1>
        <p>A simple way to calculate how much you'll need in retirement</p>
        <label>How much do you plan to spend annually?</label>
        <br></br>
        <input
          type="number"
          value={value}
          onInput={this.onInput}
          placeHolder="annual spending"
        />
        <p>
          If your annual expenses are {expenseTotal}, you need {retirementTotal} to retire
        </p>
      </div>
    );
  }
}

export default FourPercentCalc;

// Financial Independence enthusiasts will have the closest-to-correct answer: Take your annual spending, and multiply it by somewhere between 20 and 30. That’s your retirement number.

// To apply it in real life, just take your annual spending level, and multiply it by 25. That’s how much you need to retire, at the most. A $25,000 spender like me needs $625,000. I’ve got more than that, plus various safety margins in the lifestyle, so all is good.
