import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./components/pages/shop/ShopPage";
import HomePage from "./components/pages/homepage/HomePage";
import Header from "../src/components/header/header";
import firebase, { auth } from "./components/firebase/firebase";
import SignInAndSignUpPage from "../src/components/pages/signin-and-signup/signin-and-signup";
import "./App.css";

const HatsPage = () => (
  <div>
    <p1>Hats</p1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/Signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
