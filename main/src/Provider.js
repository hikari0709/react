import React, { useState, createContext } from 'react';

export const Context = createContext();

const text = 'Providerから受け取ったテキスト';

export const Provider = ({children}) => {
  const [state, setState] = useState(false);
  return <Context.Provider value={[state, setState]}>{children}</Context.Provider>;
}
