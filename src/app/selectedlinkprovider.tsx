'use client'
// context/SelectedLinkContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface SelectedLinkContextType {
  selectedLink: string;
  setSelectedLink: (link: string) => void;
}

// Create the context
const SelectedLinkContext = createContext<SelectedLinkContextType | undefined>(undefined);

// Define the provider's props
interface SelectedLinkProviderProps {
  children: ReactNode;
}

// Create the provider component
export const SelectedLinkProvider: React.FC<SelectedLinkProviderProps> = ({ children }) => {
  const [selectedLink, setSelectedLink] = useState<string>('Dashboard');

  return (
    <SelectedLinkContext.Provider value={{selectedLink,setSelectedLink}}>
      {children}
    </SelectedLinkContext.Provider>
  );
};

// Custom hook to use the SelectedLinkContext
export const useSelectedLink = (): SelectedLinkContextType => {
  const context = useContext(SelectedLinkContext);
  if (!context) {
    throw new Error('useSelectedLink must be used within a SelectedLinkProvider');
  }
  return context;
};
