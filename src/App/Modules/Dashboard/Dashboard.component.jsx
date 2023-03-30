import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Orders from "./components/Orders";
import Card from "../../Common/UIComponents/Card";
import { CARD_DATA } from "./constants";
import Overview from "./components/Overview";
import Draggable from "react-draggable";

const Dashboard = () => {
  return (
    <>
      {CARD_DATA.map((items) => {
        return (
          <Draggable key={items.key}>
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240,
                }}
              >
                <Card data={items} />
              </Paper>
            </Grid>
          </Draggable>
        );
      })}
      <Draggable>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 440,
            }}
          >
            <Overview />
          </Paper>
        </Grid>
      </Draggable>
      <Draggable>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Draggable>
    </>
  );
};

export default Dashboard;
