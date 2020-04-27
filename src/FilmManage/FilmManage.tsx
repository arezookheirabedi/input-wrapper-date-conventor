import React, { Component } from "react";
import { CatodGrid, Catodcolumn, CatodActions } from "@cattod/react-grid";
import "@cattod/react-grid/build/index.css";
import { Localization } from "../config/localization/localization";
//import  IPerson  from "./model/IPerson";
import { IFilmList } from "./model/IFilmList";
import { IPerson } from "./model/IPerson";

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
	//actions: CatodActions<IRowData>[]
	rows: Array<IFilmList>;
}

export class FilmManage extends Component<{}, IState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			columnDefs: [
				{
					title: Localization.film,
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
			],
			rows: [
				{
					title: "godfather",
					timeRemained: 45555,
					chechStatue: true,
					published: true,
				},
				{
					title: "godfather",
					timeRemained: 45555,
					chechStatue: true,
					published: true,
				},
			],
		};
	}

	cell_filmTitle(FilmList: IFilmList): React.ReactNode {
		return (
			<>
				<div>
				<span>
                `${Localization.film} : ${FilmList.title}`
                    </span>	
				</div>
				<div>
					`${Localization.film} : ${FilmList.title},$
					{Localization.film} : ${FilmList.title} `
				</div>
			</>
		);
	}

	cell_timeTitle(FilmList: IFilmList): React.ReactNode {
		return ` ${FilmList.timeRemained}`;
	}
	cell_chechStatue(FilmList: IFilmList): React.ReactNode {
		return ` ${FilmList.chechStatue}`;
	}
	cell_published(FilmList: IFilmList): React.ReactNode {
		return ` ${FilmList.published}`;
	}

	render() {
		return (
			<>
				<div className="container mt-3 ">
					<div className="film-manage-wrapper">
						<div className="container">
							<div className="row  ">
								<div className="col-auto mr-auto mt-4 d-flex justify-content-start ">
									<div className="">
										<input
											type="text"
											className="form-control"
											placeholder={
												Localization.searchForFilmName
											}
										/>
									</div>
								</div>

								<div className="col-md-4 mt-4 d-flex justify-content-end">
									<div className="btn btn-primary ">
										<span>{Localization.newContent}</span>
										<span> + </span>
									</div>
								</div>
							</div>
							<div className="main-wrapper bg-light mt-2">
							{/* main wrapper */}
								<header>
									<div className=" d-flex justify-content-end mr-3">
										<h6>{Localization.ContentList}</h6>
									</div>
								</header>
								<CatodGrid
									direction={"right"}
									dataRow={this.state.rows}
									className="table-striped padding-zero"
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
