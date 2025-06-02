'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type EcoContextType = {
  ecoPoints: number;
  addEcoPoints: (amount: number) => void;
  resetEcoPoints: () => void;
};

const EcoContext = createContext<EcoContextType | undefined>(undefined);

export function useEco() {
  const context = useContext(EcoContext);
  if (!context) throw new Error("useEco must be used within EcoProvider");
  return context;
}

export function EcoProvider({ children }: { children: ReactNode }) {
  const [ecoPoints, setEcoPoints] = useState(0);

  useEffect(() => {
    const storedPoints = localStorage.getItem("ecoPoints");
    if (storedPoints) setEcoPoints(Number(storedPoints));
  }, []);

  useEffect(() => {
    localStorage.setItem("ecoPoints", ecoPoints.toString());
  }, [ecoPoints]);

  function addEcoPoints(points: number) {
    setEcoPoints((prev) => {
      const newPoints = prev + points;
      console.log("Eco points updated:", newPoints);
      return newPoints;
    });
  }

  const resetEcoPoints = () => {
    setEcoPoints(0);
  };

  return (
    <EcoContext.Provider value={{ ecoPoints, addEcoPoints, resetEcoPoints }}>
      {children}
    </EcoContext.Provider>
  );
}
