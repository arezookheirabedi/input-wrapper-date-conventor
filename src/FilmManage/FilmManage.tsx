import React, { Component } from "react";
import { CatodGrid, Catodcolumn, CatodActions } from "@cattod/react-grid";
import { Localization } from "../config/localization/localization";
import { IFilmList } from "./model/IFilmList";
import { CatodSelect } from "../CatodSelect/CatodSelect";

interface IState {
	columnDefs: Array<Catodcolumn<IFilmList>>;
	rows: Array<IFilmList>;
	option1: { label: string; value: any }[];
	option2: { label: string; value: any }[];
}

export class FilmManage extends Component<{}, IState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			//////////////////table cell////////////////////////
			option1: [],
			option2: [],

			columnDefs: [
				{
					title: (
						<div className="custom-style-catod-select">
							<CatodSelect
								options={this.option1}
								placeholder={Localization.film}
							/>
						</div>
					),
					key: "film",
					displayValue: this.cell_filmTitle,
				},

				{
					title: (
						<div className=" custom-style-catod-select">
							<CatodSelect
								options={this.option2}
								placeholder={Localization.time}
							/>
						</div>
					),

					key: "",
					displayValue: this.cell_timeTitle,
				},
				{
					title: (
						<div className="custom-style-catod-select ">
							<CatodSelect
								options={this.option3}
								placeholder={Localization.checkStatue}
							/>
						</div>
					),

					key: "",
					displayValue: this.cell_chechStatue,
				},

				{
					title: (
						<div className="custom-style-catod-select">
							<CatodSelect
								options={this.option4}
								placeholder={Localization.publishedtatus}
							/>
						</div>
					),
					key: "",
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
			//////////////////table row////////////////////////////////////////
			rows: [
				{
					title: "godfather",
					timeRemained: 45555,
					chechStatue: false,
					published: true,
					id: 3445,
				},
				{
					title: "godfather",
					timeRemained: 45555,
					chechStatue: true,
					published: false,
					id: 3445,
				},
			],
			////////////////////select options//////////////////////////
		};
	}
	option1: { label: string; value: string }[] = [
		{ label: "فیلم", value: "hjh" },
		{ label: "سریال", value: "hjhj" },
		{ label: "مستند", value: "hbjhk" },
	];
	option2: { label: string; value: string }[] = [
		{ label: "fsthbrtvsdg", value: "hjh" },
		{ label: "sdthbfh", value: "hjhj" },
		{ label: "dfhgbdtfgh", value: "hbjhk" },
	];
	option3: { label: string; value: string }[] = [
		{ label: "572752", value: "hjh" },
		{ label: "7852875", value: "hjhj" },
		{ label: "78563853", value: "hbjhk" },
	];
	option4: { label: string; value: string }[] = [
		{ label: "فیلمfgf", value: "hjh" },
		{ label: "سریالfd", value: "hjhj" },
		{ label: "مستندfg", value: "hbjhk" },
	];
	///////////////////////////celFilm title//////////////////////////////////////////////////////
	cell_filmTitle(FilmList: IFilmList): React.ReactNode {
		return (
			<>
				<div className="pl-3">
					{`${Localization.film} : ${FilmList.title}`}
					<i className="fa fa-play-circle  p-2" />
				</div>
				<div className="d-flex film-person-role pl-3">
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
				{/* <button className="btn btn-sm btn-success"> */}
				{FilmList.chechStatue === true ? (
					<div>
					<button className="btn btn-sm btn-success cell-btn-style d-none d-sm-block">
						<span className="p-1"> اتمام بررسی</span>
					</button>
					<i className="fa fa-check text-success d-md-none d-lg-block "/>
					</div>
				) : (
					<div>
					<button className="btn btn-sm btn-system cell-btn-style  d-none d-sm-block">
						<span className="p-1"> اتمام بررسی</span>
					</button>
					<i className="fa fa-check   text-system d-block d-sm-none "/>
					</div>
				)}
			</>
		);
	}
	cell_published(FilmList: IFilmList): React.ReactNode {
		return (
			<>
				{FilmList.chechStatue === true ? (
					<div>
					<button className="btn btn-sm btn-success  d-none d-sm-block cell-btn-style">
						<span className="p-1"> انتشار</span>
					</button>
					<i className="fa fa-film   text-success d-block d-sm-none "/>
					</div>
				) : (
					<div>
					<button className="btn btn-sm btn-system  d-none d-sm-block cell-btn-style">
						<span className="p-1"> انتشار</span>
					</button>
					<i className="fa fa-film   text-system d-block d-sm-none "/>
					</div>
				)}
			</>
		);
	}
	cell_edit(FilmList: IFilmList): React.ReactNode {
		return (
			<img
				src="/static/media/img/icon/pencil-1.png"
				className="text-muted edit-btn "
				loading="lazy" 
			/>
			// <i
			// 	title="ویرایش"
			// 	className="fa fa-pencil fa-2x edit-btn text-muted"
			// 	//onClick={() => this.removeRow(FilmList.id)}
			// />
		);
	}
	cell_remove(FilmList: IFilmList) {
		return (
			// <i
			// 	title="حذف"
			// 	className="fa fa-trash fa-2x remove-btn text-danger"
			// 	//onClick={() => this.removeRow(FilmList.id)}
			// />
			<img
				src="/static/media/img/icon/delete.jpg"
				className="text-muted edit-btn "
				loading="lazy" 
			/>
		);
	}

	render() {
		return (
			<>
				<div className=" bg-white   ">
					<div className="container ">
						{/* ////////////////////////header/////////////////////////// */}
						<div className="row  header  ">
							{/* <div className="col-6  "> */}
							<div className="col-sm">
								<div>
									پنهان کردن منو
									<i className="fa fa-bars pl-2" />
								</div>
							</div>
							{/* <div className="col-md-6  align-self-center  d-flex justify-content-end "> */}
							<div className="col-sm-auto mr-4 ">
								<span>نقی جعفری</span>

								<img
									src="/static/media/img/icon/broken-avatar.png"
									className="person-img"
									loading="lazy" 
								/>
								<span className=" position-relative ">
									<i className="fa fa-bell  text-secondary bell  " />
									<span className="notif bg-danger"></span>
								</span>
							</div>
						</div>
					</div>
					{/* ///////////////////////////////film mande table///////////////////////////////// */}
					<div className="film-manage-wrapper bg-default">
						<div className="container">
							<div className="row  align-items-center ">
								{/* <div className="col-sm-auto mr-auto "> */}
								<div className="col-sm-12 col-md-8 mb-1 ">
									<div className="btn btn-primary padding-create-btn">
										{/* <span className="pr-4 align-middle  text-white"> */}
										<i className=" fa fa-plus mr-3" />
										{/* </span> */}
										<span className="">
											{Localization.newContent}
										</span>
									</div>
								</div>
								<div className="col-sm-12 col-md-4 ">
									<div className="input-group input-group-sm   film-title-search">
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
								<div className=" d-flex   justify-content-start ml-3  pt-4">
									<h6>{Localization.ContentList}</h6>
								</div>

								{/* ////////////table rows///////////////////////////////////// */}

								{/* <div className="sm-size"> */}

								<CatodGrid
									direction={"right"}
									dataRow={this.state.rows}
									className="table  bg-white table table-borderless p-3 " //TODO.ADD PADIIG TO EACH ROW&& add border when hover
									columnDef={this.state.columnDefs}
								/>
								{/* </div> */}
								{/* 
								/////////////////////////pagination////////////////////// */}

								<div className="   d-flex justify-content-center pb-4 ">
									<nav aria-label="Page navigation example">
										<ul className="pagination">
											<li className="page-item mr-1">
												<a
													className="page-link"
													href="#"
													aria-label="Next"
												>
													<span aria-hidden="true">
														اولین
													</span>
													<span className="sr-only">
														Next
													</span>
												</a>
											</li>
											<li className="page-item">
												<a
													className="page-link"
													href="#"
													aria-label="Previous"
												>
													<span aria-hidden="true">
														<i className="fa fa-angle-right text-muted"></i>
													</span>
													<span className="sr-only">
														Previous
													</span>
												</a>
											</li>
											<li className="page-item">
												<a
													className="page-link"
													href="#"
												>
													1
												</a>
											</li>
											<li className="page-item">
												<a
													className="page-link"
													href="#"
												>
													2
												</a>
											</li>
											<li className="page-item">
												<a
													className="page-link"
													href="#"
												>
													3
												</a>
											</li>
											<li className="page-item">
												<a
													className="page-link"
													href="#"
													aria-label="Next"
												>
													<span aria-hidden="true">
														<i className="fa fa-angle-left text-muted"></i>
													</span>
													<span className="sr-only">
														Next
													</span>
												</a>
											</li>
											<li className="page-item ml-1">
												<a
													className="page-link"
													href="#"
													aria-label="Next"
												>
													<span aria-hidden="true">
														آخرین
													</span>
													<span className="sr-only">
														Next
													</span>
												</a>
											</li>
										</ul>
									</nav>
								</div>
							</div>
						</div>
						{/* /////////footer-page footer/////////////////// */}
						<div className="film-manage-wrapper bg-default ">
							<div className="container">
								<div className="row  p-5"></div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
