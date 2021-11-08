import { h } from "preact";
import style from "./style.css";

const Home = () => (
  <div class={style.car}>
    <h1>Car</h1>
    <p>This is the Car component.</p>
    
    <input placeHolder="cost"></input>
    
  </div>
);

export default Home;
