import { h, Component } from "preact";
import style from "./style.css";

class FourPercentCalc extends Component {
  state = { value: 0, expenseTotal: 0, retirementTotal: 0 };

  constructor() {
    super();
    this.state = {
      value: 0,
      expenseTotal: this.formatCurrency(0),
      retirementTotal: this.formatCurrency(0),
    };
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
      <div class={style.container}>
        <div class={style.fourpercent}>
          <h1>Four Percent Rule</h1>
          <p>A simple way to calculate how much you'll need in retirement</p>
          <label>How much do you need (annually) in retirement?</label>
          <br></br>
          <br></br>
          <input
            type="number"
            value={value}
            onInput={this.onInput}
            placeHolder="annual spending"
          />
          <br></br>
          <br></br>
          <p>
              If your annual expenses are <b>{expenseTotal}</b>, you need <b>{retirementTotal}</b> to retire
          </p>
          <br></br>
          <h4>About The Four Percent Rule</h4>
          <p>The four percent rule is the concept that, if you have your money invested well, you can pull out 4% anually and never run out of money.</p>
        </div>
      </div>
    );
  }
}

export default FourPercentCalc;

