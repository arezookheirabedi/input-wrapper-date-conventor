import React, { Component } from "react";
import "moment/locale/fa";
import 'moment/locale/ar';
import moment, { months } from "moment-jalaali";

interface IProps {
	timestamp: number;
}

export default class ConvertToDate extends Component<IProps> {
	

	getTimestampToDatejalaali = (timestamp: number) => {
		 

		return moment(timestamp * 1000).format("jYYYY/jM/jD");
	};

	getTimestampToDateGregorian = (timestamp: number) => {
		return moment(timestamp * 1000).locale("en").format("YYYY/MM/DD");
	};
	getYearjalaali = (timestamp: number) => {
		return moment(timestamp * 1000).format("jYYYY");
	};

	getYearGregorian = (timestamp: number) => {
		return moment(timestamp * 1000).format("YYYY");
	};

	getMonthjalaali = (timestamp: number) => {
	// const months=["فروردین",
	// "اردیبهشت",
	// "خرداد",
	// "تیر",
	// "مرداد ",
	// "شهریور",
	// "مهر",
	// "آبان",
	// " آذر",
	// "دی",
	// "بهمن ",
	// "اسفند",
	// ]
	moment.loadPersian({ usePersianDigits: true });
	/* 
	اگر کد بالا را نزارم انگلیسی می آورد
	*/
		return moment(timestamp * 1000)
			.locale("fa")
			.format("jMMM");
			/* 
			اگر از این روش استفاده کنم اردیبهشت را ناقص می آورد=اردی
			*/
		
		
		// let x=moment(timestamp * 1000).jMonth()
		// return months[x]
		// اگر از این آرایه استفاده کنم ماه ها درست می آید
	};

	getMonthGregorian = (timestamp: number) => {
		return moment(timestamp * 1000).locale("en").format("MMM");
	};
	/* 

*/
	getDayjalaali(timestamp: number) {
		const days = [
			"یکشنبه",
			"دوشنبه",
			"سه شنبه",
			"چهارشنبه",
			" پنج شنبه",
			"جمعه",
			"شنبه",
		];
		let m = new Date(timestamp * 1000);
		let x = m.getDay();
		return days[x];
		
	}
	getDayGregorian(timestamp: number) {
		const days = [
			"یکشنبه",
			"دوشنبه",
			"سه شنبه",
			"چهارشنبه",
			"پنج شنبه",
			"جمعه",
			"شنبه",
		];
		let m = new Date(timestamp * 1000);
		console.log(m, 76543);
		let x = m.getDay();
		return days[x];
	}

	render() {
		return (
			<div className="container">
				<div>
					<div>
						شمسی:
						{this.getTimestampToDatejalaali(this.props.timestamp)}
					</div>
					<div>
						میلادی:
						{this.getTimestampToDateGregorian(this.props.timestamp)}
					</div>
				</div>

				<h3>شمسی</h3>
				<br />
				<br />

				<div>سال شمسی:{this.getYearjalaali(this.props.timestamp)}</div>

				<div>ماه شمسی:{this.getMonthjalaali(this.props.timestamp)}</div>
				<div>روز شمسی:{this.getDayjalaali(this.props.timestamp)}</div>
				<br />
				<br />
				<br />
				<h3>میلادی</h3>
				<br />
				<br />
				<div>سال:{this.getYearGregorian(this.props.timestamp)}</div>

				<div>ماه:{this.getMonthGregorian(this.props.timestamp)}</div>
				<div>روز:{this.getDayGregorian(this.props.timestamp)}</div>
			</div>
		);
	}
}

/* 
 var d=get date(timestamp*1000)
 const day=["satarday",sundaaaya]

*/
