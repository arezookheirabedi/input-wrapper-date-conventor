import React, { Component } from "react";
import ConvertToDate from "./ConvertToDate/ConvertToDate";
import { AppRegex } from "./config/localization/regex";
import { Localization } from "./config/localization/localization";
import { InputWrapper } from "./app_input/inputWrapper";

export class App extends Component {
	state = {
		value: {
			name: "",
			lastname: "",
			email: "",
			timestamp: "2587382541",
			cellnumber: "",
		},
		//validate: false,
	};

	handlerInput(v: string) {
		this.setState({
			...this.state,
			value: v,
		});
	}
	render() {
		return (
			<div className="container">
				<div className="container shadow">
					<div className="row">
						<div className="col-md-3">
							<InputWrapper
								label={Localization.Email}
								value={this.state.value.email}
								isRequired={true}
								requiredMessageError={
									Localization.validation_msg
										.missing_requiered_field
								}
								emailPattern={AppRegex.email}
								emailMessageError={
									Localization.validation_msg
										.Just_enter_the_Email
								}
								placeholder="a.hasani@gmail.com"
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
						<div className="col-md-3">
							<InputWrapper
								label={Localization.familyName}
								value={this.state.value.lastname}
								isRequired={true}
								requiredMessageError={
									Localization.validation_msg
										.missing_requiered_field
								}
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
						<div className="col-md-3">
							<InputWrapper
								label={Localization.name}
								value={this.state.value.name}
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
						<div className="col-md-3">
							<InputWrapper
								label={Localization.phonenumber}
								value={this.state.value.cellnumber}
								numberPattern={AppRegex.number}
								numberMassageError={
									Localization.validation_msg
										.Just_enter_the_cell_number
								}
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<ConvertToDate
						timestamp={Number(this.state.value.timestamp)}
					/>
				</div>
			</div>
		);
	}
}


