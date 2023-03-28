import React from "react";
import { CARD_DATA } from "../Dashboard/constants";
import Draggable from "react-draggable";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "../../Common/UIComponents/Card";
function Draggables() {
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
    </>
  );
}

export default Draggables;
