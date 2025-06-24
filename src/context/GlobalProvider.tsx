// context/GlobalProvider.tsx
'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import LoadingScreen from '../app/components/LoadingScreen';

export const GlobalContext = createContext<any>(null);

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/Asset/Data.json')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load JSON:', err);
        setLoading(false); // Still hide loader after timeout or error
      });
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <GlobalContext.Provider value={data}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
