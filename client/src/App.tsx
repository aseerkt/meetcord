import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import AlertProvider from './context/AlertContext';
import AuthProvider from './context/AuthContext';
import Dashboard from './pages/Dashboard';
import DM from './pages/DM';
import Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <AlertProvider>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Landing} />
            <PrivateRoute exact path='/channels/@me' component={Dashboard} />
            <PrivateRoute exact path='/channels/@me/:roomId' component={DM} />
          </Switch>
        </AuthProvider>
      </AlertProvider>
    </BrowserRouter>
  );
}

export default App;
