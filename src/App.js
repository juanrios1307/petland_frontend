import React from "react";

import LandingPage from "./pages/LandingPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import PetDetailPage from "./pages/PetDetailPage";
import PetListPage from "./pages/PetListPage";
import PetRegisterPage from "./pages/PetRegisterPage";
import PetUpdatePage from "./pages/PetUpdatePage";
import RefugeRatingPage from "./pages/RefugeRatingPage";
import RefugeRegisterPage from "./pages/RefugeRegisterPage";
import RefugeUpdatePage from "./pages/RefugeUpdatePage";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends React.Component {
  render() {
    return(

        <Router>
          <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/signup" component={RegisterPage}/>

              <Route exact path="/pet/detail" component={PetDetailPage}/>
              <Route exact path="/pet/list" component={PetListPage}/>
              <Route exact path="/pet/register" component={PetRegisterPage}/>
              <Route exact path="/pet/update" component={PetUpdatePage}/>

              <Route exact path="/refuge/rating" component={RefugeRatingPage}/>
              <Route exact path="/refuge/register" component={RefugeRegisterPage}/>
              <Route exact path="/refuge/update" component={RefugeUpdatePage}/>



          </Switch>
        </Router>

    )
  }
}

export default App;
