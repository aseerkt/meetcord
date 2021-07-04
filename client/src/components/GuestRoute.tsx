import { Redirect, Route, RouteProps } from 'react-router-dom';
import { useGuestCtx } from '../context/GuestContext';

type GuestRouteProps = RouteProps & {
  component: React.FC;
};

const GuestRoute: React.FC<GuestRouteProps> = ({
  component: Component,
  ...props
}) => {
  const { guest } = useGuestCtx();

  return (
    <Route
      {...props}
      render={() =>
        guest ? <Component /> : <Redirect to={{ pathname: '/' }} />
      }
    />
  );
};

export default GuestRoute;
