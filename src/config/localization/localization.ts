import LocalizedStrings, { LocalizedStringsMethods } from "react-localization";
import {fa} from "./fa";
import {en}from "./en";

interface ILocalization extends LocalizedStringsMethods {
    Email:string;
    familyName:string;
    name:string;
	validation_msg: {
		Just_enter_the_Email: string;
		Just_enter_the_cell_number: string;
		missing_requiered_field: string;
	};
}
export let Localization: ILocalization = new LocalizedStrings({
	fa: fa,
	en: en,
});
