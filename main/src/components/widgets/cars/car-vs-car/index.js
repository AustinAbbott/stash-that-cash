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
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          purchase price:
          <input
            type="text"
            placeHolder="purchase price"
            value={this.state.purchasePrice1}
            onChange={this.handleChange}
            name="purchasePrice1"
          ></input>
        </label>
        <br></br>
        <label>
          miles:
          <input
            placeHolder="miles"
            type="text"
            placeHolder="purchase price"
            value={this.state.miles1}
            onChange={this.handleChange}
            name="miles1"
          ></input>
        </label>
        <br></br>
        <label>
          estimated insurance
          <input
            placeHolder="estimated insurance"
            type="text"
            placeHolder="purchase price"
            value={this.state.estimatedInsurance1}
            onChange={this.handleChange}
            name="estimatedInsurance1"
          ></input>
        </label>
        <br></br>
        <label>
          sales tax
          <input
            placeHolder="sales tax"
            type="text"
            placeHolder="purchase price"
            value={this.state.salesTax1}
            onChange={this.handleChange}
            name="salesTax1"
          ></input>
        </label>
        <br></br>
        <label>
          annual maintenance
          <input
            placeHolder="annual maintenance"
            type="text"
            placeHolder="purchase price"
            value={this.state.annualMaintenance1}
            onChange={this.handleChange}
            name="annualMaintenance1"
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
            type="text"
            placeHolder="purchase price"
            value={this.state.purchasePrice2}
            onChange={this.handleChange}
            name="purchasePrice2"
          ></input>
        </label>
        <br></br>
        <label>
          miles:
          <input
            placeHolder="miles"
            type="text"
            placeHolder="purchase price"
            value={this.state.miles2}
            onChange={this.handleChange}
            name="miles2"
          ></input>
        </label>
        <br></br>
        <label>
          estimated insurance
          <input
            placeHolder="estimated insurance"
            type="text"
            placeHolder="purchase price"
            value={this.state.estimatedInsurance2}
            onChange={this.handleChange}
            name="estimatedInsurance2"
          ></input>
        </label>
        <br></br>
        <label>
          sales tax
          <input
            placeHolder="sales tax"
            type="text"
            placeHolder="purchase price"
            value={this.state.salesTax2}
            onChange={this.handleChange}
            name="salesTax2"
          ></input>
        </label>
        <br></br>
        <label>
          annual maintenance
          <input
            placeHolder="annual maintenance"
            type="text"
            placeHolder="purchase price"
            value={this.state.annualMaintenance2}
            onChange={this.handleChange}
            name="annualMaintenance2"
          ></input>
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CarVsCar;
