import { h } from "preact";
import style from "./style.css";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/List";

import Income from "../../components/widgets/dashboard/income";

const Dashboard = () => (
  <div class={style.home}>
    <h1>Dashboard</h1>
    <p>Get a picture of your early retirement</p>
    <Grid container spacing={2}>
      <Grid item xs={12} md={8} lg={4}>
        <Item style={{ backgroundColor: "red" }}><Income /></Item>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Item style={{ backgroundColor: "blue" }}>I also am me!</Item>
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Item style={{ backgroundColor: "green" }}>Wait, so am I</Item>
      </Grid>
      <Grid item xs={12} md={8} lg={4}>
        <Item style={{ backgroundColor: "orange" }}>I'm the only me around here</Item>
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;
