import { BrowserRouter, Switch, Route } from 'react-router-dom';
import GuestRoute from './components/GuestRoute';
import PrivateRoute from './components/PrivateRoute';
import AlertProvider from './context/AlertContext';
import AuthProvider from './context/AuthContext';
import GuestProvider from './context/GuestContext';
import Dashboard from './pages/Dashboard';
import DM from './pages/DM';
import GuestRoom from './pages/GuestRoom';
import GuestLogin from './pages/GuestLogin';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <GuestProvider>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact path='/guest-login' component={GuestLogin} />
              <PrivateRoute exact path='/channels/@me' component={Dashboard} />
              <PrivateRoute exact path='/channels/@me/:roomId' component={DM} />
              <GuestRoute exact path='/channels/@guest' component={GuestRoom} />
            </Switch>
          </GuestProvider>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
