import { createContext, useState } from "react";
import { TRAFFIC_LIGHTS } from "../utils/constants";

export const TrafficControlContext = createContext({
  current_light: TRAFFIC_LIGHTS.green,
  pedestrian_request_status: false,
  countdown_timers: 10,
  CHANGE_LIGHT: () => {},
  REQUEST_CROSSING: () => {},
  RESET_TIMER: () => {},
  EMERGENCY_OVERRIDE: () => {},
});

export const TrafficControlContextProvider = ({ children }) => {
  const [currentLight, setCurrentLight] = useState(TRAFFIC_LIGHTS.green);
  const [pedestrianRequestStatus, setPedestrianRequestStatus] = useState(false);
  const [countDownTimer, setCountDownTimer] = useState(10);
  const [isEmergencyMode, setEmergencyMode] = useState(false);

  const emergencyOverRide = () => {
    setEmergencyMode((prev) => !prev);
    if (!isEmergencyMode) {
      setCurrentLight(TRAFFIC_LIGHTS.green);
      setCountDownTimer(Number.MAX_SAFE_INTEGER); // Keep the light green indefinitely
    } else {
      setCountDownTimer(countDownTimer);
      setCurrentLight(TRAFFIC_LIGHTS.green);
    }
  };

  return (
    <TrafficControlContext.Provider
      value={{
        current_light: currentLight,
        CHANGE_LIGHT: setCurrentLight,
        pedestrian_request_status: pedestrianRequestStatus,
        REQUEST_CROSSING: setPedestrianRequestStatus,
        countdown_timers: countDownTimer,
        EMERGENCY_OVERRIDE: emergencyOverRide,
        RESET_TIMER: setCountDownTimer,
      }}
    >
      {children}
    </TrafficControlContext.Provider>
  );
};
