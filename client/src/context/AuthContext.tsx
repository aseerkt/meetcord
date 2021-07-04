import { createContext, useContext, useEffect, useState } from 'react';
import { getUserRequest } from '../api/auth';
import { User } from '../types/User';
import { useAlertDispatch } from './AlertContext';

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextType>({} as any);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const { setAlert } = useAlertDispatch();

  const fetchUser = async () => {
    try {
      const res = await getUserRequest();
      setUser(res.data);
      setAlert({
        message: `Welcome ${res.data.displayName}`,
        severity: 'success',
      });
    } catch (err) {
      setAlert({ message: 'Please log in to continue', severity: 'info' });
    }
  };

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthCtx() {
  return useContext(AuthContext);
}

export default AuthProvider;
