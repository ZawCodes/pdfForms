import "./FormInput.css";

const FormInput = ({ label, value }) => {
	return (
		<div className="input-container">
			<label>{label}</label>
			<input
				type="text"
				id="example-input"
				className="input-with-bottom-border"
				value={value}
			/>
		</div>
	);
};

export default FormInput;
