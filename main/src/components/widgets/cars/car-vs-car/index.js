import { h, Component } from "preact";
import style from "./style.css";

class CarVsCar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log("handleChange");
    console.log(event.target.name);

    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("handleSubmit");
    event.preventDefault();

    let carTotal1 =
      this.state.purchasePrice1 * this.state.salesTax1 +
      this.state.estimatedInsurance1 +
      this.state.annualMaintenance1;

    let carTotal2 =
      this.state.purchasePrice2 * this.state.salesTax2 +
      this.state.estimatedInsurance2 +
      this.state.annualMaintenance2;

    console.log(carTotal1);
    console.log(carTotal1 === carTotal2);
  }

  render() {
    return (
      <div class={style.CarVsCar}>
        <form onSubmit={this.handleSubmit}>
        <h2>Car 1</h2>
          <label>
            purchase price:
            <input
              type="number"
              placeHolder="purchase price"
              value={this.state.purchasePrice1}
              onChange={this.handleChange}
              name="purchasePrice1"
              required
            ></input>
          </label>
          <br></br>
          <label>
            miles:
            <input
              placeHolder="miles"
              type="number"
              placeHolder="100,000"
              value={this.state.miles1}
              onChange={this.handleChange}
              name="miles1"
              required
            ></input>
          </label>
          <br></br>
          <label>
            estimated insurance
            <input
              placeHolder="estimated insurance"
              type="number"
              placeHolder="$150 / month "
              value={this.state.estimatedInsurance1}
              onChange={this.handleChange}
              name="estimatedInsurance1"
              required
            ></input>
          </label>
          <br></br>
          <label>
            sales tax
            <input
              placeHolder="sales tax"
              type="number"
              placeHolder="2.5%"
              value={this.state.salesTax1}
              onChange={this.handleChange}
              name="salesTax1"
              required
            ></input>
          </label>
          <br></br>
          <label>
            annual maintenance
            <input
              placeHolder="annual maintenance"
              type="number"
              placeHolder="$1500"
              value={this.state.annualMaintenance1}
              onChange={this.handleChange}
              name="annualMaintenance1"
              required
            ></input>
          </label>
          <br></br>
          <label>
            how many years do you plan to own the car?
            <input
              placeHolder="ownershipYears"
              type="number"
              placeHolder="5"
              value={this.state.ownershipYears}
              onChange={this.handleChange}
              name="ownershipYears"
              required
            ></input>
          </label>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h2>Car 2</h2>
          <label>
            purchase price:
            <input
              type="number"
              placeHolder="purchase price"
              value={this.state.purchasePrice2}
              onChange={this.handleChange}
              name="purchasePrice2"
              required
            ></input>
          </label>
          <br></br>
          <label>
            miles:
            <input
              placeHolder="miles"
              type="number"
              placeHolder="purchase price"
              value={this.state.miles2}
              onChange={this.handleChange}
              name="miles2"
              required
            ></input>
          </label>
          <br></br>
          <label>
            estimated insurance
            <input
              placeHolder="estimated insurance"
              type="number"
              placeHolder="purchase price"
              value={this.state.estimatedInsurance2}
              onChange={this.handleChange}
              name="estimatedInsurance2"
              required
            ></input>
          </label>
          <br></br>
          <label>
            sales tax
            <input
              placeHolder="sales tax"
              type="number"
              placeHolder="purchase price"
              value={this.state.salesTax2}
              onChange={this.handleChange}
              name="salesTax2"
              required
            ></input>
          </label>
          <br></br>
          <label>
            annual maintenance
            <input
              placeHolder="annual maintenance"
              type="number"
              placeHolder="purchase price"
              value={this.state.annualMaintenance2}
              onChange={this.handleChange}
              name="annualMaintenance2"
              required
            ></input>
          </label>
          <br></br>
          <label>
            how many years do you plan to own the car?
            <input
              placeHolder="ownershipYears2"
              type="number"
              placeHolder="5"
              value={this.state.ownershipYears}
              onChange={this.handleChange}
              name="ownershipYears2"
              required
            ></input>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CarVsCar;
