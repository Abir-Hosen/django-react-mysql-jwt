import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
import { setMsg, clearState, checkRefresh } from './common/redux/resources/authResources';
import { Videos, Registration, Login, Payment, AdminRoles, FileData } from "./common/components/pages"

import './App.css';

function App() {

  const dispatch = useDispatch()
  const history = useHistory();
  const { authInfo } = useSelector((state) => state)

  // dispatch(checkRefresh({
  //   refresh: authInfo.logger.refresh,
  // }))

  if (authInfo.msg.length !== 0) {
    alert(authInfo.msg)
    dispatch(setMsg(''))
  }

  const logout = () => {
    console.log('logout', authInfo)
    dispatch(clearState())
  }

  const checkRefreshApi = () => {
    dispatch(checkRefresh({refresh: 'Bearer '+authInfo.logger.refresh}))
  }

  console.log(window.location.pathname)


  if (authInfo.logger && authInfo.logger.user) {
    if (window.location.pathname == "/myapp/verify") {
      history.push('/')
    }
  } else {
    history.push('/verify')
  }

  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>
            <li>
              <Link to="/payment-and-membership">Payment And Membership</Link>
            </li>
            <li>
              <Link to="/admin-and-roles">Admin And Roles</Link>
            </li>
            <li>
              <Link to="/upload-and-list-data">Upload And List data</Link>
            </li>
            <li>
              <Link to="/verify">login</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>

            {/* <button onClick={checkRefreshApi}>checkrefresh</button> */}
          </ul>
        </nav>
        <br /><hr /><br /><br />

        <Switch>
          <Route exact path={["/", "/videos"]}>
            <Videos />
          </Route>

          <Route exact path="/verify">
            <Login />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          {authInfo.logger.user ?
            <>
              <Route exact path="/payment-and-membership" component={Payment} />
              <Route exact path="/admin-and-roles">
                <AdminRoles />
              </Route>
              <Route exact path="/upload-and-list-data">
                <FileData />
              </Route>
            </>
            :
            ''
          }
        </Switch>
      </div>

    </div>
  );
}

export default App;
