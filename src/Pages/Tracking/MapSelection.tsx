import React from "react";
import PinPointModal from "../../Components/Modals/PinPointModal";
import { useFormik } from "formik";
import RouteMapModal from "../../Components/Modals/RouteMap";

const MapSelection = () => {
	const [showPinPointModal, setShowPinPointModal] = React.useState(false);
	const [showLiveLocationModal, setShowLiveLocationModal] =
		React.useState(false);
	const [showRouteMapModal, setShowRouteMapModal] = React.useState(false);

	const [date, setDate] = React.useState("");
	const [time, setTime] = React.useState("");

	const submitPinPointForm = (event: any) => {
		event.preventDefault();
		console.log(date, time);
	};

	const submitRouteMapForm = (event: any) => {
		event.preventDefault();
		console.log(date);
	};

	return (
		<React.Fragment>
			<div
				onClick={() => setShowPinPointModal(true)}
				className="map-selection-absolute-container-1">
				Pin Point
			</div>
			<PinPointModal
				show={showPinPointModal}
				setShowModal={setShowPinPointModal}
				date={date}
				setDate={setDate}
				time={time}
				setTime={setTime}
				submitPinPointForm={submitPinPointForm}
			/>
			<div className="map-selection-absolute-container-2">
				Live Location Tracking
			</div>
			<div
				onClick={() => setShowRouteMapModal(true)}
				className="map-selection-absolute-container-3">
				Route Map
			</div>
			<RouteMapModal
				show={showRouteMapModal}
				setShowModal={setShowRouteMapModal}
				date={date}
				setDate={setDate}
				submitRouteMapForm={submitRouteMapForm}
			/>
		</React.Fragment>
	);
};

export default MapSelection;
