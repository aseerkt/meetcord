import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useAuthCtx } from '../context/AuthContext';

type PrivateRouteProps = RouteProps & {
  component: React.FC;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...props
}) => {
  const { user } = useAuthCtx();

  return (
    <Route
      {...props}
      render={() =>
        user ? <Component /> : <Redirect to={{ pathname: '/' }} />
      }
    />
  );
};

export default PrivateRoute;
