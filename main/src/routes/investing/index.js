import { h } from "preact";
import style from "./style.css";
import FourPercentCalc from "../../components/widgets/investing/four-percent";

const Investing = () => (
  <div class={style.investing}>
    <h1>Investing</h1>
    <p>Useful calculators related to investing and retirement</p>
    <FourPercentCalc />
  </div>
);

export default Investing;