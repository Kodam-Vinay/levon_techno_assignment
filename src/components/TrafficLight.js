import { useContext, useEffect, useRef, useState } from "react";
import GreenLight from "./GreenLight";
import RedLight from "./RedLight";
import YellowLight from "./YellowLight";
import EmptyLight from "./EmptyLight";
import { TrafficControlContext } from "../context/TrafficControlContext";
import { BsPersonStanding } from "react-icons/bs";
import { FaWalking } from "react-icons/fa";

import {
  ALL_LIGHT_DELAYS_DURATIONS,
  LIGHT_CHANGE_DELAY,
  TRAFFIC_LIGHTS,
} from "../utils/constants";
import PedestrianButton from "./PedestrianButton";

const TrafficLight = () => {
  const {
    current_light,
    CHANGE_LIGHT,
    countdown_timers,
    RESET_TIMER,
    pedestrian_request_status,
    REQUEST_CROSSING,
    EMERGENCY_OVERRIDE,
  } = useContext(TrafficControlContext);
  const hasProcessedPedestrianRequest = useRef(false);
  const timerRef = useRef(null);
  const [emergencyMode, setEmergencyMode] = useState(false);

  // Counter will count down till 0
  useEffect(() => {
    if (countdown_timers > 0 && !emergencyMode) {
      const timer = setInterval(() => {
        RESET_TIMER(countdown_timers - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [countdown_timers, RESET_TIMER, emergencyMode]);

  // Timer change based on light
  useEffect(() => {
    if (emergencyMode) return;
    if (current_light === TRAFFIC_LIGHTS.green) {
      RESET_TIMER(ALL_LIGHT_DELAYS_DURATIONS.green);
    }

    if (current_light === TRAFFIC_LIGHTS.red) {
      RESET_TIMER(ALL_LIGHT_DELAYS_DURATIONS.red);
    }

    if (current_light === TRAFFIC_LIGHTS.yellow) {
      RESET_TIMER(ALL_LIGHT_DELAYS_DURATIONS.yellow);
    }
  }, [current_light, RESET_TIMER, emergencyMode]);

  // Handle light changes when timer hits 0
  useEffect(() => {
    if (countdown_timers === 0 && !emergencyMode) {
      const timer = setTimeout(() => {
        if (current_light === TRAFFIC_LIGHTS.red) {
          CHANGE_LIGHT(TRAFFIC_LIGHTS.green);
        } else if (current_light === TRAFFIC_LIGHTS.yellow) {
          CHANGE_LIGHT(TRAFFIC_LIGHTS.red);
        } else if (current_light === TRAFFIC_LIGHTS.green) {
          CHANGE_LIGHT(TRAFFIC_LIGHTS.yellow);
        }
      }, LIGHT_CHANGE_DELAY);
      return () => clearTimeout(timer);
    }
  }, [countdown_timers, current_light, CHANGE_LIGHT, emergencyMode]);

  useEffect(() => {
    if (current_light === TRAFFIC_LIGHTS.red && pedestrian_request_status) {
      if (!hasProcessedPedestrianRequest.current) {
        const newTimerValue = countdown_timers > 0 ? countdown_timers + 5 : 12;
        RESET_TIMER(newTimerValue);
        hasProcessedPedestrianRequest.current = true;
      }
    } else if (current_light !== TRAFFIC_LIGHTS.red) {
      hasProcessedPedestrianRequest.current = false;
    }

    // Clear previous timeout and set new one
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (hasProcessedPedestrianRequest.current) {
        REQUEST_CROSSING(false);
      }
    }, (countdown_timers + 1) * 1000);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [
    current_light,
    countdown_timers,
    pedestrian_request_status,
    RESET_TIMER,
    REQUEST_CROSSING,
  ]);

  const toggleEmergencyMode = () => {
    EMERGENCY_OVERRIDE();
    setEmergencyMode((prev) => !prev);
  };

  const getCountdownForLight = () => {
    if (emergencyMode) {
      return "Emergency Mode";
    }
    return current_light !== TRAFFIC_LIGHTS.yellow ? countdown_timers : "_ _";
  };

  return (
    <div className="traffic_light_container">
      <div className="traffic_light_timer_container">
        <h1
          className={`traffic_countdown_text open-sans-font
            ${
              current_light === TRAFFIC_LIGHTS.green
                ? "traffic_countdown_green"
                : current_light === TRAFFIC_LIGHTS.yellow
                ? "traffic_countdown_yellow"
                : "traffic_countdown_red"
            } ${emergencyMode ? "small_text" : ""}
          `}
        >
          {getCountdownForLight()}
        </h1>
      </div>
      <div className="traffic_light_main_pole_container">
        <div className="traffic_light_pole"></div>
        <div className="traffic_light_cross_pole"></div>
        <div className="traffic_light_main_lights_container">
          {current_light === TRAFFIC_LIGHTS.red ? <RedLight /> : <EmptyLight />}
          {current_light === TRAFFIC_LIGHTS.yellow ? (
            <YellowLight />
          ) : (
            <EmptyLight />
          )}
          {current_light === TRAFFIC_LIGHTS.green ? (
            <GreenLight />
          ) : (
            <EmptyLight />
          )}
        </div>

        <div className="pedestrian_container">
          <div className="pedestrian_container_each_type empty_traffic_light">
            <BsPersonStanding
              color={
                current_light !== TRAFFIC_LIGHTS.red ? "#f00c0c" : "#eb5b5b"
              }
            />
          </div>
          <div className="pedestrian_container_each_type empty_traffic_light">
            <FaWalking
              className={`${
                current_light === TRAFFIC_LIGHTS.red ? "blink_symbol" : ""
              }`}
              color={
                current_light === TRAFFIC_LIGHTS.red ? "#3bf032" : "#0c9605"
              }
            />
          </div>
        </div>
      </div>
      <PedestrianButton />
      <button onClick={toggleEmergencyMode} className="emergency_mode_button">
        SOS
      </button>
    </div>
  );
};
export default TrafficLight;
