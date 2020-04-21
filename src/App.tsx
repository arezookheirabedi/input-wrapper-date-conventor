import React, { Component } from "react";
import { Jafar } from "./app_input/jafar";
import ConvertToDate from "./ConvertToDate/ConvertToDate";
import { AppRegex } from "./config/localization/regex";
import { Localization } from "./config/localization/localization";


export class App extends Component {
	state = {
		value: {
			name: "",
			lastname: "",
			email: "",
			timestamp:"2587382541",
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
							<Jafar
								label={Localization.Email}
								value={this.state.value.email}
								isRequierd={true}
								isRequierdError={Localization.validation_msg.missing_requiered_field}
								pattern={ AppRegex.email}
								patternError={Localization.validation_msg.Just_enter_the_Email}
								placeholder="a.hasani@gmail.com"
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
						<div className="col-md-3">
							<Jafar
								label={Localization.familyName}
								value={this.state.value.lastname}
								isRequierd={true}
								isRequierdError={Localization.validation_msg.missing_requiered_field}
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
						<div className="col-md-3">
							<Jafar
								label={Localization.name}
								isRequierd={true}
								isRequierdError={Localization.validation_msg.missing_requiered_field}
								value={this.state.value.name}
								onChange={(v: string) => {
									this.handlerInput(v);
								}}
							/>
						</div>
					</div>
				</div>
				<div>
					<ConvertToDate 
					timestamp={Number(this.state.value.timestamp)} />
				</div>
			</div>
		);
	}
}

// 					 </div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}
// }
