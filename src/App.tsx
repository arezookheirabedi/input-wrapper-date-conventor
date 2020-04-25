import React, { Component } from "react";
//import ConvertToDate from "./ConvertToDate/ConvertToDate";
import { Localization } from "./config/localization/localization";
import { InputWrapper } from "./app_input/inputWrapper";
import { AppRegex } from "./config/localization/regex";

export class App extends Component {
	state = {
		// value: {
		// 	name: "",
		// 	familyName: "",
		// 	email: "",
		// 	timestamp: "2587382541",
		// 	cellnumber: "",
		// },
		validate: false,
		form: {
			firsname: { value: "",
			 isValeiss: false },
			familyName: { value: "",
			 isValeiss: false },
			email: { value: "", 
			isValeiss: false },
			cellnumber: { value: "", 
			isValeiss: false },
		},
	};
	handlerInput(
		v: string,
		elName: "firsname" | "familyName" | "email" | "cellnumber",
		isvalid: boolean
	) {
		this.setState({
			...this.state,
			form: {
				...this.state.form,
				[elName]: {
					value: v,
					isvalid: isvalid,
				},
			},
		});
	}

	// handlerInput(v: string, elName:'name'|'familyName'|'email'|'cellnumber') {
	// 	//debugger;
	// 	this.setState({
	// 		...this.state,
	// 		value: {
	// 			...this.state.value,
	// 			[elName]:v
	// 		},
	// 	});

	// }
	render() {
		return (
			<div className="container">
				<div className="container shadow">
					<div className="row">
						<div className="col-md-3">
							<InputWrapper
								label={Localization.Email}
								value={this.state.form.email.value}
								isRequired
								requiredMessageError={
									Localization.validation_msg
										.missing_requiered_field
								}
								Pattern={AppRegex.email}
								patternError={
									Localization.validation_msg
										.Just_enter_the_Email
								}
								placeholder="a.hasani@gmail.com"
								onChange={(v: string, isvalid: boolean) => {
									this.handlerInput(v, "email", isvalid);
								}}
							/>
						</div>
						<div className="col-md-3">
							<InputWrapper
								label={Localization.familyName}
								value={this.state.form.familyName.value}
								isRequired={true}
								requiredMessageError={
									Localization.validation_msg
										.missing_requiered_field
								}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerInput(v, "familyName", isvalid);
								}}
							/>
						</div>
						<div className="col-md-3">
							<InputWrapper
								label={Localization.name}
								value={this.state.form.firsname.value}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerInput(v, "firsname", isvalid);
								}}
							/>
						</div>
						<div className="col-md-3">
							<InputWrapper
								label={Localization.phonenumber}
								value={this.state.form.cellnumber.value}
								Pattern={AppRegex.number}
								patternError={
									Localization.validation_msg
										.Just_enter_the_cell_number
								}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerInput(v, "cellnumber", isvalid);
								}}
							/>
						</div>
					</div>
				</div>

				<div>
					{/* <ConvertToDate
						timestamp={Number(this.state.value.timestamp)}
					/> */}
				</div>
			</div>
		);
	}
}
