import React, { Component } from "react";
import { InputWrapper } from "../app_input/inputWrapper";
import { Localization } from "../config/localization/localization";
import { AppRegex } from "../config/localization/regex";
interface IProps {
	onChange: (value: Array<IPerson>, isValid: boolean) => void;
}
interface IPerson {
	name: { value: string; isValid: boolean };
	familyName: { value: string; isValid: boolean };
	mobile: { value: string; isValid: boolean };
	address: { value: string; isValid: boolean };
}


interface IState {
	persons: Array<IPerson>;
}
export class AppPersonList extends Component<IProps, IState> {
	state = {
        persons: [],
    
	};

	
	addNewPerson() {
		this.setState({
			persons: [
				...this.state.persons,
				{
					name: { value: "", isValid: false },
					familyName: { value: "", isValid: false },
					mobile: { value: "", isValid: false },
					address: {
						value: "",
						isValid: false,
					},
				},
			],
		//Todo:roye onchange person 
            //isvalid mojod mibashad
        },
        // () => {
        //     this.props.onChange(this.state.persons,isvalid);
        );
	}

	removePerson(index: number) {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
        this.setState({ persons },
         //   () => {
           //  this.props.onChange(this.state.persons,isValid);
            );
	}

	handleInputChange(
		value: string,
		elName: "name" | "familyName" | "mobile" | "address",
		isValid: boolean,
		index: number
	) {
		debugger;
		const persons = [...this.state.persons] as Array<IPerson>;
		persons[index][elName] = {
			value,isValid
        };
		// const p = persons[index];
		// p[elName] = { isValid, value };

		this.setState(
			{
				persons,
			},
			() => {
				this.props.onChange(this.state.persons, isValid);
			}
		);
	}

	render() {
		return (
			<div className="container">
				<div className="container shadow">
					{(this.state.persons as Array<IPerson>).map(
						(persons, index) => {
							return (
								<>
									<div className="form-group" key={index}>
										<div className="row mt-3">
											<div className="col-md-4">
												<InputWrapper
													label={Localization.name}
													isRequired
													requiredMessageError={
														Localization
															.validation_msg
															.missing_requiered_field
													}
													onChange={(
														value,
														isValid
													) =>
														this.handleInputChange(
															value,
															"name",
															isValid,
															index
														)
													}
													value={persons.name.value}
												/>
											</div>
											<div className="col-md-4">
												<InputWrapper
													label={
														Localization.familyName
													}
													isRequired
													requiredMessageError={
														Localization
															.validation_msg
															.missing_requiered_field
													}
													onChange={(
														value,
														isValid
													) =>
														this.handleInputChange(
															value,
															"familyName",
															isValid,
															index
														)
													}
													value={
														persons.familyName.value
													}
												/>
											</div>
											<div className="col-md-4">
												<InputWrapper
													label={
														Localization.phonenumber
													}
													Pattern={AppRegex.number}
													patternError={
														Localization
															.validation_msg
															.Just_enter_the_cell_number
													}
													onChange={(
														value,
														isValid
													) =>
														this.handleInputChange(
															value,
															"mobile",
															isValid,
															index
														)
													}
													value={persons.mobile.value}
												/>
											</div>
											<div className="col-md-4">
												<InputWrapper
													label={Localization.address}
													onChange={(
														value,
														isValid
													) =>
														this.handleInputChange(
															value,
															"address",
															isValid,
															index
														)
													}
													value={
														persons.address.value
													}
												/>
											</div>
										</div>
									</div>

									<div
										className="btn btn-danger btn-sm"
										onClick={() => this.removePerson(index)}
									>
										x
									</div>
								</>
							);
						}
					)}

					<div
						className="btn btn-success btn-sm"
						onClick={() => this.addNewPerson()}
					>
						+
					</div>
				</div>
			</div>
		);
	}
}
