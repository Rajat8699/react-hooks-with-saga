// import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import { connect } from "react-redux";
import { login } from "./services/actions/auth";
import { bindActionCreators } from "redux";
// import AdminRoute from './routes/adminRoutes';
import Home from './containers/Home/home';

const App = (props, { location }) => {
  if (props.unauthorized.unauthorized === true) {
    props.history.push("/auth/login");
    props.login();
  }
  return (
    <Switch>
      <Route exact location={location} path="/" component={Home} />
      {/* <AdminRoute location ={location} path="/dashboard" component={Dashboard}/> */}
    </Switch>
  );
};

const mapDispatch = (dispatch) => {
  return bindActionCreators(
    {
      login,
    },
    dispatch
  );
};

const mapGetState = (state) => {
  return {
    unauthorized: state.auth,
  };
};
export default connect(mapGetState, mapDispatch)(App);