import { useContext } from "react";
import { TrafficControlContext } from "../context/TrafficControlContext";
import { FaWalking } from "react-icons/fa";

const PedestrianButton = () => {
  const { REQUEST_CROSSING, pedestrian_request_status } = useContext(
    TrafficControlContext
  );

  const handlePedestrianButtonClick = () => {
    if (pedestrian_request_status) {
      return;
    }
    REQUEST_CROSSING(true);
  };

  return (
    <div className="traffic_light_pedestrian_button_container">
      <button
        onClick={handlePedestrianButtonClick}
        className={`${
          pedestrian_request_status ? "traffic_light_pedestrian_button" : ""
        }`}
      >
        <FaWalking color={pedestrian_request_status ? "white" : ""} />
      </button>
    </div>
  );
};

export default PedestrianButton;
