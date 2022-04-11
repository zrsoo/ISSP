import * as React from 'react';
import { Suspense } from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Login from './components/RegistrationSystem/Login';
import Signup from './components/RegistrationSystem/Signup';
import Home from './Home';
import { Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/Logout/Logout';
import AuthenticationController from './controllers/AuthenticationController';

export default function App() {
  const [user, setUser] = React.useState();
  
  React.useEffect(() => {
    AuthenticationController.getUser().then((response) => {
      setUser(response);
    console.log(response)});
  } ,[]);
  
  return (
      <div className="App">
        <Suspense fallback={"Loading..."}>
          <Navbar user={user} />
          <Route exact path="/home" component={() => <Home user={user} />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/logout" component={Logout} />
        </Suspense>
      </div>
  )
}