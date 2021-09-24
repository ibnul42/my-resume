import { Container, Grid } from "@mui/material";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <Container className="top_60" style={{ backgroundColor: "orange" }}>
      <Grid container spacing={5}>
        <Grid
          style={{ marginRight: "20px" }}
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
        >
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-container container_shadow">              
              <Switch>
                <Route path={"/portfolio"} >
                  <Portfolio />
                </Route>
                <Route path={"/"}>
                  <Resume />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
