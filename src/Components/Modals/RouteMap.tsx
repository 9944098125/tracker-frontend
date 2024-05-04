import React from "react";
import { Modal } from "react-bootstrap";
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ModalProps = {
	show: boolean;
	setShowModal: (parameter: boolean) => void;
	date: string;
	setDate: any;
	submitRouteMapForm: (e: any) => void;
};
const RouteMapModal = (props: ModalProps) => {
	const { show, setShowModal, date, setDate, submitRouteMapForm } = props;
	return (
		<Modal
			show={show}
			onHide={() => setShowModal(false)}
			backdrop="static"
			size="sm"
			centered>
			<form className="form-section p-4" onSubmit={submitRouteMapForm}>
				<Modal.Header closeButton>
					<h4 className="fw-bold fs-4">Route Map</h4>
				</Modal.Header>
				<div className="form-group mb-2 d-flex flex-column">
					<label htmlFor="date" className="fw-bold fs-6">
						Date
					</label>
					<DatePicker value={date} onChange={setDate} />
				</div>
				<button className="primary-button w-100" type="submit">
					Submit
				</button>
			</form>
		</Modal>
	);
};

export default RouteMapModal;
