import React, { Component } from "react";
import { NpmInput } from "../npm_inpt/NpmInput";

interface IProps {
	value: string;
	type?: string;
	label?: string;
	isRequired?: boolean;
	requiredMessageError?: string;
	patternError?: string;
	placeholder?: string;
	onChange: (value: string, isValid: boolean) => void;
	Pattern?: RegExp;
}
interface IState {
	valid: boolean;
	touch: boolean;
}

export class InputWrapper extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props);
		this.state = {
			valid: false,
			touch: false,
		};
	}

	componentDidUpdate(prevProps: IProps) {}
	inputId = Math.random() + "";

	handlerInput(value: string) {
		const isvalid = this.checkValidate(value);
		this.props.onChange(value, isvalid);
	}
	componentDidMount() {
		//	debugger;
		const thisEl = document.getElementById(this.inputId);
		const htmlInput = thisEl?.querySelector("input");
		htmlInput &&
			htmlInput.addEventListener("blur", () => {
				this.setState({ touch: true });
			});
	}
	//checkValidate = (value: string): boolean => {
	// 	// if (this.props.isRequired === true)
	// 	// 	if (!!value)
	// 	// 		return true;
	// 	// 	else return false;
	// 	// }

	// ValidateEmail =  => {
	// 	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
	// 	  return true
	// 	}

	checkValidate = (value: string): boolean => {
		debugger;
		if (this.props.Pattern) {
			if (this.props.Pattern?.test(value)) {
				return true;
			}
		} else {
			if (this.props.isRequired === true && !!value) {
				return true;
			}
		}
		return false; // TODO: fal;something is wrong
	};

	renderErrors(): React.ReactNode {
		const v = this.checkValidate(this.props.value);
		if (v) return <></>;

		if (this.props.isRequired === true) {
			return (
				<em className="text-danger">
					{this.props.requiredMessageError}
				</em>
			);
		}
		if (!!this.props.Pattern) {
			return <em className="text-danger">{this.props.patternError}</em>;
		}

		return <></>;
	}
	render() {
		return (
			<div className="form-group" id={this.inputId}>
				<div>
					<label
						className={
							this.props.label === undefined ? "d-none" : ""
						}
					>
						{this.props.label}
						<em
							className={
								this.props.isRequired === true ? "" : "d-none"
							}
						>
							<span className="text-danger">*</span>
						</em>
					</label>
				</div>

				<NpmInput
					value={this.props.value}
					onChange={(e: string) => {
						this.handlerInput(e);
					}}
				/>

				{this.state.touch ? this.renderErrors() : ""}
			</div>
		);
	}
}
