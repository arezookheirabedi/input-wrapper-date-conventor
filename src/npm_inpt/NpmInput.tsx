import React, { Component } from "react";
interface IProps {
	value: string;
	onChange: (value: string) => void;
}

export  class NpmInput extends Component<IProps> {
	handlerChange=(e: any): void=> {
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<input
				onChange={(e) => this.handlerChange(e)}
				value={this.props.value}
			/>
		);
	}
}
