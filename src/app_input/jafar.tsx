import React, { Component } from "react";
import { NpmInput } from "../npm_inpt/NpmInput";

interface IProps {
	value: string;
	type?: string;
	pattern?: RegExp;
	patternError?: string;
	label: string;
	isRequierd?: boolean;
	isRequierdError?:string;
	placeholder?: string;
	onChange: (value: string) => void;
	
}
interface IState {
	isValid?: boolean;
	isTuch: boolean;
}
export class Jafar extends Component<IProps, IState> {
	inputRef: any;
	inputId = Math.random() + "";
	constructor(props: IProps) {
		super(props);
		this.inputRef = React.createRef();
		this.state = {
			isValid: false,
			isTuch: false,
		};
	}

	// 	/**
	// this function call on 2 condition
	// 1.if field requierd
	// 2.user touch input and leave it without any action
	// 3.inputError show text az an error
	// */

	inputError = (isRequierd: boolean, isvalid: boolean, isTuch: boolean) => {
		if (isRequierd === true) {
			console.log(this.props);
			if (isvalid === false && isTuch === true) {
				return <span className="text-danger"> فیلد ضروری است</span>;
			}
			if (isvalid === true && isTuch === true) {
				return;
			}
			if (isvalid === false && isTuch === false) {
				return;
			}
		} else {
			return;
		}
	};

	/**  
whith this function:
1.we can act for isReguier props.for isRequier=true show star
*/
	starIsRequierd = (isRequierd: boolean) => {
		if (this.props.isRequierd === true) {
			return <span className="text-danger">*</span>;
		} else {
			return;
		}
	};

	/**
	1.we can get input value 
	2.setState isValis && isTuch
	*/
	handlerInput(value: string) {
		const isvalid = this.checkValidate(value);

		// console.log(value, 123456);
		// //bayad donbale rahkari basham ta cole errorharo inja handel konam ta majboor nasham
		// // hey az props value begiram.vagarna to loop miofte va az set state ziad error mide
		 this.props.onChange(value);

		// if (value !== "") {
		// 	//if(!value||!value.toString().trim().lenght){isvelid=false}
		// 	this.setState({
		// 		isValid: true,
		// 		isTuch: true,
		// 	});
		// } else {
		// 	this.setState({
		// 		isValid: false,
		// 		isTuch: true,
		// 	});
		// }
	}
	checkValidate(value: string): boolean {
		return true;
	}

	componentDidMount() {
		// const el = document.getElementById(this.inputId);
		// const e1 = el?.querySelector("inputId");
		// (e1||{onblur: null}).onblur=()=>{this.setState({
		// 	...this.state,
		// 	isTuch: true,
		// 	});
		// 	console.log(this.state.isTuch)
		// };
		// 		 const el = document.getElementById(this.inputId)
		// 		const e=el?.addEventListener('blur',  inputTuch =()=> {
		// 			change to
		// ()=>{
		// 		 	this.setState({
		// 					...this.state,
		// 					isTuch: true,
		// 					});
		// 				}}
		// 		// this.inputRef.current.onblur = () => {
		// 		// 	debugger;
		// 		// };
		// 		// setTimeout(() => {
		// 		// 	debugger;
		// 		// 	const gholi = this.inputRef.current.props.onblur();
		// 		// }, 2000);
	}
	setPattern = (value: string) => {
		if (this.props.pattern!.test(value)) {
			return true;
		} else {
			//alert("You have entered an invalid email address!")
			return false;
		}
	};

	/* 
nemitavanam value ro mostaghim az input begiram.
agar ba this.props.onChange(value) value ra begiram chom metod ha dar render hast to loop mioftam.
*/

	// inputEmailValidated = (pattern: string, value: string) => {
	// 	console.log(value, pattern, "@@@@@");
	// 	//	this.props.onChange(value);
	// 	console.log(this.setEmailPattern(value), "%%%%");
	// 	if (pattern === "email") {
	// 		if (this.setEmailPattern(value) === true && value !== null) {
	// 			console.log(value + "890-");
	// 			return "";
	// 		} else {
	// 			return "ایمیل را همانند نمونه وارد کنید";
	// 		}
	// 	}
	// 	return "";
	// };

	render() {
		return (
			<div className="form-group" id={this.inputId}>
				<div>
					<label>
						{this.props.label}
						{this.starIsRequierd(this.props.isRequierd!)}
						{/* aya be in shekl neveshtam doroste.ya dar props undefine ham tarif konam */}
					</label>
				</div>

				<NpmInput
					value={this.props.value}
					onChange={(e: string) => {
						this.handlerInput(e);
					}}
					ref={this.inputRef}
				/>
				<div>
				
					{this.checkValidate(
						this.props.value
					)}
				</div>
				<div>
					{this.inputError(
						this.props.isRequierd!,
						this.state.isValid!,
						this.state.isTuch
					)}
				</div>
			</div>
		);
	}
}

/**
<input type="text" ref={element => this.textInput = element} />
this.textInput.value
  this.textInput = React.createRef();


*/
