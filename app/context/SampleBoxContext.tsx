"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { MaterialItem, MATERIALS_DATA } from "../data/materialsData";

interface SampleBoxContextType {
  samples: MaterialItem[];
  addSample: (material: MaterialItem) => boolean;
  removeSample: (id: string) => void;
  clearSamples: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  toggleSample: (material: MaterialItem) => void;
  isSampleAdded: (id: string) => boolean;
  requestModalOpen: boolean;
  setRequestModalOpen: (open: boolean) => void;
}

const SampleBoxContext = createContext<SampleBoxContextType | undefined>(undefined);

export function SampleBoxProvider({ children }: { children: React.ReactNode }) {
  const [samples, setSamples] = useState<MaterialItem[]>([
    MATERIALS_DATA[0],
    MATERIALS_DATA[2],
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [requestModalOpen, setRequestModalOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("coro_sample_box");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setSamples(parsed);
        } else {
          setSamples([MATERIALS_DATA[0], MATERIALS_DATA[2]]);
        }
      } catch (e) {
        setSamples([MATERIALS_DATA[0], MATERIALS_DATA[2]]);
      }
    } else {
      setSamples([MATERIALS_DATA[0], MATERIALS_DATA[2]]);
    }
    setMounted(true);
  }, []);

  // Save to localStorage only after initial mount
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("coro_sample_box", JSON.stringify(samples));
    }
  }, [samples, mounted]);

  const addSample = (material: MaterialItem): boolean => {
    if (samples.find((s) => s.id === material.id)) {
      return false;
    }
    if (samples.length >= 4) {
      setIsDrawerOpen(true);
      return false;
    }
    setSamples((prev) => [...prev, material]);
    setIsDrawerOpen(true);
    return true;
  };

  const removeSample = (id: string) => {
    setSamples((prev) => prev.filter((item) => item.id !== id));
  };

  const clearSamples = () => {
    setSamples([]);
  };

  const isSampleAdded = (id: string) => {
    return samples.some((item) => item.id === id);
  };

  const toggleSample = (material: MaterialItem) => {
    if (isSampleAdded(material.id)) {
      removeSample(material.id);
    } else {
      addSample(material);
    }
  };

  return (
    <SampleBoxContext.Provider
      value={{
        samples,
        addSample,
        removeSample,
        clearSamples,
        isDrawerOpen,
        setIsDrawerOpen,
        toggleSample,
        isSampleAdded,
        requestModalOpen,
        setRequestModalOpen,
      }}
    >
      {children}
    </SampleBoxContext.Provider>
  );
}

export function useSampleBox() {
  const context = useContext(SampleBoxContext);
  if (!context) {
    throw new Error("useSampleBox must be used within a SampleBoxProvider");
  }
  return context;
}
