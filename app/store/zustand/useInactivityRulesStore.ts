import { create } from "zustand";

interface InactivityRulesStore {
  globalAutomation: boolean;
  simulatorScenario: string;
  simulatorTargetUser: string;

  setGlobalAutomation: (value: boolean) => void;
  setSimulatorScenario: (value: string) => void;
  setSimulatorTargetUser: (value: string) => void;
}

export const useInactivityRulesStore = create<InactivityRulesStore>((set) => ({
  globalAutomation: false,
  simulatorScenario: "Select Status",
  simulatorTargetUser: "Select Status",

  setGlobalAutomation: (value) => set({ globalAutomation: value }),
  setSimulatorScenario: (value) => set({ simulatorScenario: value }),
  setSimulatorTargetUser: (value) => set({ simulatorTargetUser: value }),
}));