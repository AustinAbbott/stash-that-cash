import { h } from "preact";
import style from "./style.css";
import CarVsCar from "../../components/widgets/cars/car-vs-car";

const Cars = () => (
  <div class={style.carsPage}>
    <h1>Cars</h1>
    <p>Useful calculators for car buying, leasing, and related car expenses</p>
    <CarVsCar />
    
  </div>
);

export default Cars;
