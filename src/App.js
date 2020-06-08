import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./components/pages/shop/ShopPage";
import HomePage from "./components/pages/homepage/HomePage";
import Header from "../src/components/header/header";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebase";
import SignInAndSignUpPage from "../src/components/pages/signin-and-signup/signin-and-signup";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  z;

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
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
