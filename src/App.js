import React from "react";

import LandingPage from "./pages/LandingPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PetDetailPage from "./pages/PetDetailPage";
import PetListPage from "./pages/PetListPage";
import PetListMinesPage from "./pages/PetListMinesPage";
import PetRegisterPage from "./pages/PetRegisterPage";
import PetReportPage from "./pages/PetReportPage";
import PetUpdatePage from "./pages/PetUpdatePage";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MyAdopcionesPage from "./pages/MyAdopcionesPage";

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
              <Route exact path="/pet/myadopts" component={MyAdopcionesPage}/>
              <Route exact path="/pet/mylist" component={PetListMinesPage}/>
              <Route exact path="/pet/register" component={PetRegisterPage}/>
              <Route exact path="/pet/adopt" component={PetReportPage}/>
              <Route exact path="/pet/update" component={PetUpdatePage}/>

          </Switch>
        </Router>

    )
  }
}

export default App;
