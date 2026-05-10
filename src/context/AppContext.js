import React, { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState({
    profile: {
      name: 'Bayram',
      gender: null,
      age: null,
      height: null,
      currentWeight: null,
      goalWeight: null,
      goal: null,
      activityLevel: null,
      environment: null,
      daysPerWeek: 4,
      workoutDuration: 60,
      availableDays: [],
      nutritionType: 'normal',
      sleepHours: 8,
      injuries: [],
      level: 'intermediate',
      targetMuscles: [],
    },
    onboardingComplete: false,
    isAuthenticated: false,
    isPremium: false,
    streak: 5,
    xp: 1250,
    level: 12,
  });

  const [dailyStats, setDailyStats] = useState({
    calories: { goal: 2300, consumed: 1450 },
    protein: { goal: 160, consumed: 92 },
    carbs: { goal: 250, consumed: 120 },
    fat: { goal: 70, consumed: 45 },
    water: { goal: 2500, consumed: 1250 },
    steps: { goal: 10000, current: 7420 },
    tasks: [
      { id: 1, title: 'Antrenmanı tamamla', completed: false },
      { id: 2, title: '2L su iç', completed: true },
      { id: 3, title: 'Protein hedefini tamamla', completed: false },
      { id: 4, title: '30 dk yürüyüş yap', completed: true },
    ],
  });

  const [workoutHistory, setWorkoutHistory] = useState([]);
  const [personalRecords, setPersonalRecords] = useState([
    { exercise: 'Bench Press', value: '100 kg', date: '2024-05-01' },
    { exercise: 'Squat', value: '140 kg', date: '2024-04-25' },
  ]);

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

  const toggleTask = useCallback((taskId) => {
    setDailyStats((prev) => ({
      ...prev,
      tasks: prev.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  }, []);

  const value = {
    user,
    dailyStats,
    workoutHistory,
    personalRecords,
    updateProfile,
    setOnboardingComplete,
    login,
    logWater,
    toggleTask,
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
