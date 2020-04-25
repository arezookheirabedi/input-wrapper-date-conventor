import React, { Component } from "react";
import { InputWrapper } from "../app_input/inputWrapper";
import { Localization } from "../config/localization/localization";
import { AppRegex } from "../config/localization/regex";

export class PersonLists extends Component {
	state = {
		form: {
			name: { value: "", isValeiss: false },
			familyName: { value: "", isValeiss: false },
			mobile: { value: "", isValeiss: false },
			address: {
				value: "",
				isvalid: false,
			},
		},
	};

	handlerChange(
        v: string,
        
       // elName: 'string'| 'number'| 'symbol'| 'any',
        elName: "name" | "familyName" | "mobile" | "address",
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
	render() {
		return (
			<div className="container">
				<div className="container shadow">
					<div className="row mt-3">
						<div className="col-md-4">
							<InputWrapper
								label={Localization.name}
								value={this.state.form.name.value}
								isRequired
								requiredMessageError={
									Localization.validation_msg
										.missing_requiered_field
								}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerChange(v, "name", isvalid);
								}}
							/>
						</div>
						<div className="col-md-4">
							<InputWrapper
								label={Localization.familyName}
								value={this.state.form.familyName.value}
								isRequired
								requiredMessageError={
									Localization.validation_msg
										.missing_requiered_field
								}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerChange(
										v,
										"familyName",
										isvalid
									);
								}}
							/>
						</div>
						<div className="col-md-4">
							<InputWrapper
								label={Localization.phonenumber}
								value={this.state.form.mobile.value}
								Pattern={AppRegex.number}
								patternError={
									Localization.validation_msg
										.Just_enter_the_cell_number
								}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerChange(v, "mobile", isvalid);
								}}
							/>
						</div>
						<div className="col-md-12">
							<InputWrapper
								label={Localization.address}
								value={this.state.form.address.value}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerChange(v, "address", isvalid);
								}}
							/>
						</div>
                        	{/* <div className="col-md-12">
							<textarea
                            is_textarea={true}
                            textarea_rows={5}
								label={Localization.address}
								value={this.state.form.address.value}
								onChange={(v: string, isvalid: boolean) => {
									this.handlerChange(v, "address", isvalid);
								}}
							/>
						</div> */}
						
					</div>
				</div>
			</div>
		);
	}
}
