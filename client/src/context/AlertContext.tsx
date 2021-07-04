import { createContext, useContext, useReducer } from 'react';
import Alert from '../shared/Alert';

export interface AlertState {
  message?: string;
  severity?: 'error' | 'success' | 'info';
}

interface AlertAction {
  type: 'SET_ALERT' | 'CLEAR_ALERT';
  payload?: AlertState;
}

interface AlertDispatchType {
  setAlert: (args: AlertState) => void;
  clearAlert: () => void;
}

const alertReducer = function (
  state: AlertState,
  action: AlertAction,
): AlertState {
  switch (action.type) {
    case 'SET_ALERT':
      return action.payload!;
    case 'CLEAR_ALERT':
      return {};
    default:
      return state;
  }
};

const AlertContext = createContext<AlertState>({});
const AlertDispatch = createContext<AlertDispatchType>({} as any);

const AlertProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, {});

  function setAlert(args: AlertState) {
    dispatch({ type: 'SET_ALERT', payload: args });
  }

  function clearAlert() {
    dispatch({ type: 'CLEAR_ALERT' });
  }

  return (
    <AlertContext.Provider value={state}>
      <AlertDispatch.Provider value={{ setAlert, clearAlert }}>
        {children}
        <Alert />
      </AlertDispatch.Provider>
    </AlertContext.Provider>
  );
};

export const useAlertState = () => useContext(AlertContext);
export const useAlertDispatch = () => useContext(AlertDispatch);

export default AlertProvider;
