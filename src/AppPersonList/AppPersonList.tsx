import React, { Component } from "react";
import { InputWrapper } from "../app_input/inputWrapper";
import { Localization } from "../config/localization/localization";
import { AppRegex } from "../config/localization/regex";
interface IProps {
	onChange: (value: Array<parentValue>, isValid: boolean) => void;
}
interface IPerson {
	name: { value: string; isValid: boolean };
	familyName: { value: string; isValid: boolean };
	mobile: { value: string; isValid: boolean };
	address: { value: string; isValid: boolean };
}

interface parentValue {
	name: string;
	familyName: string;
	mobile?: string;
	address?: string;
}

interface IState {
	persons: Array<IPerson>;
}
export class AppPersonList extends Component<IProps, IState> {
	state = {
		persons: [],
	};

	// aaaa = [{}];

	addNewPerson() {
		this.setState(
			{
				persons: [
					...this.state.persons,
					{
						name: { value: "", isValid: false },
						familyName: { value: "", isValid: false },
						mobile: { value: "", isValid: true },
						address: {
							value: "",
							isValid: true,
						},
					},
				],
			},
			() => {
				this.props.onChange(
					this.convert_in_to_out(this.state.persons),
					this.checkValid(this.state.persons)
				);
			}
		);
	}

	removePerson(index: number) {
		const persons = [...this.state.persons];
		persons.splice(index, 1);
		this.setState(
			{
				persons,
			},
			() => {
				this.props.onChange(
					this.convert_in_to_out(this.state.persons),
					this.checkValid(this.state.persons)
				);
			}
		);
	}

	private convert_in_to_out(p: Array<IPerson>): Array<parentValue> {
		return p.map((parentValue) => {
			return {
				name: parentValue.name.value,
				familyName: parentValue.familyName.value,
				mobile: parentValue.mobile.value,
				address: parentValue.address.value,
			};
		});
	}

	handleInputChange(
		value: string,
		elName: "name" | "familyName" | "mobile" | "address",
		isValid: boolean,
		index: number
	) {
		const persons = [...this.state.persons] as Array<IPerson>;
		persons[index][elName] = {
			value,
			isValid,
		};
		// const p = persons[index];
		// p[elName] = { isValid, value };
		this.setState(
			{
				persons,
			},
			() => {
				this.props.onChange(
					this.convert_in_to_out(this.state.persons),
					this.checkValid(this.state.persons)
				);
			}
		);
	}

	checkValid(value: Array<IPerson>): boolean {
		const valid = value.reduce((sum, c) => {
			return (
				sum &&
				c.address.isValid &&
				c.name.isValid &&
				c.familyName.isValid &&
				c.mobile.isValid
			);
		}, true);

		return valid;
	}

	render() {
		return (
			<div className=" container ">
				<div className="container shadow">
					<div className="d-flex justify-content-start">
						<label>{Localization.personsList}</label>
					</div>

					{(this.state.persons as Array<IPerson>).map(
						(persons, index) => {
							return (
							
								<div className="form-group border " key={index}>
									<div className="d-flex justify-content-end">
										<div
											className="btn-circle-removeBtn mt-1 mr-2"
											onClick={() =>
												this.removePerson(index)
											}
										>
											x
										</div>
									</div>
									<div className="row mt-3">
										<div className="col-md-3 ml-2">
											<InputWrapper
												label={Localization.name}
												isRequired
												requiredMessageError={
													Localization.validation_msg
														.missing_requiered_field
												}
												onChange={(value, isValid) =>
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
										<div className="col-md-3 ">
											<InputWrapper
												label={Localization.familyName}
												isRequired
												requiredMessageError={
													Localization.validation_msg
														.missing_requiered_field
												}
												onChange={(value, isValid) =>
													this.handleInputChange(
														value,
														"familyName",
														isValid,
														index
													)
												}
												value={persons.familyName.value}
											/>
										</div>
										<div className="col-md-3">
											<InputWrapper
												label={Localization.phonenumber}
												Pattern={AppRegex.number}
												patternError={
													Localization.validation_msg
														.Just_enter_the_cell_number
												}
												onChange={(value, isValid) =>
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

										<div className="col-md-12 ml-2">
											<InputWrapper
												label={Localization.address}
												onChange={(value, isValid) =>
													this.handleInputChange(
														value,
														"address",
														isValid,
														index
													)
												}
												value={persons.address.value}
											/>
										</div>
									</div>
								</div>
								
							);
						}
					)}
					<div className="d-flex justify-content-end">
						<div
							className="btn-circle-addBtn mb-3"
							onClick={() => this.addNewPerson()}
						>
							+
						</div>
					</div>
				</div>
			</div>
		);
	}
}
