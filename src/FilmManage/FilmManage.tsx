import React, { Component } from "react";
import { CatodGrid, Catodcolumn, CatodActions } from "@cattod/react-grid";
import { Localization } from "../config/localization/localization";
import { IFilmList } from "./model/IFilmList";
//import { CatodSelectCustomStyle } from "./CatodSelectCustomStyle";
import { CatodSelect } from "../CatodSelect/CatodSelect";

enum CHECKSTATUS {
	DONE = "DONE",
	ALL = "ALL",
	WAITFORCHECK = "WAITFORCHECK",
}

enum PERSON {
	REVIEWER1 = "REVIEWER1",
	REVIEWER2 = "REVIEWER2",
	APPRAISER = "APPRAISER",
	EDITOR = " EDITOR",
}

interface IState {
	columnDefs: Array<Catodcolumn<IFilmList>>;
	rows: Array<IFilmList>;
	options?: { label: string; value: any }[];
	// options?: [typeofFilm:{ label: string, value: any }[],time:{ label: string, value: any }[],
	//checktatus { label: string, value: any }[],published:{ label: string, value: any }[],
	// ];
}

export class FilmManage extends Component<{}, IState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			columnDefs: [
				{
					title: "drop down",
					key: "film",
					displayValue: this.cell_filmTitle,
				},

				{
					title: Localization.time,

					key: "remainTime",
					displayValue: this.cell_timeTitle,
				},
				{
					title: Localization.checkStatue,

					key: "chechStatue",
					displayValue: this.cell_chechStatue,
				},

				{
					title: Localization.published,

					key: "published",
					displayValue: this.cell_published,
				},
				{
					title: "",
					key: "edit",
					displayValue: this.cell_edit,
				},
				{
					title: "",
					key: "remove",
					displayValue: this.cell_remove,
				},
			],
			rows: [
				{
					title: "godfather",
					timeRemained: 45555,
					chechStatue: true,
					published: true,
					id: 3445,
				},
				{
					title: "godfather",
					timeRemained: 45555,
					chechStatue: true,
					published: true,
					id: 3445,
				},
			],
			options: [
				{ label: Localization.film, value: "fggggh" },
				{ label: Localization.time, value: "fggggh" },
				{ label: Localization.checkStatue, value: "fggggh" }
				// typeOfFilm:[
				// 	{label:'React',value: Localization.film},

				//   ],
				//   timeRemain:[
				// 	{label:'React',value: Localization.time},

				//   ],
				//   checkStatus:[
				// 	{label:'React',value: Localization.checkStatus},

				//   ],
				//   published:[
				// 	{label:'React',value: Localization.published}
				//   ],
			],
		};
	}
	///////////////////////////celFilm title//////////////////////////////////////////////////////
	cell_filmTitle(FilmList: IFilmList): React.ReactNode {
		return (
			<>
				<div className="w">
					{`${Localization.film} : ${FilmList.title}`}
					<i className="fa fa-play-circle  p-2" />
				</div>
				<div className="d-flex film-person-role">
					<div className="role px-2 mr-3 py-1 border-bottom border-success">
						<span>{`${Localization.apprasier1}`}</span>
					</div>
					<div className="role px-2 mr-3 py-1 border-bottom border-success">
						<span>{`${Localization.reviewer1}`}</span>
					</div>
					<div className="role px-2 mr-3 py-1 border-bottom border-danger">
						<span>{`${Localization.reviewer1}`}</span>
					</div>
					<div className="role px-2 mr-3 py-1 border-bottom border-success">
						<span>{`${Localization.editor}`}</span>
					</div>
				</div>
			</>
		);
	}

	cell_timeTitle(FilmList: IFilmList): React.ReactNode {
		return ` ${FilmList.timeRemained}`;
	}
	cell_chechStatue(FilmList: IFilmList): React.ReactNode {
		return (
			<>
				<button type="button" className="btn btn-success">
					{FilmList.chechStatue === true
						? "اتمام بررسی"
						: "اتمام بررسی"}
				</button>
			</>
		);
	}
	cell_published(FilmList: IFilmList): React.ReactNode {
		return (
			<>
				<button type="button" className="btn btn-success">
					{
						FilmList.published === true
							? "انتشار یافته"
							: "در حال انتشار"

						// {`${localization.published}`}:{`${localization.published}`}
					}
				</button>
			</>
		);
	}
	cell_edit(FilmList: IFilmList): React.ReactNode {
		return (
			<i
				//  <i className="fal fa-pencil-alt"></i>
				title="ویرایش"
				className="fa fa-pencil  text-muted"
				//onClick={() => this.removeRow(FilmList.id)}
			/>
		);
	}
	cell_remove(FilmList: IFilmList) {
		return (
			<i
				title="حذف"
				className="fa fa-trash  text-danger"
				//onClick={() => this.removeRow(FilmList.id)}
			/>
		);
	}

	render() {
		return (
			<>
				<div className="container  bg-white mt-3  border border-secondary">
					{/* ////////////////////////header/////////////////////////// */}
					<div className="header">
						<div className="container">
							<div className="row ">
								<div className="col-auto mr-auto mt-4 d-flex justify-content-start ">
									<div className="pl-2">
										پنهان کردن منو
										<i className="fa fa-bars pl-2" />
									</div>
								</div>
								<div className="col-md-4 mt-4 d-flex justify-content-end">
									<p>{Localization.name}</p>
									<p> {Localization.familyName}</p>
									{/* //TODO IT DOSET GET MY PNG.CHESK LINK ADDRESS */}
									{/* //TODOFONT DOSENT WORK */}
									{/* <img src="../../public/static/media/img/icon/broken-avatar.png"  className="rounded-pill"/> */}
									<img
										src="../../public/static/media/img/icon/broken-avatar.png"
										className="rounded-pill img-padding"
									/>
									<div className="position-relative">
										<i className="fa fa-bell  text-secondary bell  " />
										<div className="notif bg-danger"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="film-manage-wrapper bg-light">
						<div className="container">
							<div className="row  ">
								<div className="col-auto mr-auto mt-4 d-flex justify-content-start ">
									<div className="btn btn-primary pr-5 ">
										<span className="pr-2 ml-3"> + </span>
										<span>{Localization.newContent}</span>
									</div>
								</div>
								<div className="col-md-4 mt-4 d-flex justify-content-end">
									<div className="input-group  film-title-search">
										<div className="   input-group-prepend">
											<div className="input-group-text  icon-wrapper bg-white">
												<i className="fa fa-search"></i>
											</div>
										</div>
										<input
											className="form-control  search-input"
											placeholder={
												Localization.searchForFilmName
											}
										/>
									</div>
								</div>
							</div>
							{/* //////////////////////////////filmList table item///////////// */}
							<div className="main-wrapper container bg-white mt-3">
								<div className=" d-flex   justify-content-start ml-3  pt-5">
									<h6>{Localization.ContentList}</h6>
								</div>
								{/* ////////////////////////////////////grid header with select tag/////////////// */}
								<div className=" container">
									
								<div className="row bg-white ">
									<div className="col-sm-5 custom-style-catod-select">
										<CatodSelect
											options={this.state.options}
											placeholder={Localization.film}
										/>
									</div>

									<div className="col-sm-1 ml-5 custom-style-catod-select">
										<CatodSelect
											options={this.state.options}
											placeholder={Localization.film}
										/>
									</div>
									<div className="col-sm-2 mr-2 custom-style-catod-select">
										<CatodSelect
											options={this.state.options}
											placeholder={Localization.film}
										/>
									</div>
									<div className="col-sm-3 custom-style-catod-select">
										<CatodSelect
											options={this.state.options}
											placeholder={Localization.film}
										/>
									</div>
								</div>
							
							</div>
								{/* ////////////table rows///////////////////////////////////// */}

								<CatodGrid
									direction={"right"}
									dataRow={this.state.rows}
									className="table bg-white table table-padding-zero table-borderless  " //TODO.ADD PADIIG TO EACH ROW&& add border when hover
									columnDef={this.state.columnDefs}
								/>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
