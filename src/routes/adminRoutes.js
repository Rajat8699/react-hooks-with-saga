import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import Header from "../components/header";
const AdminRoute = ({ isLoggedin, component: Component, rest }) => {
  return (
    <>
      {/* <Header /> */}
      <Route
        {...rest}
        render={(props) =>
          isLoggedin ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

const mapStateAuth = (state) => {
  return {
    isLoggedin: state.auth.token,
  };
};

export default connect(mapStateAuth)(AdminRoute);
