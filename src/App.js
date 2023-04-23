import { useState, useEffect } from "react";
import "./App.css";
import PrimarySearchAppBar from "./Components/Header/PrimarySearchAppBar"
import Main from "./Components/Main/Main"
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function App() {

  return (
    <div >
      <header><PrimarySearchAppBar/></header>
      <Box sx={{ flexGrow: 1 }} style={{ padding: "20px"}}>
      <Grid container spacing={2} >
      <Main />
      </Grid>
      </Box>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
