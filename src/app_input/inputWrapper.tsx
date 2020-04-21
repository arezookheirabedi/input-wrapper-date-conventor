import React, { Component } from "react";
import { NpmInput } from "../npm_inpt/NpmInput";

interface IProps {
	value: string;
	type?: string;
	emailPattern?: RegExp;
	numberPattern?:RegExp;
	label: string;
	isRequired?: boolean;
	requiredMessageError?: string;
	numberMassageError?: string;
	emailMessageError?: string;
	placeholder?: string;
	onChange: (value: string) => void;
}
interface IState {
	
	newMessage:string;
}
export class InputWrapper extends Component<IProps, IState> {
	inputRef: any;
	inputId = Math.random() + "";
	constructor(props: IProps) {
		super(props);
		this.inputRef = React.createRef();
		this.state = {
		newMessage:""
		};
	}
	starIsRequired = (isRequired: boolean) => {
		if (this.props.isRequired === true) {
			return <span className="text-danger">*</span>;
		} else {
			return;
		}
	};
	setmessage(isvalid:boolean){
		let newMessage:string = ""
		if (!isvalid){
			if (this.props.emailPattern && this.props.emailMessageError){
				newMessage = this.props.emailMessageError
			}

			if (this.props.isRequired!&& this.props.requiredMessageError){
				newMessage=this.props.requiredMessageError
			}

			if(this.props.numberPattern&&this.props.numberMassageError){
				newMessage=this.props.numberMassageError
			}
			this.setState({
				...this.state,
				newMessage
		 				
			})
		}
	}



	handlerInput(value: string) {
		const isvalid = this.checkValidate(value);
		this.setmessage(isvalid)
		this.props.onChange(value);

	}

	// 	/**
	// this function call on 2 condition
	// 1.if field Required
	// 2.user touch input and leave it without any action
	// 3.inputError show text az an error
	// */

	// inputError = (isRequired: boolean, isvalid: boolean, isTuch: boolean) => {
	// 	if (isRequired === true) {
	// 		console.log(this.props);
	// 		if (isvalid === false && isTuch === true) {
	// 			return <span className="text-danger"> فیلد ضروری است</span>;
	// 		}
	// 		if (isvalid === true && isTuch === true) {
	// 			return;
	// 		}
	// 		if (isvalid === false && isTuch === false) {
	// 			return;
	// 		}
	// 	} else {
	// 		return;
	// 	}
	// };

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

	setemailPattern = (value: string) => {
		if (value) {
			if (this.props.emailPattern!.test(value)) {
				return true;
			} else {
				return false;
			}
		}
	};
	setreguired(value: string) {
		if (!value || !value.toString().trim().length) {
			return false;
		} else {
			return true;
		}
	}
	setNumberpattern(value: string) {
		const length = value?value.toString().length : 0;
		if (length > 0) {
			if (this.props.numberPattern!.test(value)) {
				return false;
			} else {
				return true;
			}
		}
	}
	// checkValidate(value: string): boolean {
	// 	return true
	// }


	checkValidate = ( value: string) => {

			if (this.setemailPattern(value) === true && value !== null&&this.props.emailPattern!) {
				return false
			} 
		
		 if(this.setreguired(value)===true&& this.props.isRequired!){
		return true
			} 
	
			 if(this.setNumberpattern(value)===true&& this.props.numberPattern!){
			return true
				} 
			return false;
	}
	
	

	render() {
		return (
			<div className="form-group" id={this.inputId}>
				<div>
					<label>
						{this.props.label}
						{this.starIsRequired(this.props.isRequired!)}
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
				{/* <div>{this.checkValidate(this.props.value)}</div> */}
				{/* <div>
					{this.inputError(
						this.props.isRequired!,
						this.state.isValid!,
						this.state.isTuch
					)}
				</div> */}
			</div>
		);
	}
}

/**
<input type="text" ref={element => this.textInput = element} />
this.textInput.value
  this.textInput = React.createRef();


*/


