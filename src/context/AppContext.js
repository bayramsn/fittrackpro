import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    profile: {
      gender: null,
      age: null,
      height: null,
      currentWeight: null,
      goalWeight: null,
      goal: null,
      activityLevel: null,
      environment: null,
      daysPerWeek: 4,
      nutritionType: 'normal',
      sleepHours: 8,
      injuries: [],
    },
    onboardingComplete: false,
    isAuthenticated: false,
  });

  const [dailyStats, setDailyStats] = useState({
    calories: { goal: 2300, consumed: 0 },
    protein: { goal: 160, consumed: 0 },
    carbs: { goal: 250, consumed: 0 },
    fat: { goal: 70, consumed: 0 },
    water: { goal: 2500, consumed: 0 },
    steps: { goal: 10000, current: 0 },
  });

  const updateProfile = useCallback((data) => {
    setUser((prev) => ({
      ...prev,
      profile: { ...prev.profile, ...data },
    }));
  }, []);

  const setOnboardingComplete = useCallback((status) => {
    setUser((prev) => ({ ...prev, onboardingComplete: status }));
  }, []);

  const login = useCallback(() => {
    setUser((prev) => ({ ...prev, isAuthenticated: true }));
  }, []);

  const logWater = useCallback((amount) => {
    setDailyStats((prev) => ({
      ...prev,
      water: { ...prev.water, consumed: prev.water.consumed + amount },
    }));
  }, []);

  const value = {
    user,
    dailyStats,
    updateProfile,
    setOnboardingComplete,
    login,
    logWater,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
