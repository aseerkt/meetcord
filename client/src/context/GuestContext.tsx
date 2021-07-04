import React, { createContext, useContext, useState } from 'react';

interface Guest {
  username?: string;
  avatar?: string;
}

type GuestContextType = {
  guest: Guest | null;
  setGuest: React.Dispatch<React.SetStateAction<Guest | null>>;
};

const GuestContext = createContext<GuestContextType>({} as any);

const GuestProvider: React.FC = ({ children }) => {
  const [guest, setGuest] = useState<Guest | null>(null);

  return (
    <GuestContext.Provider value={{ guest, setGuest }}>
      {children}
    </GuestContext.Provider>
  );
};

export function useGuestCtx() {
  return useContext(GuestContext);
}

export default GuestProvider;
